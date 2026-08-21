param([switch]$Worker)

$ErrorActionPreference = "Stop"

if (-not $Worker) {
  for ($processAttempt = 1; $processAttempt -le 3; $processAttempt += 1) {
    $generationOutput = & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $PSCommandPath -Worker 2>&1
    if ($LASTEXITCODE -eq 0) {
      $generationOutput | Write-Output
      exit 0
    }
    if ($processAttempt -lt 3) { Start-Sleep -Milliseconds 1000 }
  }
  $generationOutput | Write-Error
  throw "Spanish Wolf narration generation failed after three clean processes."
}

$projectRoot = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$outputDirectory = [IO.Path]::GetFullPath((Join-Path $projectRoot "public\audio\wolf"))
if (-not $outputDirectory.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
  throw "The audio output directory must stay inside the project."
}
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
Get-ChildItem -LiteralPath $outputDirectory -Filter "*.wolf-tmp" -File | ForEach-Object {
  Remove-Item -LiteralPath $_.FullName -Force
}

function New-SpanishNarrator {
  $voice = New-Object -ComObject SAPI.SpVoice
  $spanishVoice = $voice.GetVoices() | Where-Object { $_.GetDescription() -like "*Spanish*" } | Select-Object -First 1
  if (-not $spanishVoice) {
    throw "No Spanish SAPI voice is installed."
  }
  $voice.Voice = $spanishVoice
  $voice.Volume = 100
  $voice.Rate = 0
  return $voice
}

$speaker = New-SpanishNarrator
$spanishVoiceDescription = $speaker.Voice.GetDescription()

$countdown = "<silence msec='150'/><rate speed='2'>Cinco. Cuatro. Tres. Dos. Uno.</rate>"
$clips = @(
  @{ Name = "all-close"; Countdown = $false; Text = "Todos los jugadores cierran los ojos." },
  @{ Name = "werewolf-open"; Countdown = $true; Text = "Los hombres lobo abren los ojos y eligen a su v&#237;ctima a la cuenta de" },
  @{ Name = "werewolf-close"; Countdown = $false; Text = "Los lobos cierran los ojos." },
  @{ Name = "seer-open"; Countdown = $true; Text = "La Vidente abre los ojos y elige a un jugador para saber si es lobo a la cuenta de" },
  @{ Name = "seer-close"; Countdown = $false; Text = "La Vidente cierra los ojos." },
  @{ Name = "doctor-open"; Countdown = $true; Text = "El Doctor abre los ojos y elige a qui&#233;n proteger a la cuenta de" },
  @{ Name = "doctor-close"; Countdown = $false; Text = "El Doctor cierra los ojos." },
  @{ Name = "village-open"; Countdown = $true; Text = "Se hace de d&#237;a. Todos los jugadores abren los ojos a la cuenta de" },
  @{ Name = "hunter-act"; Countdown = $false; Text = "Cazador, elige tu &#250;ltimo objetivo. No hay l&#237;mite de tiempo." },
  @{ Name = "vote-tie"; Countdown = $false; Text = "La votaci&#243;n termin&#243; en empate. Votad de nuevo entre los candidatos. No hay l&#237;mite de tiempo." },
  @{ Name = "day-banished"; Countdown = $false; Text = "La expulsi&#243;n aparece en pantalla." },
  @{ Name = "day-hunter"; Countdown = $false; Text = "El Cazador ha disparado. El resultado aparece en pantalla." },
  @{ Name = "village-wins"; Countdown = $false; Text = "La aldea ha vencido. Todos los lobos fueron eliminados." },
  @{ Name = "werewolves-win"; Countdown = $false; Text = "Los lobos han vencido. La aldea ha ca&#237;do." }
)

foreach ($clip in $clips) {
  $targetPath = Join-Path $outputDirectory ($clip.Name + ".wav")
  $written = $false
  for ($attempt = 1; $attempt -le 5 -and -not $written; $attempt += 1) {
    $temporaryPath = Join-Path $outputDirectory ($clip.Name + ".attempt-$attempt.wolf-tmp")
    $stream = New-Object -ComObject SAPI.SpFileStream
    $stream.Format.Type = 22
    $stream.Open($temporaryPath, 3, $false)
    try {
      $speaker.AudioOutputStream = $stream
      $speechText = [Net.WebUtility]::HtmlDecode([string]$clip.Text)
      if ($speechText.Contains("#")) {
        throw "Narration text still contains a hash character: $($clip.Name)"
      }
      $body = "<rate speed='-2'>$speechText</rate>" + $(if ($clip.Countdown) { $countdown } else { "" })
      $xml = "<sapi>$body</sapi>"
      [void]$speaker.Speak($xml, 8)
      $written = $true
    } catch {
      if ($attempt -ge 5) { throw }
    } finally {
      $stream.Close()
    }
    if ($written) {
      Move-Item -LiteralPath $temporaryPath -Destination $targetPath -Force
    } else {
      [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($speaker)
      $speaker = $null
      [GC]::Collect()
      [GC]::WaitForPendingFinalizers()
      Remove-Item -LiteralPath $temporaryPath -Force -ErrorAction SilentlyContinue
      Start-Sleep -Milliseconds 1000
      $speaker = New-SpanishNarrator
    }
  }
}

$expectedFiles = $clips | ForEach-Object { $_.Name + ".wav" }
Get-ChildItem -LiteralPath $outputDirectory -Filter "*.wav" -File | Where-Object { $_.Name -notin $expectedFiles } | ForEach-Object {
  Remove-Item -LiteralPath $_.FullName -Force
}

Write-Output ("Generated {0} Spanish Wolf narration clips with {1}." -f $clips.Count, $spanishVoiceDescription)
