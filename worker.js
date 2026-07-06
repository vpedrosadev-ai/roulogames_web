const jobs = new Map();
const SONG_GROUPS = [
  {
    id: "shadow",
    name: "Shadow Records",
    handle: "shadowrecords3062",
    channelId: "UCd2Q-t7qRvzZiwu39_qJDhQ",
    locked: true,
    image: "https://yt3.googleusercontent.com/ytc/AIdro_nzpA9J9NLCzJF6GIpKUlxqA-V6YCFrE60aOK5q51MxZA=s900-c-k-c0x00ffffff-no-rj",
    fallbackSongs: [
      songFromVideo("cIrEOpJUioI", "Ikalion - Delusional Sadness [SHDR011]", "Shadow Records", "2020-11-07T18:41:20+00:00"),
      songFromVideo("7VRiNlwSyTk", "Ikalion - Lofi Sandbox [SHDR010]", "Shadow Records", "2020-09-07T15:12:13+00:00"),
      songFromVideo("qYR5h4EFp30", "Jake Red - Paris [SHDR009]", "Shadow Records", "2020-07-05T16:42:33+00:00"),
      songFromVideo("iuHwKIZu9fk", "Jake Red - Raining Above The Stars [SHDR008]", "Shadow Records", "2020-05-05T14:01:35+00:00"),
      songFromVideo("Qivj6HspQ9s", "Jake Red - Back Where We Belong [SHDR007]", "Shadow Records", "2017-10-22T17:27:27+00:00"),
      songFromVideo("Edwy5WyPZAw", "Jake Red - Stories Of An Old Winter (Original Mix) [SHDR006]", "Shadow Records", "2017-05-06T16:04:50+00:00"),
      songFromVideo("806qyqyqWf0", "Jake Red - Eclipse [SHDR005]", "Shadow Records", "2017-02-18T19:43:52+00:00"),
      songFromVideo("ygTO7co11AA", "Jake Red - No Problem (Alfred Dj Trancer 140 Remix) [SHDR005]", "Shadow Records", "2017-02-18T19:37:58+00:00"),
      songFromVideo("oQY6qdLrL_Y", "Jake Red - Shadows (DJ Kraus Vocal Edit) [SHDR004]", "Shadow Records", "2016-11-24T16:17:16+00:00"),
      songFromVideo("YMKmzFVYdvk", "Jake Red - Shadows (The Anthem) [SHDR004]", "Shadow Records", "2016-11-05T16:19:25+00:00"),
      songFromVideo("sf2KosMybfo", "Jake Red - Dawn (Alba) [SHDR003]", "Shadow Records", "2016-09-05T12:39:14+00:00"),
      songFromVideo("O0Crrscap9A", "Jake Red - Sunstorm (2016 Edit) [SHDR002]", "Shadow Records", "2016-07-05T16:39:57+00:00"),
      songFromVideo("CvgAxTyT-CM", "Jake Red - Bombs Over Saturn [SHDR001]", "Shadow Records", "2016-05-05T15:36:12+00:00")
    ]
  },
  {
    id: "djkraus",
    name: "DJ Kraus",
    handle: "djkraus",
    channelId: "UCfT_rmhi4QB7xOd1blYDirw",
    songCount: 65,
    image: "https://yt3.googleusercontent.com/Bmcsby8diL-CWloVNsXFSInW11IV0I2Dz2ZTgXXxCKOnPmpM4XJNluDNqQPDIiK71Lmnmj0xm2k=s900-c-k-c0x00ffffff-no-rj",
    fallbackSongs: [
      songFromVideo("BH4nd5qSjUg", "Lights Burn Dimmer Tether", "DJ Kraus", "2026-02-21T16:00:16+00:00"),
      songFromVideo("IVoCVaXBaHY", "Summer on the inside Ma quale idea", "DJ Kraus", "2026-02-20T18:54:41+00:00"),
      songFromVideo("e-Uq3xrHuO4", "Running From Save The World", "DJ Kraus", "2025-04-07T13:44:27+00:00"),
      songFromVideo("hqxgErWfCEU", "See The Light (Phazing Edit)", "DJ Kraus", "2025-04-07T13:43:15+00:00"),
      songFromVideo("z9_AX7MXa8s", "Callaita drum and bass", "DJ Kraus", "2025-01-23T15:01:19+00:00"),
      songFromVideo("YP3HTPFswjk", "Telefono drum and bass", "DJ Kraus", "2025-01-22T15:00:51+00:00"),
      songFromVideo("NWoOne9_fA0", "Stayinit Turn On The Lights again", "DJ Kraus", "2025-01-21T15:00:35+00:00"),
      songFromVideo("YXm3QOaP_mk", "Antidote (Mashup)", "DJ Kraus", "2025-01-20T15:00:42+00:00"),
      songFromVideo("G2my1fgYDQs", "Reptilians Galaxies", "DJ Kraus", "2025-01-19T15:00:30+00:00"),
      songFromVideo("VH4u83_UNMY", "Bliss Years", "DJ Kraus", "2025-01-18T15:00:37+00:00"),
      songFromVideo("6qgQFONwLEI", "Levels vs Good Feeling", "DJ Kraus", "2025-01-17T15:00:09+00:00"),
      songFromVideo("dlTV54WohBA", "Playground Make Me Jump (DJ Kraus Old Collection Mashup)", "DJ Kraus", "2018-05-04T17:44:00+00:00"),
      songFromVideo("Ll_90HP57CI", "Tiesto vs Axwell / Ingrosso - Red Lights Dreamer (DJ Kraus Mashup)", "DJ Kraus", "2018-02-18T23:10:13+00:00"),
      songFromVideo("oFx-aa1UkMw", "Arston & Swanky Tunes vs Vanze & Reunify - Star Warz Angel (DJ Kraus Mashup)", "DJ Kraus", "2017-05-06T22:05:52+00:00"),
      songFromVideo("Z7MyEPPpXPE", "Jax Jones & RAYE vs Will.I.Am - You Don't Know Me Get Your Money (DJ Kraus Mashup)", "DJ Kraus", "2017-02-13T23:46:48+00:00")
    ]
  },
  {
    id: "skrillex",
    name: "Skrillex",
    handle: "Skrillex",
    channelId: "UC_TVqp_SyG6j5hG-xVRy95A",
    locked: true,
    image: "https://yt3.googleusercontent.com/52YIdK9j1ldi4y4i5P5qTKuquNfUXg7fDPgII5MCilGqYkjulqDiKDhF28lALLyRSvIm29F-Rw=s900-c-k-c0x00ffffff-no-rj",
    excludeVideoIds: [
      "0GzAJrz9T4s", "E89B5VEp1pg", "YfpV3al_Q3k", "BI3LNNOKMsA", "U41bONK2V-U",
      "v67VwpKXYZ0", "C9slkeFXogU", "BUULBlDcju4", "BGpzGu9Yp6Y", "btDPtzCGNTE",
      "sgU7XMUyAqY", "D7sQTF8Q1Vc", "YJVmu6yttiw", "ryR9A8-Nl0Q", "86khmc6y1yE",
      "l1NGkTSGoxo", "OGNHLc4FWwA", "YFyVdItksX4", "2cXDgFwE13g", "WSeNSzJ2-Jw",
      "Z9BKRDEScLs", "FyBoPeYKcr0", "6ngYQcxBjmU"
    ],
    fallbackSongs: [
      songFromVideo("0GzAJrz9T4s", "Skrillex & Young Miko - Duro (Official Visualizer)", "Skrillex", "2026-03-27T07:08:08+00:00"),
      songFromVideo("ni2pGkTPLDo", "SKRILLEX LIVE @ ULTRA MUSIC FESTIVAL 2025", "Skrillex", "2025-04-03T07:14:27+00:00"),
      songFromVideo("Xwml50CG6LA", "F*CK U SKRILLEX YOU THINK UR ANDY WARHOL BUT UR NOT!!", "Skrillex", "2025-04-01T16:00:42+00:00"),
      songFromVideo("E89B5VEp1pg", "Skrillex, Hamdi, TAICHU & OFFAIAH - Push", "Skrillex", "2024-05-29T17:20:25+00:00"),
      songFromVideo("n7Mp7_SoU1g", "Our track TAKA is live", "Skrillex", "2024-03-25T21:51:09+00:00"),
      songFromVideo("-Hvwzm8sJBQ", "Full Coachella stream online now", "Skrillex", "2023-10-18T19:08:54+00:00"),
      songFromVideo("QZOjymeDblE", "Pepper @flowdan @LilBabyATL", "Skrillex", "2023-10-13T14:38:39+00:00"),
      songFromVideo("6W7GSc2gVhk", "Flowdan, Lil Baby, & Skrillex - Pepper (Official Audio)", "Skrillex", "2023-10-13T04:00:07+00:00"),
      songFromVideo("Be6Lo8pis74", "BADDERS out now", "Skrillex", "2023-09-29T15:00:09+00:00"),
      songFromVideo("YfpV3al_Q3k", "Skrillex, PEEKABOO, Flowdan, & G-Rex - Badders (Official Audio)", "Skrillex", "2023-08-18T04:00:32+00:00"),
      songFromVideo("wTR-ScwmOXI", "Skrillex & Boys Noize - Fine Day Anthem (Official Audio)", "Skrillex", "2023-08-03T14:37:40+00:00"),
      songFromVideo("IZdIEr0i2LU", "Fine Day Anthem is out Friday", "Skrillex", "2023-07-06T19:00:09+00:00"),
      songFromVideo("T7SvN0dkQps", "Skrillex with Nai Barghouti - XENA (Official Music Video)", "Skrillex", "2023-06-08T17:00:12+00:00")
    ]
  },
  {
    id: "daftpunk",
    name: "Daft Punk",
    handle: "daftpunk",
    channelId: "UC_kRDKYrUlrbtrSiyu5Tflg",
    locked: true,
    image: "https://yt3.googleusercontent.com/XPIjND5mm2nuSIJ6uQyIWLCawnIYSVm6QS0GEN_UNuPLRD5EFa6yCkYrcyLpl3TFuBo6AZynsA=s900-c-k-c0x00ffffff-no-rj",
    excludeVideoIds: [
      "HrymcVOGdMw", "kCynlSzQyoI", "pFGy6IEkKiE", "wrPfhAe0jLE", "K1ZTngbyBrc",
      "U9iOSKobBr4", "bFme4nJl2Fg", "0qpD-w7-DAE", "1FNS4q1bW-k", "o_F_meHFxvY",
      "GXSm7SVuyIM", "zsYCiKmaaIs", "7i6zPwgEBxc", "HZpjQ8Itc3k", "yUmSCb0rDEE",
      "u2wR7IlQ2TA", "6vIOnOLiK-g", "CSkbg3ZbQzA", "Hxa-5BZXsto", "CYKekR6661o",
      "OJvZZu1Jax8", "h0kcWPsbVuw", "DNjRHVKNynM", "S5D7SYiA6w4"
    ],
    fallbackSongs: [
      songFromVideo("ZojLNnGbRgk", "Archive #429 Sahara @ Coachella: April 29, 2006 #daftpunk #coachella", "Daft Punk", "2026-04-29T16:05:32+00:00"),
      songFromVideo("vJs4DsHodhY", "Archive #728", "Daft Punk", "2026-04-07T15:46:51+00:00"),
      songFromVideo("wA7E7Vufn7Q", "Archive #123", "Daft Punk", "2026-03-12T15:59:54+00:00"),
      songFromVideo("o_oirq1zaFE", "Reminder. Human After All Music Video. Watch now. #daftpunk #outnow", "Daft Punk", "2026-03-06T17:01:32+00:00"),
      songFromVideo("mwF-bUX9M8w", "Human After All Official Music Video. Watch now. Link in bio.", "Daft Punk", "2026-02-22T14:25:16+00:00"),
      songFromVideo("UsXubuXq1lM", "Daft Punk - Human After All (Official Music Video)", "Daft Punk", "2026-02-22T14:22:00+00:00"),
      songFromVideo("pZzAYtOP5_8", "Human After All Remixes, on vinyl for the first time ever. Out now.", "Daft Punk", "2025-11-28T17:16:10+00:00"),
      songFromVideo("zHj62zTk4xo", "Daft Punk - Robot Rock (Daft Punk Maximum Overdrive Mix) (Official Audio)", "Daft Punk", "2025-11-27T23:01:24+00:00"),
      songFromVideo("s5NjOW43hJo", "Daft Punk - Human After All (The Juan Maclean Remix) (Official Audio)", "Daft Punk", "2025-11-27T23:01:21+00:00"),
      songFromVideo("ljP5JHeth_w", "Daft Punk - Human After All (Guy-Man After All Justice Remix) (Official Audio)", "Daft Punk", "2025-11-27T23:01:10+00:00"),
      songFromVideo("iuPrdT_CuoI", "Daft Punk - Robot Rock (Soulwax Remix) (Official Audio)", "Daft Punk", "2025-11-27T23:01:05+00:00"),
      songFromVideo("Yuqgz3dVnQM", "Daft Punk - Human After All (Emperor Machine Version) (Official Audio)", "Daft Punk", "2025-11-27T23:01:01+00:00"),
      songFromVideo("cUC4BY7CdY4", "Daft Punk - Technologic (Digitalism Remix) (Official Audio)", "Daft Punk", "2025-11-27T23:01:01+00:00"),
      songFromVideo("erAODxtYVKI", "Daft Punk - Technologic (Vitalic Remix) (Official Audio)", "Daft Punk", "2025-11-27T23:00:55+00:00"),
      songFromVideo("W3HMtXMzRos", "Daft Punk - Human After All (Alter Ego Remix) (Official Audio)", "Daft Punk", "2025-11-27T23:00:49+00:00")
    ]
  },
  {
    id: "espanolo",
    name: "Espa\u00f1olo",
    locked: true,
    preserveSongOrder: true,
    image: "/images/espanolo-cover.jpg",
    fallbackSongs: [
      songFromVideo("nYnLVWXmRm8", "La Oreja de Van Gogh - Rosas", "Espa\u00f1olo"),
      songFromVideo("cx5qVmtfayA", "La Oreja de Van Gogh - La Playa", "Espa\u00f1olo"),
      songFromVideo("4MB0CmrADaU", "La Oreja de Van Gogh - Puedes contar conmigo", "Espa\u00f1olo"),
      songFromVideo("nHxam-MQg-o", "El Canto del Loco - Zapatillas", "Espa\u00f1olo"),
      songFromVideo("mzSI1oUXYxs", "El Canto del Loco - Besos", "Espa\u00f1olo"),
      songFromVideo("rCxLx_3T5GE", "El Canto del Loco - Peter Pan", "Espa\u00f1olo"),
      songFromVideo("NOjgze5Nmzc", "Estopa - Vino Tinto", "Espa\u00f1olo"),
      songFromVideo("EdtwwL-uI8g", "Estopa - Fuente de energia", "Espa\u00f1olo"),
      songFromVideo("GxQjx7FkmNA", "Fito y Fitipaldis - Soldadito Marinero", "Espa\u00f1olo"),
      songFromVideo("iUXs4Nt3Y7Y", "Fito y Fitipaldis - Por la boca vive el pez", "Espa\u00f1olo"),
      songFromVideo("8qz8FqmTsJY", "Fito y Fitipaldis - La casa por el tejado", "Espa\u00f1olo"),
      songFromVideo("qcC92ZnhGQY", "Amaral - Sin ti no soy nada", "Espa\u00f1olo"),
      songFromVideo("HPX-b6ZQD0s", "Amaral - Marta Sebas Guille y los demas", "Espa\u00f1olo"),
      songFromVideo("NFary9e9jo0", "Amaral - El universo sobre mi", "Espa\u00f1olo"),
      songFromVideo("A9UdCLGvjXg", "Pereza - Princesas", "Espa\u00f1olo"),
      songFromVideo("yR_9e1yo9uU", "Pereza - Lady Madrid", "Espa\u00f1olo"),
      songFromVideo("eznXJEjvHbk", "Melendi - Caminando por la vida", "Espa\u00f1olo"),
      songFromVideo("v3-9eDFDAFw", "Melendi - Tu jardin con enanitos", "Espa\u00f1olo"),
      songFromVideo("D9W4DLjmoOM", "Melendi - Destino o casualidad", "Espa\u00f1olo"),
      songFromVideo("gra-sIV1n4U", "David Bisbal - Ave Maria", "Espa\u00f1olo"),
      songFromVideo("vUqYEh5gJ_c", "David Bisbal - Buleria", "Espa\u00f1olo"),
      songFromVideo("SVoNefPBoL0", "David Bisbal - Silencio", "Espa\u00f1olo"),
      songFromVideo("xZHBQjLj_dw", "Chenoa - Cuando tu vas", "Espa\u00f1olo"),
      songFromVideo("PkVBYuaWPPE", "David Bustamante - Dos hombres y un destino", "Espa\u00f1olo"),
      songFromVideo("n-zHCwxtpec", "Andy y Lucas - Son de amores", "Espa\u00f1olo"),
      songFromVideo("mk10O26j5-k", "Alex Ubago - Me muero por conocerte", "Espa\u00f1olo"),
      songFromVideo("rd8ZFtD5rM8", "Nena Daconte - Tenia tanto que darte", "Espa\u00f1olo"),
      songFromVideo("F0rwOsAteXM", "Pablo Alboran - Solamente tu", "Espa\u00f1olo"),
      songFromVideo("yBAx5nBdJqU", "Pablo Alboran - Saturno", "Espa\u00f1olo"),
      songFromVideo("xxhET61yB1A", "Jarabe de Palo - Bonito", "Espa\u00f1olo"),
      songFromVideo("arZZw8NyPq8", "Las Ketchup - Asereje", "Espa\u00f1olo"),
      songFromVideo("kRslNQgxKR4", "King Africa - Bomba", "Espa\u00f1olo"),
      songFromVideo("kMIaYXxLnUA", "Juanes - A Dios le pido", "Espa\u00f1olo"),
      songFromVideo("kRt2sRyup6A", "Juanes - La camisa negra", "Espa\u00f1olo"),
      songFromVideo("voxgN3Dhjuo", "Juanes - Me enamora", "Espa\u00f1olo"),
      songFromVideo("a8Rwz6zBJSE", "Shakira - Suerte", "Espa\u00f1olo"),
      songFromVideo("Dsp_8Lm1eSk", "Shakira - La Tortura", "Espa\u00f1olo"),
      songFromVideo("dzsuE5ugxf4", "Shakira - Waka Waka Esto es Africa", "Espa\u00f1olo"),
      songFromVideo("NUsoVlDFqZg", "Enrique Iglesias - Bailando", "Espa\u00f1olo"),
      songFromVideo("9sg-A-eS6Ig", "Enrique Iglesias - Subeme la radio", "Espa\u00f1olo"),
      songFromVideo("4DO8GsIYfhQ", "Enrique Iglesias - Cuando me enamoro", "Espa\u00f1olo"),
      songFromVideo("kJQP7kiw5Fk", "Luis Fonsi - Despacito", "Espa\u00f1olo"),
      songFromVideo("CCF1_jI8Prk", "Daddy Yankee - Gasolina", "Espa\u00f1olo"),
      songFromVideo("7zp1TbLFPp8", "Don Omar - Danza Kuduro", "Espa\u00f1olo"),
      songFromVideo("vXtJkDHEAAc", "Calle 13 - Atrevete te te", "Espa\u00f1olo"),
      songFromVideo("hXI8RQYC36Q", "Nicky Jam - El perdon", "Espa\u00f1olo"),
      songFromVideo("VMp55KH_3wo", "Gente de Zona - La gozadera", "Espa\u00f1olo"),
      songFromVideo("-UV0QGLmYys", "Carlos Vives y Shakira - La Bicicleta", "Espa\u00f1olo"),
      songFromVideo("NE3IkFadCHM", "Sebastian Yatra - Traicionera", "Espa\u00f1olo"),
      songFromVideo("_gm5piKnrS4", "Morat - Como te atreves", "Espa\u00f1olo"),
      songFromVideo("qKp1f7Vn9dM", "Camilo - Vida de rico", "Espa\u00f1olo"),
      songFromVideo("tbneQDc2H3I", "Karol G y Nicki Minaj - Tusa", "Espa\u00f1olo"),
      songFromVideo("acEOASYioGY", "Bad Bunny - Callaita", "Espa\u00f1olo"),
      songFromVideo("Cr8K88UcO0s", "Bad Bunny - Titi me pregunto", "Espa\u00f1olo"),
      songFromVideo("Rht7rBHuXW8", "Rosalia - Malamente", "Espa\u00f1olo"),
      songFromVideo("p7bfOZek9t4", "Rosalia y J Balvin - Con Altura", "Espa\u00f1olo"),
      songFromVideo("5g2hT4GmAGU", "Rosalia - Despecha", "Espa\u00f1olo"),
      songFromVideo("ZlFri4ez_lE", "C. Tangana - Demasiadas mujeres", "Espa\u00f1olo"),
      songFromVideo("ltmO9XQVdSg", "C. Tangana - Tu me dejaste de querer", "Espa\u00f1olo"),
      songFromVideo("A_g3lMcWVy0", "Quevedo y Bizarrap - Music Sessions 52", "Espa\u00f1olo"),
      songFromVideo("V3FAVbrc598", "Zzoilo y Aitana - Mon Amour Remix", "Espa\u00f1olo"),
      songFromVideo("e8vI0pYLcYU", "Aitana - Vas a quedarte", "Espa\u00f1olo"),
      songFromVideo("-dvftyeRYzM", "Lola Indigo - Ya no quiero na", "Espa\u00f1olo"),
      songFromVideo("sh2lLZBnrfA", "Ana Mena - Madrid City", "Espa\u00f1olo"),
      songFromVideo("-z9qeALR7j0", "Rigoberta Bandini - Ay mama", "Espa\u00f1olo"),
      songFromVideo("1j_dSNUGU-U", "Vicco - Nochentera", "Espa\u00f1olo"),
      songFromVideo("wnJ6LuUFpMo", "J Balvin y Willy William - Mi gente", "Espa\u00f1olo"),
      songFromVideo("y8trd3gjJt0", "Farruko - Pepas", "Espa\u00f1olo"),
      songFromVideo("CFPLIaMpGrY", "Rauw Alejandro - Todo de ti", "Espa\u00f1olo"),
      songFromVideo("YXnjy5YlDwk", "Marc Anthony - Vivir mi vida", "Espa\u00f1olo"),
      songFromVideo("58D3Qh2oDIs", "Tramboliko - A toda velocidad remix", "Espa\u00f1olo"),
      songFromVideo("WHejvUhX6rk", "Yandel y Feid - Yandel 150", "Espa\u00f1olo"),
      songFromVideo("6DRkf3kZMXw", "Ozuna - El Farsante", "Espa\u00f1olo"),
      songFromVideo("3pkaKh5wUEI", "Steve Aoki, Daddy Yankee, Play-N-Skillz y Elvis Crespo - Azukita", "Espa\u00f1olo"),
      songFromVideo("4X4uckVyk9o", "Bad Bunny - DtMF", "Espa\u00f1olo"),
      songFromVideo("bAWQ7B3rRAo", "Aitana - Superestrella", "Espa\u00f1olo"),
      songFromVideo("QCZZwZQ4qNs", "Karol G - Si antes te hubiera conocido", "Espa\u00f1olo"),
      songFromVideo("WCQuf90qf9U", "King Africa - La Bomba", "Espa\u00f1olo"),
      songFromVideo("PTqveg2jlJ8", "King Africa - Paquito el chocolatero", "Espa\u00f1olo"),
      songFromVideo("iaT-o-3aulg", "Melody - El baile del gorila", "Espa\u00f1olo"),
      songFromVideo("GuZzuQvv7uc", "Chayanne - Torero", "Espa\u00f1olo"),
      songFromVideo("iyl0ocEW7-Q", "Sebastian Yatra - Tacones rojos", "Espa\u00f1olo"),
      songFromVideo("w7pjt9ZH3NM", "Rosalia - La Perla", "Espa\u00f1olo")
    ]
  },
  {
    id: "30-aniversario",
    name: "30 Aniversario",
    locked: true,
    preserveSongOrder: true,
    image: "https://i.ytimg.com/vi/UqyT8IEBkvY/hqdefault.jpg",
    fallbackSongs: [
      songFromVideo("UqyT8IEBkvY", "Bruno Mars - 24K Magic (Official Music Video)", "30 Aniversario"),
      songFromVideo("QYh6mYIJG2Y", "Ariana Grande - 7 rings (Official Video)", "30 Aniversario"),
      songFromVideo("vBynw9Isr28", "Lady Gaga - Abracadabra (Official Music Video)", "30 Aniversario"),
      songFromVideo("GEo7W-uJNkc", "Accidentally In Love (From \"Shrek 2\" Soundtrack)", "30 Aniversario"),
      songFromVideo("FTQbiNvZqaY", "Toto - Africa (Official HD Video)", "30 Aniversario"),
      songFromVideo("ABfQuZqq8wg", "Ain\u0027t No Mountain High Enough", "30 Aniversario"),
      songFromVideo("hcm55lU9knw", "Michel Teló - Ai Se Eu Te Pego - Ao Vivo", "30 Aniversario"),
      songFromVideo("niqrrmev4mA", "Lady Gaga - Alejandro (Official Music Video)", "30 Aniversario"),
      songFromVideo("bAVKp0X9JnQ", "Sasha Lopez \u0026 Andrea D Ft Broono - All My People OFFICIAL VIDEO HD", "30 Aniversario"),
      songFromVideo("450p7goxZqg", "John Legend - All of Me (Official Video)", "30 Aniversario"),
      songFromVideo("L_jWHffIx5E", "Smash Mouth - All Star", "30 Aniversario"),
      songFromVideo("GPoPKwXybY4", "Stromae - Alors On Danse (Radio Edit) [Audio HQ]", "30 Aniversario"),
      songFromVideo("cGmZP635fQU", "Inna Amazing Radio Edit", "30 Aniversario"),
      songFromVideo("Ee_uujKuJMI", "Green Day - American Idiot [Official Music Video] [4K Upgrade]", "30 Aniversario"),
      songFromVideo("ekr2nIex040", "ROSÉ, Bruno Mars - APT.", "30 Aniversario"),
      songFromVideo("vXtJkDHEAAc", "Calle 13 - Atrevete te te (Explicit)", "30 Aniversario"),
      songFromVideo("k85mRPqvMbE", "Crazy Frog - Axel F (Official Video)", "30 Aniversario"),
      songFromVideo("-z9qeALR7j0", "Rigoberta Bandini - Ay Mamá", "30 Aniversario"),
      songFromVideo("C-u5WLJ9Yk4", "Britney Spears - ...Baby One More Time (Official Video)", "30 Aniversario"),
      songFromVideo("DyDfgMOUjCI", "Billie Eilish - bad guy", "30 Aniversario"),
      songFromVideo("qrO4YZeyl0I", "Lady Gaga - Bad Romance (Official Music Video)", "30 Aniversario"),
      songFromVideo("iaGjz4dtr3o", "Bakermat - Baianá", "30 Aniversario"),
      songFromVideo("xiWtqVtd1Oo", "Paradisio ft Maria Garcia \u0026 Dj Patrick Samoy - Bailando (Official 4K Video)", "30 Aniversario"),
      songFromVideo("9m6ogS57sc8", "Juan Magán - Bailando por Ahi", "30 Aniversario"),
      songFromVideo("YJVmu6yttiw", "SKRILLEX - Bangarang feat. Sirah [Official Music Video]", "30 Aniversario"),
      songFromVideo("ZyhrYis509A", "Aqua - Barbie Girl (Official Music Video)", "30 Aniversario"),
      songFromVideo("NUTGr5t3MoY", "Green Day - Basket Case [Official Music Video] (4K Upgrade)", "30 Aniversario"),
      songFromVideo("WuBP0lmULD8", "DAVE RODGERS / BEAT OF THE RISING SUNOfficial Lyric VideoD/INITIAL D", "30 Aniversario"),
      songFromVideo("DwpedKWwS3w", "Jeff Mills - The Bells", "30 Aniversario"),
      songFromVideo("_WkzhhO21s8", "Fred again.. - Billie (Loving Arms) (23 July 2021)", "30 Aniversario"),
      songFromVideo("JEmbyx8NLxA", "Calvin Harris, Clementine Douglas - Blessings (Official Video)", "30 Aniversario"),
      songFromVideo("XKRx6V7bqQI", "Pendulum - Blood Sugar Live At Brixton Academy", "30 Aniversario"),
      songFromVideo("yyDUC1LUXSU", "Robin Thicke - Blurred Lines ft. T.I., Pharrell", "30 Aniversario"),
      songFromVideo("e-IWRmpefzE", "Knife Party - \u0027Bonfire\u0027", "30 Aniversario"),
      songFromVideo("a_UqAMQT_LE", "Manu Chao - Bongo Bong (Official Audio)", "30 Aniversario"),
      songFromVideo("GjXpOolPUBc", "Born Slippy (Nuxx) (Radio Edit)", "30 Aniversario"),
      songFromVideo("sfNjVHWqJdM", "A.M.C - Brazil", "30 Aniversario"),
      songFromVideo("v2H4l9RpkwM", "Linkin Park - Breaking the Habit", "30 Aniversario"),
      songFromVideo("Nj2U6rhnucI", "Dua Lipa - Break My Heart (Official Video)", "30 Aniversario"),
      songFromVideo("30w8DyEJ__0", "Arctic Monkeys - Brianstorm (Official Video)", "30 Aniversario"),
      songFromVideo("JnfyjwChuNU", "Red Hot Chili Peppers - By The Way [Official Music Video]", "30 Aniversario"),
      songFromVideo("G6AcBEz3Qxg", "DNCE - Cake By The Ocean (Lyrics)", "30 Aniversario"),
      songFromVideo("F57P9C4SAW4", "Katy Perry - California Gurls (Official Music Video) ft. Snoop Dogg", "30 Aniversario"),
      songFromVideo("YlUKcNNmywk", "Red Hot Chili Peppers - Californication (Official Music Video) [HD UPGRADE]", "30 Aniversario"),
      songFromVideo("iWDxMpLvaUE", "Calling (Spider-Man: Across the Spider-Verse)", "30 Aniversario"),
      songFromVideo("8DyziWtkfBw", "Red Hot Chili Peppers - Can\u0027t Stop [Official Music Video]", "30 Aniversario"),
      songFromVideo("Fexz4MGLphw", "EL CHOMBO X MAFFIO X SHELOW SHAQ feat. ANDYS VAL - CHACARRON 3.0 (Official Music Video)", "30 Aniversario"),
      songFromVideo("2vjPBrBU-TM", "Sia - Chandelier (Official Video)", "30 Aniversario"),
      songFromVideo("CC5ca6Hsb2Q", "Robert Miles - Children [Dream Version]", "30 Aniversario"),
      songFromVideo("Cw0nkxFhpoM", "Benny Benassi ft. Gary Go - Cinema (Skrillex Remix) (Official Video)", "30 Aniversario"),
      songFromVideo("BcLO9GD41V0", "Clausura (Instrumental)", "30 Aniversario"),
      songFromVideo("5X5q3d5RvV8", "SHEE - Close My Eyes (music video)", "30 Aniversario"),
      songFromVideo("88gZ5bw7GU4", "Club Can\u0027t Handle Me (feat. David Guetta) (From the Step Up 3D Soundtrack)", "30 Aniversario"),
      songFromVideo("p7bfOZek9t4", "ROSALÍA, J Balvin, El Guincho - Con Altura", "30 Aniversario"),
      songFromVideo("IWELYcYYhWc", "Don Patricio, Cruz Cafuné - Contando Lunares (feat. Cruz Cafuné)", "30 Aniversario"),
      songFromVideo("7_swad52vEo", "Atmozfears \u0026 Sound Rush - Country Roads (Extended Mix)", "30 Aniversario"),
      songFromVideo("cE0wfjsybIQ", "Noisestorm - Crab Rave (Official Music Video)", "30 Aniversario"),
      songFromVideo("TmKh7lAwnBI", "Bad Bunny, JHAYCO - DÁKITI", "30 Aniversario"),
      songFromVideo("JWRlTezTF2k", "Trueno - DANCE CRIP (Video Oficial)", "30 Aniversario"),
      songFromVideo("OiC1rgCPmUQ", "Dua Lipa - Dance The Night (From Barbie The Album) [Official Music Video]", "30 Aniversario"),
      songFromVideo("0yBnIUX0QAE", "Toploader - Dancing in the Moonlight (Official Video)", "30 Aniversario"),
      songFromVideo("xFrGuyw1V8s", "ABBA - Dancing Queen (Official Music Video)", "30 Aniversario"),
      songFromVideo("JmatCSqYu38", "Don Omar, Lucenzo - Danza Kuduro", "30 Aniversario"),
      songFromVideo("MgQPSSU1S2s", "Knock2 - dashstar* (Official Music Video)", "30 Aniversario"),
      songFromVideo("zr_c5rqvSg4", "INNA - Deja Vu (feat. Bob Taylor) [Official Music Video]", "30 Aniversario"),
      songFromVideo("5g2hT4GmAGU", "ROSALÍA - DESPECHÁ", "30 Aniversario"),
      songFromVideo("0-p5EbAsxUM", "Rihanna - Diamonds", "30 Aniversario"),
      songFromVideo("kPa7bsKwL-c", "Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video)", "30 Aniversario"),
      songFromVideo("WkL7Fkigfn8", "ABBA - Does Your Mother Know", "30 Aniversario"),
      songFromVideo("oygrmJFKYZY", "Dua Lipa - Don\u0027t Start Now (Official Music Video)", "30 Aniversario"),
      songFromVideo("yd8jh9QYfEs", "Rihanna - Don\u0027t Stop The Music", "30 Aniversario"),
      songFromVideo("i0vFid2tKbI", "Pitbull - Don\u0027t Stop The Party ft. TJR", "30 Aniversario"),
      songFromVideo("2CGF_Z3yZAo", "Jason Derulo - Don\u0027t Wanna Go Home (Official Video)", "30 Aniversario"),
      songFromVideo("4X4uckVyk9o", "Bad Bunny - DtMF (Letra)", "30 Aniversario"),
      songFromVideo("g3lAAsaiT8g", "Echa Pa\u0027lla (Manos Pa\u0027rriba)", "30 Aniversario"),
      songFromVideo("hECrIvrALkI", "Osmani Garcia \"La Voz\" Ft  Pitbull, Sensato - El Taxi (Official Video)", "30 Aniversario"),
      songFromVideo("eVli-tstM5E", "Sabrina Carpenter - Espresso", "30 Aniversario"),
      songFromVideo("xPsiB9GlgKQ", "Everybody (Backstreet\u0027s Back) (Radio Edit)", "30 Aniversario"),
      songFromVideo("HyHNuVaZJ-k", "Gorillaz - Feel Good Inc. (Official Video)", "30 Aniversario"),
      songFromVideo("ozv4q2ov3Mk", "Calvin Harris - Feels (Official Video) ft. Pharrell Williams, Katy Perry, Big Sean", "30 Aniversario"),
      songFromVideo("5jlI4uzZGjU", "Pitbull - Feel This Moment (Official Video) ft. Christina Aguilera", "30 Aniversario"),
      songFromVideo("zZPvME8H2Oo", "Mägo de Oz - Fiesta Pagana", "30 Aniversario"),
      songFromVideo("HMqgVXSvwGo", "Pitbull - Fireball (Official Video) ft. John Ryan", "30 Aniversario"),
      songFromVideo("psuRGfAaju4", "Owl City - Fireflies (Official Music Video)", "30 Aniversario"),
      songFromVideo("KSbwHzlcgs8", "Katy Perry - Firework (Lyrics)", "30 Aniversario"),
      songFromVideo("k4V3Mo61fJM", "Coldplay - Fix You (Official Video)", "30 Aniversario"),
      songFromVideo("G7KNmW9a75Y", "Miley Cyrus - Flowers (Official Video)", "30 Aniversario"),
      songFromVideo("3OnnDqH6Wj8", "Flo Rida - Good Feeling [Official Video]", "30 Aniversario"),
      songFromVideo("H7HmzwI67ec", "Owl City \u0026 Carly Rae Jepsen - Good Time", "30 Aniversario"),
      songFromVideo("sEgXQJgYxoE", "INNA - Good Time (feat. Pitbull) | Official Music Video", "30 Aniversario"),
      songFromVideo("C7dPqrmDWxs", "Pharrell Williams - Happy (from Despicable Me 2) [Ballroom Version]", "30 Aniversario"),
      songFromVideo("7cPhKwRF4oY", "Salvatore Ganacci - Heartbass (feat. Tommy Cash) [Official Audio]", "30 Aniversario"),
      songFromVideo("6Cp6mKbRTQY", "Avicii - Hey Brother", "30 Aniversario"),
      songFromVideo("DUT5rEU6pqM", "Shakira - Hips Don\u0027t Lie (featuring Wyclef Jean) (Official 4K Video) ft. Wyclef Jean", "30 Aniversario"),
      songFromVideo("Vh_3zdmaHbk", "Inna - Hot (Official Video HD)", "30 Aniversario"),
      songFromVideo("tAp9BKosZXs", "Katy Perry - I Kissed A Girl (Official Music Video)", "30 Aniversario"),
      songFromVideo("8F8nBXEYP2g", "Pitbull - I Know You Want Me (Calle Ocho)", "30 Aniversario"),
      songFromVideo("vx2u5uUu3DE", "Bon Jovi - It\u0027s My Life (Official Music Video)", "30 Aniversario"),
      songFromVideo("4fndeDfaWCg", "Backstreet Boys - I Want It That Way (Official HD Video)", "30 Aniversario"),
      songFromVideo("k04tX2fvh0o", "Guns N\u0027 Roses - Knockin\u0027 On Heaven\u0027s Door (Visualizer)", "30 Aniversario"),
      songFromVideo("e-CEd6xrRQc", "ROSALÍA, The Weeknd - LA FAMA", "30 Aniversario"),
      songFromVideo("GBw8-_INgrU", "El Canto del Loco - La Madre De Jose", "30 Aniversario"),
      songFromVideo("w15oWDh02K4", "GIGI D\u0027AGOSTINO - L\u0027AMOUR TOUJOURS ( OFFICIAL VIDEO )", "30 Aniversario"),
      songFromVideo("fLexgOxsZu0", "Bruno Mars - The Lazy Song (Official Music Video)", "30 Aniversario"),
      songFromVideo("rn9AQoI7mYU", "Major Lazer, MØ, DJ Snake - Lean On (feat. MØ \u0026 DJ Snake)", "30 Aniversario"),
      songFromVideo("XEhKSc52QqY", "Avicii - Levels (Radio Edit)", "30 Aniversario"),
      songFromVideo("TUVcZfQe-Kw", "Dua Lipa - Levitating Featuring DaBaby (Official Music Video)", "30 Aniversario"),
      songFromVideo("6md5RSnVUuo", "MIKA - Lollipop (Official Music Video)", "30 Aniversario"),
      songFromVideo("BC19kwABFwc", "Dua Lipa - Love Again (Official Music Video)", "30 Aniversario"),
      songFromVideo("ctutQRq76bU", "Bad Bunny - MALDITA POBREZA", "30 Aniversario"),
      songFromVideo("NFSyl3pwa-A", "La Pegatina - Mari Carmen (videoclip oficial)", "30 Aniversario"),
      songFromVideo("I7HahVwYpwo", "The Black Eyed Peas - Meet Me Halfway (Official Music Video)", "30 Aniversario"),
      songFromVideo("7K7Sl0FPsVo", "Bad Bunny - Me Fui de Vacaciones", "30 Aniversario"),
      songFromVideo("NUVCQXMUVnI", "David Guetta Feat. Kid Cudi - Memories (Official Video)", "30 Aniversario"),
      songFromVideo("saGYMhApaH8", "Bad Bunny (ft. Chencho Corleone) - Me Porto Bonito (Official Video) | Un Verano Sin Ti", "30 Aniversario"),
      songFromVideo("LCH1AsUydSc", "Swedish House Mafia - Miami 2 Ibiza ft. Tinie Tempah", "30 Aniversario"),
      songFromVideo("eQCpjOBJ5UQ", "ROSALÍA - Milionària", "30 Aniversario"),
      songFromVideo("961v0E3b01g", "Calvin Harris, Ellie Goulding - Miracle (Official Video)", "30 Aniversario"),
      songFromVideo("_PJvpq8uOZM", "Bad Bunny - MONACO", "30 Aniversario"),
      songFromVideo("o2tdLOK7-PE", "Zzoilo \u0026 Aitana - Mon Amour Remix (Letra/Lyrics)", "30 Aniversario"),
      songFromVideo("ETxmCCsMoD0", "ABBA - Money, Money, Money (Official Music Video)", "30 Aniversario"),
      songFromVideo("smqhSl0u_sI", "Kendrick Lamar - Money Trees (Feat. Jay Rock)", "30 Aniversario"),
      songFromVideo("1_4ELAxKrDc", "Tiësto, Ava Max - The Motto", "30 Aniversario"),
      songFromVideo("iEPTlhBmwRg", "Maroon 5 - Moves Like Jagger ft. Christina Aguilera (Official Music Video) ft. Christina Aguilera", "30 Aniversario"),
      songFromVideo("bZxrIoCPsOc", "Sia - Move Your Body (Alan Walker Remix - Official Audio)", "30 Aniversario"),
      songFromVideo("dQw4w9WgXcQ", "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)", "30 Aniversario"),
      songFromVideo("k2qgadSvNyU", "Dua Lipa - New Rules (Official Music Video)", "30 Aniversario"),
      songFromVideo("QZXc39hT8t4", "Dr. Dre - The Next Episode (Official Music Video) ft. Snoop Dogg, Kurupt, Nate Dogg", "30 Aniversario"),
      songFromVideo("GzU8KqOY8YA", "Sean Paul - No Lie ft. Dua Lipa", "30 Aniversario"),
      songFromVideo("04mfKJWDSzI", "Gorillaz - On Melancholy Hill (Official Video)", "30 Aniversario"),
      songFromVideo("1JHXn0LWx50", "Alan Walker, Sabrina Carpenter \u0026 Farruko - On My Way (Da Tweekaz Remix)", "30 Aniversario"),
      songFromVideo("t4H_Zoh7G5A", "Jennifer Lopez, Pitbull - On The Floor (Official Music Video)", "30 Aniversario"),
      songFromVideo("CduA0TULnow", "Britney Spears - Oops!...I Did It Again (Official HD Video)", "30 Aniversario"),
      songFromVideo("tK4ioPhpal4", "BAD BUNNY x DON OMAR - PA\u0027 ROMPERLA | LAS QUE NO IBAN A SALIR (Official Audio)", "30 Aniversario"),
      songFromVideo("v5_SYkFpFiY", "PESO PLUMA || BZRP Music Sessions #55/66", "30 Aniversario"),
      songFromVideo("9HDEHj2yzew", "Dua Lipa - Physical (Official Video)", "30 Aniversario"),
      songFromVideo("bESGLojNYSo", "Lady Gaga - Poker Face (Official Music Video)", "30 Aniversario"),
      songFromVideo("RxKVWs_qYBk", "C. Tangana, ROSALÍA - Antes de Morirme - feat. ROSALÍA", "30 Aniversario"),
      songFromVideo("ZaI2IlHwmgQ", "The Black Eyed Peas - Pump It (Official Music Video)", "30 Aniversario"),
      songFromVideo("6HhzIn8I4ak", "Pursuit of Happiness (Steve Aoki Remix) - Kid Cudi AUDIO", "30 Aniversario"),
      songFromVideo("w3viBe2Q0P8", "Imagine Dragons - Radioactive (Lyric Video)", "30 Aniversario"),
      songFromVideo("ATs8p464vt8", "Pitbull - Rain Over Me ft. Marc Anthony", "30 Aniversario"),
      songFromVideo("HO73gUhiYe0", "RESIDENTE || BZRP Music Sessions #49/66", "30 Aniversario"),
      songFromVideo("6o7bCAZSxsg", "ROSALÍA - SAOKO", "30 Aniversario"),
      songFromVideo("kYtGl1dX5qI", "will.i.am - Scream \u0026 Shout ft. Britney Spears", "30 Aniversario"),
      songFromVideo("Gs069dndIYk", "Earth, Wind \u0026 Fire - September (Official HD Video)", "30 Aniversario"),
      songFromVideo("AmuKdoe8MvI", "Pitbull - Shake Senora (Audio) ft. T-Pain, Sean Paul", "30 Aniversario"),
      songFromVideo("JGwWNGJdvx8", "Ed Sheeran - Shape of You (Official Music Video)", "30 Aniversario"),
      songFromVideo("SbUBMklQSVU", "Sean Paul - She Doesn\u0027t Mind (Official Video)", "30 Aniversario"),
      songFromVideo("WxEUCd3Ko5g", "Michael Jackson - Smooth Criminal (2012 Remaster)", "30 Aniversario"),
      songFromVideo("SGyOaCXr8Lw", "The Rolling Stones - Start Me Up - Official Promo", "30 Aniversario")

    ]
  }
];
// Locked song snapshots generated from filtered-artists.xls on 2026-06-04.
const LOCKED_SONG_SNAPSHOTS = {
  skrillex: [
    ["6W7GSc2gVhk", "Flowdan, Lil Baby, & Skrillex - Pepper (Official Audio)", 149],
    ["8aScLKxAVXI", "Foreign Beggars feat Skrillex - 'Still Gettin It'", 241],
    ["ZF75ebW68vU", "Fucking Die 1", 233],
    ["Kvnwnf9UftA", "Hikaru Utada & Skrillex - Face My Fears [Official Video]", 218],
    ["EpJtK7sDZqI", "Jack \u00dc on Mad Decent Boat Party", 446],
    ["US7wauHA8MI", "Kaskade & Skrillex - Lick It", 215],
    ["sR-ZBWzxfkI", "Korn 'Narcissistic Cannibal (feat Skrillex and Kill the Noise)'", 195],
    ["AQdkP1sWuP4", "Mc Lan, Skrillex, TroyBoi - Malokera (feat. Ludmilla & Ty Dolla $ign) [Official Audio]", 195],
    ["Mxwr20HFQsA", "My Name Is Skrillex (HQ)", 272],
    ["d6WoNmDzNCM", "Noisia & Skrillex - Horizon [Official Audio]", 328],
    ["cuyKeH8rYOg", "RL Grime, What So Not, and Skrillex - Waiting", 237],
    ["dcLaYwl48v0", "RUFFNECK (FULL FLEX) - SKRILLEX", 227],
    ["Nw-YjVp_ibQ", "SKRILLEX -  SCATTA (FEAT FOREIGN BEGGARS AND BARE NOIZE)", 235],
    ["PzEgrNigZdw", "SKRILLEX - ALL I ASK OF YOU (FEAT PENNY)", 341],
    ["6JYIGclVQdw", "Skrillex - All Is Fair in Love and Brostep with Ragga Twins [AUDIO]", 250],
    ["cR2XilcGYOo", "Skrillex - Bangarang (Ft. Sirah) [Official Audio]", 217],
    ["gvx5QM8nrZA", "SKRILLEX - CAT RATS", 305],
    ["Nu3cezCkzf4", "Skrillex - Coast Is Clear with Chance The Rapper and the Social Experiment [AUDIO]", 244],
    ["m7ot7fnFyuk", "Skrillex - Dirty Vibe with Diplo, G-Dragon from Big Bang and CL from 2NE1 [AUDIO]", 207],
    ["hwsXo6fsmso", "Skrillex - Ease My Mind with Niki & The Dove [AUDIO]", 303],
    ["Aa2RSFYcoko", "Skrillex - Fire Away with Kid Harpoon [AUDIO]", 342],
    ["TYYyMu3pzL4", "Skrillex - First Of The Year (Equinox) [Official Audio]", 262],
    ["Ka7wBGFSuSE", "SKRILLEX - FUCK THAT [OFFICIAL VIDEO]", 315],
    ["QM6OwLTpO9s", "Skrillex - Fuji Opener (feat. Alvin Risk) [Official Audio]", 184],
    ["F21aifX0lZY", "Skrillex - Kill Everybody (Official Audio)", 301],
    ["jB-zsM6aPPo", "Skrillex - Kliptown Empyrean [Official Audio]", 227],
    ["B_8xfmxea2M", "Skrillex - Leaving", 292],
    ["ziVSiaZZVvI", "Skrillex - Lost Footage", 287],
    ["2dYFJdQf7rs", "Skrillex - Mumbai Power (feat. Beam) [Official Audio]", 174],
    ["8eJDTcDUQxQ", "Skrillex - Ragga Bomb Ft. Ragga Twins (Official Music Video)", 268],
    ["DpS7nCweYZI", "Skrillex - Reptile", 237],
    ["eOofWzI3flA", "Skrillex - Rock n Roll (Will Take You to the Mountain)", 274],
    ["_t2TzJOyops", "Skrillex - Ruffneck - FULL Flex [Music Video]", 215],
    ["WbRn-UYzyfE", "Skrillex - Scary Bolly Dub", 229],
    ["6t7wQ2BLBUg", "Skrillex - Stranger with KillaGraham from Milo and Otis and Sam Dew [AUDIO]", 291],
    ["-e_3Cg9GZFU", "Skrillex - Summit (feat. Ellie Goulding) [Video by Pilerats]", 371],
    ["PoTp-TaOf_0", "Skrillex - The Reason", 262],
    ["fq-geJ9UwG4", "SKRILLEX - WITH YOU, FRIENDS (LONG DRIVE)", 390],
    ["nOqUvLmwfTg", "Skrillex & Alvin Risk - Try It Out (Neon Mix) [AUDIO]", 230],
    ["O82EJD7WLQs", "Skrillex & BEAM - Selecta [Official Visualizer]", 191],
    ["dy2CMS5Hw7I", "Skrillex & Bibi Bourelly - Painting Rainbows [Official Visualizer]", 196],
    ["0i4gZ9IE2CI", "Skrillex & Bladee - Real Spring (Official Music Video)", 130],
    ["pP-GzB6kDx8", "Skrillex & Bobby Raps - Don't Leave Me Like This [Official Visualizer]", 103],
    ["wTR-ScwmOXI", "Skrillex & Boys Noize - Fine Day Anthem (Official Audio)", 194],
    ["PR_u9rvFKzE", "Skrillex & Damian \"Jr Gong\" Marley - \"Make It Bun Dem\" [Audio]", 214],
    ["bU8jSpyHesU", "SKRILLEX & DIPLO - NEW YEAR'S EVE AT MADISON SQ\u00dcARE GARDEN", 100],
    ["iesesSa1040", "Skrillex & Eli Keszler - A Street I Know [Official Visualizer]", 216],
    ["6g4N_9gPKUw", "Skrillex & Habstrakt - Chicken Soup", 208],
    ["jHyvlBDv3CI", "Skrillex & JAUZ - SQUAD OUT! feat. Fatman Scoop", 248],
    ["swDMu59Pbfc", "Skrillex & Kid Cudi - Summertime [Official Visualizer]", 132],
    ["R8i6VZ1vIY8", "Skrillex & Kill The Noise - Recess Ft. Fatman Scoop and Michael Angelakos (Official Audio)", 238],
    ["DUlaQurAe4s", "Skrillex & MUST DIE! - VIP's", 227],
    ["r-SurvChGFk", "Skrillex & Poo Bear - Would You Ever (Official Music Video)", 222],
    ["ZkqyIoYAXV8", "Skrillex & Rick Ross - Purple Lamborghini [Official Video]", 262],
    ["YF_hpv-vcgY", "Skrillex & Starrah - Good Space [Official Visualizer]", 133],
    ["CODiSh4j1ps", "Skrillex & Swae Lee- Mixed Signals [Official Visualizer]", 167],
    ["_6r7-hnwAWY", "Skrillex & Team EZY (ft. NJOMZA) - Pretty Bye Bye", 223],
    ["nUA8OzQxGxE", "SKRILLEX & THE DOORS - BREAKN' A SWEAT", 304],
    ["ph9OpHxkjI4", "Skrillex & Wiwek - Killa ft. Elliphant [Official Video]", 227],
    ["6L4aPgII47U", "SKRILLEX @ GLASTONBURY 2014", 259],
    ["3PZ93k9YJzc", "SKRILLEX + ALVIN RISK - TRY IT OUT (TRY HARDER MIX)", 287],
    ["4MQQCFaV2fM", "Skrillex with Bobby Raps - Leave Me Like This", 189],
    ["T7SvN0dkQps", "Skrillex with Nai Barghouti - XENA (Official Music Video)", 275],
    ["0owbEh54SjY", "Skrillex x FLEUR&MANU \u2013 Doompy Poomp (Official Video)", 199],
    ["IPZ6AGg1vfs", "Skrillex, Aluna, & Kito - Inhale Exhale [Official Visualizer]", 206],
    ["orON3Q_IURs", "Skrillex, Bibi Bourelly, & Sonny Moore  - Don't Get Too Close", 245],
    ["nwW5H7wTKoA", "Skrillex, Boys Noize, Ty Dolla $ign - Midnight Hour (Dub Mix) [Official Audio]", 343],
    ["B9k1ma-WoAQ", "Skrillex, Boys Noize, Ty Dolla $ign - Midnight Hour [Official Audio]", 200],
    ["YQ_W621m9ZE", "Skrillex, Corbin, & Chief Keef- Bad for Me [Official Visualizer]", 174],
    ["kCH94dgtAbw", "Skrillex, Flowdan, BEAM, & PEEKABOO - Hydrate [Official Visualizer]", 216],
    ["i8Vgo5S-_NM", "Skrillex, Fred again.. & Flowdan - Rumble [Official Music Video]", 150],
    ["_Rmhg_GmE5c", "Skrillex, Joker, & Sleepnet - Tears [Official Visualizer]", 186],
    ["cds_rfHsJ3Y", "Skrillex, Justin Bieber & Don Toliver - Don't Go (Official Music Video)", 168],
    ["xkejbXejA-0", "Skrillex, Missy Elliott, & Mr. Oizo - RATATA [Official Visualizer]", 127],
    ["ikIcl2q3oP8", "Skrillex, PinkPantheress & Trippie Redd - Way Back [Official Audio]", 120],
    ["V-gGLTPxEhE", "Skrillex, Porter Robinson, & Bibi Bourelly - Still Here (with the ones that i came with)", 304],
    ["BGfSSsGiTNc", "Skrillex, Prentiss, & Anthony Green - 3am [Official Visualizer]", 207],
    ["zliasEkWx0M", "Skrillex, Starrah & Four Tet - Butterflies (Official Music Video)", 191],
    ["3Qs7IM9nZxc", "Skrillex, Swae Lee, Siiickbrain, & Posij - TOO BIZARRE (juked) [Official Visualizer]", 209],
    ["0stc0duKiHs", "Skrillex, Yung Lean, & Bladee - Ceremony [Official Video]", 193],
    ["vXhmyyXFd5I", "The Disco Rangers Bus (Knows How To Rock N Roll)", 212],
    ["RviOwY0OKyE", "The Game & Skrillex - \u201cEl Chapo\u201d", 221],
    ["yRQZGBzfE8w", "Wild For The Night - A$AP Rocky feat. Skrillex and Birdy Nam Nam", 213],
    ["UQ13nr6urIo", "Yogi & Skrillex - Burial (feat. Pusha T, Moody Good, TrollPhace) [Official Video]", 239]
  ],
  daftpunk: [
    ["PXYeARRyDWk", "Daft Punk - Human After All (Official Audio)", 320],
    ["asWlF4cH-9w", "Daft Punk - The Brainwasher (Erol Alkan's Horrorhouse Dub) (Official Audio)", 365],
    ["0Q7_ZQmqVa0", "Daft Punk - Technologic (Basement Jaxx Kontrol Mixx) (Official Audio)", 332],
    ["ZbbTmR6Xaag", "Daft Punk - Contact (Official Music Video)", 288],
    ["UeZG0viNAjM", "Daft Punk - Make Love (Official Audio)", 290],
    ["StACmxSQKY8", "Daft Punk - Television Rules the Nation (Official Music Video)", 193],
    ["s4MQku9Mkwc", "Daft Punk - Something About Us (Love Theme from Interstella 5555) (Official Audio)", 135],
    ["wOEwqc2H57E", "Daft Punk - One More Time (Romanthony's Unplugged) (Official Audio)", 221],
    ["g30oA4GUfEg", "Daft Punk - Aerodynamite (Official Audio)", 469],
    ["FemuqkKWK4A", "Daft Punk - Too Long (Gonzales Version) (Official Audio)", 194],
    ["-nnnK8FnZ0M", "Daft Punk - Harder, Better, Faster, Stronger (Jess & Crabbe Mix) (Official Audio)", 361],
    ["HU7KlDJVINc", "Daft Punk - Ouverture (Official Audio)", 161],
    ["v9j_blPbiUk", "Daft Punk - Give Life Back to Music (Drumless Edition) (Official Audio)", 276],
    ["RrUa-lm4BMY", "Daft Punk - Lose Yourself to Dance (Drumless Edition) (Audio) ft. Pharrell Williams", 356],
    ["a5uQMwRMHcs", "Daft Punk - Instant Crush (Official Video) ft. Julian Casablancas", 340],
    ["SSM4fCuCeAk", "Daft Punk - The Game of Love (Drumless Edition) (Official Audio)", 324],
    ["SObZksdIkyY", "Daft Punk - Beyond (Drumless Edition) (Official Audio)", 291],
    ["Qeyna0Y_VTg", "Daft Punk - Fragments of Time (Drumless Edition) (feat. Todd Edwards) (Official Audio)", 281],
    ["5NV6Rdv1a3I", "Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers", 249],
    ["I4QaqpUA4hM", "Daft Punk - Giorgio by Moroder (Drumless Edition) (Official Audio)", 547],
    ["6l4BNFLpJTo", "Daft Punk - Doin' it Right (Drumless Edition) (Official Audio) ft. Panda Bear", 253],
    ["17bvM-LgPjE", "Daft Punk - Touch (Drumless Edition) (Official Audio) ft. Paul Williams", 501],
    ["Twp55oTHlxQ", "Daft Punk - Motherboard (Drumless Edition) (Official Audio)", 349],
    ["cuj__JnGWLg", "Daft Punk - Within (Official Audio)", 233],
    ["sBvJUdBeY5s", "Daft Punk - Horizon (Japan CD) (Official Audio)", 264],
    ["DSaOvIaDQSw", "Daft Punk - LYTD (Vocoder Tests) (Official Audio) ft. Pharrell Williams", 131],
    ["imBlPXbAv6E", "Daft Punk - Infinity Repeating (2013 Demo) (feat. Julian Casablancas+The Voidz)", 260],
    ["IuwwuuvnvCs", "Daft Punk - Prime (2012 Unfinished) (Official Audio)", 288],
    ["E5xZf1unC84", "Daft Punk - Horizon Ouverture (Official Audio)", 130],
    ["YiZfLvLU5Jc", "Daft Punk - GLBTM (Studio Outtakes) (Official Audio)", 384],
    ["SBRwWjwyNM0", "Daft Punk - Da Funk (Official Music Video with Audio Commentary by Spike Jonze)", 331],
    ["8l7SY95I4T8", "Daft Punk - Around The World (In The Classroom with Michel Gondry)", 484],
    ["K0HSD_i2DvA", "Daft Punk - Around The World (Official Music Video Remastered)", 242],
    ["DuDX6wNfjqc", "Daft Punk - Epilogue", 478],
    ["XlUutoCywnk", "Daft Punk - Rollin' & Scratchin' (Official Music Video Remastered)", 518],
    ["yuoghR-5-Xs", "Daft Punk - Daftendirekt (Official Audio)", 165],
    ["uURB-vo9rZ4", "Daft Punk - Revolution 909 (Official Music Video Remastered)", 235],
    ["HhZaHf8RP6g", "Daft Punk - Veridis Quo (Official Video)", 407],
    ["Z6_ZNW1DACE", "Daft Punk - Too Long (Official Video)", 600],
    ["FGBhQbmPwH8", "Daft Punk - One More Time (Official Video)", 322],
    ["3yq-NFiEywo", "Daft Punk - Teachers (Official Audio)", 174],
    ["zr28TRk9vCg", "Daft Punk - Oh Yeah (Official Audio)", 122],
    ["L93-7vRfxNs", "Daft Punk - Aerodynamic (Official Video)", 213],
    ["JXWkKO4eplY", "Daft Punk - High Fidelity (Official Audio)", 363],
    ["DBHipNYuAZk", "Daft Punk - Burnin' (Official Music Video Remastered)", 226],
    ["ZW7WfdTuth8", "Daft Punk - Rock'n Roll (Official Audio)", 454],
    ["VubH7FuW6TQ", "Daft Punk - Indo Silver Club (Official Audio)", 275],
    ["dKJfJMMsqX4", "Daft Punk - Face to Face (Official Video)", 239],
    ["FxzBvqY5PP0", "Daft Punk - Digital Love (Official Video)", 265],
    ["WY8hqzYT_uk", "Daft Punk - Alive (Official Audio)", 317],
    ["5AJ8yHebaok", "Daft Punk - Ph\u0153nix (Official Audio)", 298],
    ["HoQN7K6HdRw", "Daft Punk - High Life (Official Video)", 197],
    ["CqZgd6-xQl8", "Daft Punk - Voyager (Official Video)", 226],
    ["6S3ISlvlEbs", "Daft Punk - Crescendolls (Official Video)", 235],
    ["0sa2R-PM0Uk", "Daft Punk - Steam Machine (Official Audio)", 322],
    ["gAjR4_CbPpQ", "Daft Punk - Harder, Better, Faster, Stronger (Official Video)", 223],
    ["sOS9aOIXPEk", "Daft Punk - Something About Us (Official Video)", 229],
    ["d-OGBZSDKBU", "Daft Punk - Emotion (Official Audio)", 418],
    ["bRt5z880CFY", "Daft Punk - Superheroes (Official Video)", 235],
    ["RdVEQbWjaTE", "Daft Punk - The Brainwasher (Official Audio)", 249],
    ["xBTqRd09y3E", "Daft Punk - Nightvision (Official Video)", 112],
    ["QwRlt1XyOg0", "Daft Punk - The Prime Time Of Your Life (Official Music Video Remastered)", 246],
    ["sFZjqVnWBhc", "Daft Punk - Robot Rock (Official Music Video Remastered)", 197],
    ["D8K90hX4PrE", "Daft Punk - Technologic (Official Music Video Remastered)", 176]
  ]
};
// End locked song snapshots.

const songGroupCache = new Map();
let spotifyToken = null;

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (request.method === "POST" && url.pathname === "/api/jobs") return createJob(request, env);
      if (request.method === "POST" && url.pathname === "/api/convert") return convertPlaylist(request, env);
      if (request.method === "POST" && url.pathname === "/api/game/custom-playlist") return loadCustomGamePlaylist(request, env);
      if (request.method === "GET" && url.pathname === "/api/leaderboard") return getLeaderboard(url.searchParams.get("config"), env);
      if (request.method === "POST" && url.pathname === "/api/leaderboard") return submitLeaderboardScore(request, env);
      if (request.method === "POST" && url.pathname === "/api/multiplayer/rooms") return createMultiplayerRoom(request, env);
      if (request.method === "POST" && url.pathname === "/api/impostor/rooms") return createimpostorRoom(request, env);
      if (request.method === "POST" && url.pathname === "/api/resistance/rooms") return createResistanceRoom(request, env);
      if (request.method === "POST" && url.pathname === "/api/masterword/rooms") return createMasterWordRoom(request, env);
      if (request.method === "GET" && ["/api/artists", "/api/song-groups"].includes(url.pathname)) return json(getSongGroups());
      if (request.method === "GET" && url.pathname === "/api/shadow-songs") return json(await getSongGroupPayload("shadow", env));
      if (url.pathname.startsWith("/api/audio/jobs")) return unsupportedAudioDownload();
      if (request.method === "POST" && url.pathname === "/api/audio") return unsupportedAudioDownload();
      if (request.method === "GET" && url.pathname === "/api/audio/download") return unsupportedAudioDownload();

      const jobMatch = url.pathname.match(/^\/api\/jobs\/([^/]+)$/);
      if (request.method === "GET" && jobMatch) return json(getPublicJob(jobMatch[1]));

      const groupSongsMatch = url.pathname.match(/^\/api\/song-groups\/([^/]+)\/songs$/);
      if (request.method === "GET" && groupSongsMatch) return json(await getSongGroupPayload(groupSongsMatch[1], env));

      const artistSongsMatch = url.pathname.match(/^\/api\/artists\/([^/]+)\/songs$/);
      if (request.method === "GET" && artistSongsMatch) return json(await getSongGroupPayload(artistSongsMatch[1], env));

      const multiplayerRoomMatch = url.pathname.match(/^\/api\/multiplayer\/rooms\/([^/]+)$/);
      if (request.method === "GET" && multiplayerRoomMatch) return getMultiplayerRoom(multiplayerRoomMatch[1], request, env);
      const multiplayerJoinMatch = url.pathname.match(/^\/api\/multiplayer\/rooms\/([^/]+)\/join$/);
      if (request.method === "POST" && multiplayerJoinMatch) return joinMultiplayerRoom(request, multiplayerJoinMatch[1], env);
      const multiplayerScoreMatch = url.pathname.match(/^\/api\/multiplayer\/rooms\/([^/]+)\/score$/);
      if (request.method === "POST" && multiplayerScoreMatch) return updateMultiplayerScore(request, multiplayerScoreMatch[1], env);
      const multiplayerReadyMatch = url.pathname.match(/^\/api\/multiplayer\/rooms\/([^/]+)\/ready$/);
      if (request.method === "POST" && multiplayerReadyMatch) return readyMultiplayerPlayer(request, multiplayerReadyMatch[1], env);
      const multiplayerLeaveMatch = url.pathname.match(/^\/api\/multiplayer\/rooms\/([^/]+)\/leave$/);
      if (request.method === "POST" && multiplayerLeaveMatch) return leaveMultiplayerRoom(request, multiplayerLeaveMatch[1], env);

      const impostorRoomMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)$/);
      if (request.method === "GET" && impostorRoomMatch) return getimpostorRoom(impostorRoomMatch[1], request, env);
      const impostorJoinMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/join$/);
      if (request.method === "POST" && impostorJoinMatch) return joinimpostorRoom(request, impostorJoinMatch[1], env);
      const impostorStartMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/(?:impostor|start)$/);
      if (request.method === "POST" && impostorStartMatch) return startimpostorGame(request, impostorStartMatch[1], env);
      const impostorRestartMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/restart$/);
      if (request.method === "POST" && impostorRestartMatch) return restartimpostorGame(request, impostorRestartMatch[1], env);
      const impostorKickMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/kick$/);
      if (request.method === "POST" && impostorKickMatch) return kickimpostorPlayer(request, impostorKickMatch[1], env);
      const impostorVoteMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/vote$/);
      if (request.method === "POST" && impostorVoteMatch) return voteimpostorPlayer(request, impostorVoteMatch[1], env);
      const impostorGuessMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/guess$/);
      if (request.method === "POST" && impostorGuessMatch) return guessimpostorWord(request, impostorGuessMatch[1], env);
      const impostorLeaveMatch = url.pathname.match(/^\/api\/impostor\/rooms\/([^/]+)\/leave$/);
      if (request.method === "POST" && impostorLeaveMatch) return leaveimpostorRoom(request, impostorLeaveMatch[1], env);

      const resistanceRoomMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)$/);
      if (request.method === "GET" && resistanceRoomMatch) return getResistanceRoom(resistanceRoomMatch[1], request, env);
      const resistanceJoinMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/join$/);
      if (request.method === "POST" && resistanceJoinMatch) return joinResistanceRoom(request, resistanceJoinMatch[1], env);
      const resistanceStartMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/start$/);
      if (request.method === "POST" && resistanceStartMatch) return startResistanceGame(request, resistanceStartMatch[1], env);
      const resistanceKickMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/kick$/);
      if (request.method === "POST" && resistanceKickMatch) return kickResistancePlayer(request, resistanceKickMatch[1], env);
      const resistanceTeamMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/team$/);
      if (request.method === "POST" && resistanceTeamMatch) return proposeResistanceTeam(request, resistanceTeamMatch[1], env);
      const resistanceTeamVoteMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/team-vote$/);
      if (request.method === "POST" && resistanceTeamVoteMatch) return voteResistanceTeam(request, resistanceTeamVoteMatch[1], env);
      const resistanceMissionVoteMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/mission-vote$/);
      if (request.method === "POST" && resistanceMissionVoteMatch) return voteResistanceMission(request, resistanceMissionVoteMatch[1], env);
      const resistanceRestartMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/restart$/);
      if (request.method === "POST" && resistanceRestartMatch) return restartResistanceGame(request, resistanceRestartMatch[1], env);
      const resistanceLeaveMatch = url.pathname.match(/^\/api\/resistance\/rooms\/([^/]+)\/leave$/);
      if (request.method === "POST" && resistanceLeaveMatch) return leaveResistanceRoom(request, resistanceLeaveMatch[1], env);

      const masterWordRoomMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)$/);
      if (request.method === "GET" && masterWordRoomMatch) return getMasterWordRoom(masterWordRoomMatch[1], request, env);
      const masterWordJoinMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/join$/);
      if (request.method === "POST" && masterWordJoinMatch) return joinMasterWordRoom(request, masterWordJoinMatch[1], env);
      const masterWordStartMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/start$/);
      if (request.method === "POST" && masterWordStartMatch) return startMasterWordGame(request, masterWordStartMatch[1], env);
      const masterWordRestartMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/restart$/);
      if (request.method === "POST" && masterWordRestartMatch) return restartMasterWordGame(request, masterWordRestartMatch[1], env);
      const masterWordClueMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/clue$/);
      if (request.method === "POST" && masterWordClueMatch) return submitMasterWordClue(request, masterWordClueMatch[1], env);
      const masterWordGuessMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/guess$/);
      if (request.method === "POST" && masterWordGuessMatch) return guessMasterWord(request, masterWordGuessMatch[1], env);
      const masterWordSkipMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/skip$/);
      if (request.method === "POST" && masterWordSkipMatch) return skipMasterWord(request, masterWordSkipMatch[1], env);
      const masterWordLeaveMatch = url.pathname.match(/^\/api\/masterword\/rooms\/([^/]+)\/leave$/);
      if (request.method === "POST" && masterWordLeaveMatch) return leaveMasterWordRoom(request, masterWordLeaveMatch[1], env);

      const eventsMatch = url.pathname.match(/^\/api\/jobs\/([^/]+)\/events$/);
      if (request.method === "GET" && eventsMatch) return jobEvent(eventsMatch[1]);

      const downloadMatch = url.pathname.match(/^\/api\/jobs\/([^/]+)\/download$/);
      if (request.method === "GET" && downloadMatch) return downloadCsv(downloadMatch[1]);

      return env.ASSETS.fetch(request);
    } catch (error) {
      return json({ error: friendlyError(error) }, 500);
    }
  }
};

function unsupportedAudioDownload() {
  return json({
    error: "Audio downloads are only available in the local Node server because Cloudflare Workers cannot run yt-dlp or FFmpeg."
  }, 501);
}

async function createJob(request, env) {
  const body = await request.json().catch(() => ({}));
  const rawInput = String(body.input || "").trim();
  const urls = rawInput.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!urls.length) return json({ error: "Add at least one URL" }, 400);

  const job = {
    id: crypto.randomUUID(),
    status: "running",
    progress: 2,
    message: "Processing sources",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    items: urls.map(createItem),
    rows: [],
    csv: "",
    artifact: null,
    errors: []
  };

  for (const item of job.items) {
    try {
      await processItem(job, item, env);
    } catch (error) {
      item.status = "failed";
      item.progress = 100;
      item.message = error.message || "Failed";
      job.errors.push({ url: item.url, message: item.message });
    }
  }

  job.rows = job.items.flatMap((item) => item.rows);
  job.csv = toCsv(job.rows);
  const warning = job.items.find((item) => item.warning)?.warning;
  job.status = job.rows.length ? (job.errors.length || warning ? "partial" : "complete") : "failed";
  job.message = warning || (job.rows.length ? `Ready: ${job.rows.length} rows` : "No rows generated");
  job.progress = 100;
  job.updatedAt = new Date().toISOString();
  if (job.rows.length) job.artifact = { name: "youtube-links.csv", type: "text/csv; charset=utf-8", url: `/api/jobs/${job.id}/download` };
  jobs.set(job.id, job);

  return json(getPublicJob(job.id), 201);
}

function createItem(url, index) {
  const parsed = classifyUrl(url);
  return {
    id: crypto.randomUUID(),
    index,
    url,
    query: parsed.query || "",
    type: parsed.type,
    status: "queued",
    progress: 0,
    message: "Queued",
    rows: []
  };
}

function classifyUrl(value) {
  const text = String(value || "").trim();

  try {
    const url = new URL(text);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("Not web URL");
    const host = url.hostname.replace(/^www\./, "");
    const isYoutube = ["youtube.com", "youtu.be", "music.youtube.com", "m.youtube.com"].includes(host);
    const isSpotify = host === "open.spotify.com";

    if (isYoutube && url.searchParams.has("list")) return { type: "youtube-playlist" };
    if (isYoutube && getYouTubeVideoId(url)) return { type: "youtube-video" };
    if (isSpotify && url.pathname.includes("/playlist/")) return { type: "spotify-playlist" };
    if (isSpotify && url.pathname.includes("/track/")) return { type: "spotify-track" };
    return { type: "unsupported" };
  } catch {
    if (/^album\s*:/i.test(text)) return { type: "youtube-album-query", query: text.replace(/^album\s*:/i, "").trim() };
    if (/^song\s*:/i.test(text)) return { type: "youtube-song-query", query: text.replace(/^song\s*:/i, "").trim() };
    return text ? { type: "youtube-song-query", query: text } : { type: "invalid" };
  }
}

async function processItem(job, item, env) {
  item.status = "running";
  item.progress = 5;
  item.message = "Reading source";

  if (item.type === "youtube-video") {
    item.rows = [await readYouTubeVideo(item.url, env)];
    return completeItem(item);
  }

  if (item.type === "youtube-playlist") {
    item.rows = await readYouTubePlaylist(item.url, () => {}, env);
    return completeItem(item);
  }

  if (item.type === "spotify-track") {
    const track = await readSpotifyTrack(item.url, env);
    item.rows = [await searchYouTubeRow(track, env)];
    return completeItem(item);
  }

  if (item.type === "spotify-playlist") {
    const tracks = await readSpotifyPlaylist(item.url, () => {}, env);
    if (tracks.sourceWarning) item.warning = tracks.sourceWarning;
    item.rows = [];
    for (const track of tracks) item.rows.push(await searchYouTubeRow(track, env));
    return completeItem(item, item.warning);
  }

  if (item.type === "youtube-song-query") {
    if (!item.query) throw new Error("Missing search query");
    item.rows = [await searchYouTubeRow({ title: item.query, artist: "" }, env)];
    return completeItem(item);
  }

  if (item.type === "youtube-album-query") {
    if (!item.query) throw new Error("Missing album query");
    item.rows = await searchYouTubeAlbum(item.query, () => {}, env);
    return completeItem(item);
  }

  throw new Error("Unsupported URL");
}

function completeItem(item, message = "") {
  item.status = "complete";
  item.progress = 100;
  item.message = message || `Added ${item.rows.length} ${item.rows.length === 1 ? "row" : "rows"}`;
}

function getSongGroups() {
  return {
    groups: SONG_GROUPS.map((group) => {
      const songCount = group.songCount || getLockedSnapshotSongs(group).length || group.fallbackSongs.length;
      return {
        id: group.id,
        name: group.name,
        handle: group.handle || "",
        channelId: group.channelId || "",
        playlistId: group.playlistId || "",
        image: group.image,
        songCount,
        fallbackCount: songCount,
        url: getArtistUrl(group)
      };
    })
  };
}

async function getSongGroupPayload(groupId, env = {}) {
  const group = SONG_GROUPS.find((item) => item.id === groupId);
  if (!group) return { error: "Unknown artist" };

  const lockedSongs = getLockedSnapshotSongs(group);
  if (lockedSongs.length) return cacheSongGroup(group, lockedSongs, "locked-snapshot", 24 * 60 * 60 * 1000);

  const cached = songGroupCache.get(group.id);
  if (cached && cached.expiresAt > Date.now()) return cached.payload;

  try {
    const videos = group.channelId && env.YOUTUBE_API_KEY
      ? await readYouTubePlaylistApi(uploadsPlaylistId(group.channelId), () => {}, env)
      : [];
    const songs = uniqueSongs(videos.map((video) => songFromVideo(video.videoId, video.title, group.name, "", video.thumbnail, video.durationSeconds)));
    if (songs.length) return cacheSongGroup(group, songs, "youtube-api", 30 * 60 * 1000);
  } catch {
    // Static fallback below keeps deployed worker playable.
  }

  try {
    const result = group.playlistId ? await readArtistPlaylist(group, env) : await readChannelVideosPage(group);
    if (result.songs.length) return cacheSongGroup(group, result.songs, "youtube-videos-page", 15 * 60 * 1000);
  } catch {
    // Static fallback below keeps deployed worker playable.
  }

  return cacheSongGroup(group, group.fallbackSongs, "fallback", 5 * 60 * 1000);
}

async function getLeaderboard(configKey, env) {
  const key = normalizeLeaderboardConfigKey(configKey);
  if (!key) return json({ error: "Invalid leaderboard configuration" }, 400);
  if (!env.LEADERBOARD_DB) return json({ error: "Leaderboard storage is not configured" }, 503);
  const result = await env.LEADERBOARD_DB.prepare(
    `SELECT playerName, score, createdAt FROM (
      SELECT player_name AS playerName, score, created_at AS createdAt,
        ROW_NUMBER() OVER (
          PARTITION BY lower(trim(player_name))
          ORDER BY score DESC, created_at ASC
        ) AS playerRank
      FROM leaderboard_scores
      WHERE config_key = ?
    )
    WHERE playerRank = 1
    ORDER BY score DESC, createdAt ASC
    LIMIT 10`
  ).bind(key).all();
  return json({ configKey: key, entries: rankLeaderboard(result.results || []) });
}

async function submitLeaderboardScore(request, env) {
  if (!env.LEADERBOARD_DB) return json({ error: "Leaderboard storage is not configured" }, 503);
  const entry = normalizeLeaderboardEntry(await request.json().catch(() => ({})));
  if (!entry) return json({ error: "Invalid leaderboard score" }, 400);
  await env.LEADERBOARD_DB.prepare(
    "INSERT OR IGNORE INTO leaderboard_scores (run_id, config_key, player_name, score, created_at) VALUES (?, ?, ?, ?, ?)"
  ).bind(entry.runId, entry.configKey, entry.playerName, entry.score, entry.createdAt).run();
  return getLeaderboard(entry.configKey, env);
}

function normalizeLeaderboardEntry(value) {
  const configKey = normalizeLeaderboardConfigKey(value?.configKey);
  const playerName = String(value?.playerName || "").trim().replace(/\s+/g, " ").slice(0, 24);
  const runId = String(value?.runId || "").trim().slice(0, 80);
  const score = Number(value?.score);
  if (!configKey || !playerName || !runId || !Number.isInteger(score) || score < 0 || score > 1000) return null;
  return { configKey, playerName, runId, score, createdAt: new Date().toISOString() };
}

function normalizeLeaderboardConfigKey(value) {
  const key = String(value || "").trim().slice(0, 160);
  return /^[a-z0-9_-]+:[a-z0-9_-]+:[a-z0-9_-]+:[a-z0-9_-]+:\d+$/.test(key) ? key : "";
}

function rankLeaderboard(entries) {
  const seenPlayers = new Set();
  return entries.filter((entry) => {
    const playerKey = String(entry.playerName || "").trim().toLocaleLowerCase();
    if (!playerKey || seenPlayers.has(playerKey)) return false;
    seenPlayers.add(playerKey);
    return true;
  }).slice(0, 10).map((entry, index) => ({
    rank: index + 1,
    playerName: entry.playerName,
    score: entry.score,
    createdAt: entry.createdAt
  }));
}

async function createMultiplayerRoom(request, env) {
  if (!env.LEADERBOARD_DB) return json({ error: "Multiplayer storage is not configured" }, 503);
  const room = normalizeNewMultiplayerRoom(await request.json().catch(() => ({})));
  if (!room) return json({ error: "Invalid room or player details" }, 400);
  const existing = await loadMultiplayerRoom(room.key, env);
  if (existing && existing.status !== "finished" && isMultiplayerHostConnected(existing)) {
    return json({ error: "Room name is already in use" }, 409);
  }
  if (existing) await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(room.key).run();
  await saveMultiplayerRoom(room, env, true);
  return json(multiplayerRoomResponse(room, room.players[0]), 201);
}

async function joinMultiplayerRoom(request, roomName, env) {
  const room = await loadMultiplayerRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  if (room.status === "finished") return json({ error: "Room has finished" }, 409);
  if (room.roundIndex > 0) return json({ error: "Room has already started" }, 409);
  const identity = normalizeMultiplayerIdentity(await request.json().catch(() => ({})));
  if (!identity) return json({ error: "Invalid player details" }, 400);
  if (room.players.length >= 12) return json({ error: "Room is full" }, 409);
  if (room.players.some((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase())) {
    return json({ error: "Player name is already in use" }, 409);
  }
  const player = createMultiplayerPlayer(identity);
  room.players.push(player);
  room.updatedAt = Date.now();
  await saveMultiplayerRoom(room, env);
  if (!room.players.some((item) => item.id === player.id)) return json({ error: "Room has already started" }, 409);
  return json(multiplayerRoomResponse(room, player), 201);
}

async function getMultiplayerRoom(roomName, request, env) {
  const room = await loadMultiplayerRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const url = new URL(request.url);
  touchMultiplayerRoom(room, url.searchParams.get("playerId"), url.searchParams.get("token"));
  await saveMultiplayerRoom(room, env);
  return json(multiplayerRoomResponse(room));
}

async function updateMultiplayerScore(request, roomName, env) {
  const room = await loadMultiplayerRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  const score = Number(body.score);
  if (!player || !Number.isInteger(score) || score < 0 || score > 1000) return json({ error: "Invalid multiplayer score" }, 400);
  player.score = Math.max(player.score, score);
  player.finished = Boolean(body.finished);
  if (Number(body.roundIndex) === room.roundIndex) player.completedRound = Math.max(Number(player.completedRound ?? -1), room.roundIndex);
  player.lastSeen = Date.now();
  syncMultiplayerRoundState(room);
  room.updatedAt = Date.now();
  await saveMultiplayerRoom(room, env);
  return json(multiplayerRoomResponse(room));
}

async function readyMultiplayerPlayer(request, roomName, env) {
  const room = await loadMultiplayerRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || Number(body.roundIndex) !== room.roundIndex) return json({ error: "Invalid ready state" }, 400);
  player.readyRound = room.roundIndex;
  player.lastSeen = Date.now();
  syncMultiplayerRoundState(room);
  room.updatedAt = Date.now();
  await saveMultiplayerRoom(room, env);
  return json(multiplayerRoomResponse(room));
}

async function leaveMultiplayerRoom(request, roomName, env) {
  const key = normalizeRoomKey(roomName);
  const room = await loadMultiplayerRoom(key, env);
  if (!room) return json({ ok: true });
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || player.id !== getMultiplayerHostId(room)) return json({ error: "Only room creator can close room" }, 403);
  await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(key).run();
  return json({ ok: true });
}

async function loadMultiplayerRoom(key, env) {
  if (!key || !env.LEADERBOARD_DB) return null;
  const row = await env.LEADERBOARD_DB.prepare("SELECT state_json AS stateJson, updated_at AS updatedAt FROM multiplayer_rooms WHERE room_key = ?").bind(key).first();
  return row?.stateJson ? { ...JSON.parse(row.stateJson), _version: row.updatedAt } : null;
}

async function saveMultiplayerRoom(room, env, create = false) {
  if (create) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    await env.LEADERBOARD_DB.prepare("INSERT INTO multiplayer_rooms (room_key, state_json, updated_at) VALUES (?, ?, ?)")
      .bind(room.key, multiplayerRoomJson(room), version).run();
    room._version = version;
    return;
  }

  for (let attempt = 0; attempt < 4; attempt += 1) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    const result = await env.LEADERBOARD_DB.prepare(
      "UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ? AND updated_at = ?"
    ).bind(multiplayerRoomJson(room), version, room.key, room._version || "").run();
    if (result.meta?.changes) {
      room._version = version;
      return;
    }
    const latest = await loadMultiplayerRoom(room.key, env);
    if (!latest) throw new Error("Room not found");
    Object.assign(room, mergeMultiplayerRooms(latest, room));
  }
  throw new Error("Room update conflict");
}

function multiplayerRoomJson(room) {
  const stored = { ...room };
  delete stored._version;
  return JSON.stringify(stored);
}

function mergeMultiplayerRooms(latest, incoming) {
  const roundIndex = Math.max(Number(latest.roundIndex || 0), Number(incoming.roundIndex || 0));
  const advanceDeadlines = [latest.roundAdvanceAt, incoming.roundAdvanceAt].map(Number).filter((value) => value > 0);
  const players = new Map(latest.players.map((player) => [player.id, player]));
  for (const player of incoming.players) {
    const current = players.get(player.id);
    if (!current) {
      if (Number(latest.roundIndex || 0) > 0) continue;
      players.set(player.id, player);
      continue;
    }
    players.set(player.id, {
      ...current,
      ...player,
      score: Math.max(Number(current.score || 0), Number(player.score || 0)),
      finished: Boolean(current.finished || player.finished),
      lastSeen: Math.max(Number(current.lastSeen || 0), Number(player.lastSeen || 0)),
      completedRound: Math.max(Number(current.completedRound ?? -1), Number(player.completedRound ?? -1)),
      readyRound: roundIndex > latest.roundIndex || roundIndex > incoming.roundIndex
        ? -1
        : (current.readyRound === roundIndex || player.readyRound === roundIndex ? roundIndex : -1)
    });
  }
  const mergedPlayers = [...players.values()];
  const merged = {
    ...latest,
    ...incoming,
    _version: latest._version,
    roundIndex,
    roundAdvanceAt: Number(latest.roundIndex || 0) === roundIndex && Number(incoming.roundIndex || 0) === roundIndex && advanceDeadlines.length
      ? Math.min(...advanceDeadlines)
      : 0,
    players: mergedPlayers,
    updatedAt: Math.max(Number(latest.updatedAt || 0), Number(incoming.updatedAt || 0))
  };
  syncMultiplayerRoundState(merged);
  return merged;
}

function normalizeNewMultiplayerRoom(value) {
  const key = normalizeRoomKey(value?.roomName);
  const roomName = String(value?.roomName || "").trim().replace(/\s+/g, " ").slice(0, 10);
  const identity = normalizeMultiplayerIdentity(value);
  const config = value?.config || {};
  const groupId = String(config.groupId || "").trim().slice(0, 40);
  const mode = ["daily", "ten"].includes(config.mode) ? config.mode : "";
  const clipStart = ["intro", "random"].includes(config.clipStart) ? config.clipStart : "";
  const difficulty = ["normal", "pro"].includes(config.difficulty) ? config.difficulty : "";
  const validGroup = groupId === "all" || SONG_GROUPS.some((group) => group.id === groupId);
  if (!key || !roomName || !identity || !validGroup || !mode || !clipStart || !difficulty) return null;
  const host = createMultiplayerPlayer(identity);
  return { key, roomName, config: { groupId, mode, clipStart, difficulty }, seed: crypto.randomUUID(), roundIndex: 0, roundAdvanceAt: 0, status: "playing", hostId: host.id, players: [host], createdAt: Date.now(), updatedAt: Date.now() };
}

function normalizeMultiplayerIdentity(value) {
  const name = String(value?.playerName || "").trim().replace(/\s+/g, " ").slice(0, 10);
  const emoji = Array.from(String(value?.emoji || "").trim())[0] || "";
  return name && emoji ? { name, emoji } : null;
}

function createMultiplayerPlayer(identity) {
  return { id: crypto.randomUUID(), token: crypto.randomUUID() + crypto.randomUUID(), ...identity, score: 0, readyRound: -1, completedRound: -1, finished: false, lastSeen: Date.now() };
}

function authenticateMultiplayerPlayer(room, value) {
  return room.players.find((player) => player.id === value?.playerId && player.token === value?.token);
}

function normalizeRoomKey(value) {
  let roomName = String(value || "");
  try {
    roomName = decodeURIComponent(roomName);
  } catch {
    // Keep the original value when it is not URI encoded.
  }
  return roomName.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 10);
}

function touchMultiplayerRoom(room, playerId, token) {
  const now = Date.now();
  const player = room.players.find((item) => item.id === playerId && item.token === token);
  if (player) player.lastSeen = now;
  syncMultiplayerRoundState(room);
  room.updatedAt = now;
}

function syncMultiplayerRoundState(room) {
  const activePlayers = getActiveMultiplayerPlayers(room);
  if (!activePlayers.length) {
    room.roundAdvanceAt = 0;
    room.status = "playing";
    return;
  }
  if (activePlayers.every((item) => item.finished)) {
    if (!room.roundAdvanceAt) room.roundAdvanceAt = Date.now() + 3_000;
    room.status = "finished";
    return;
  }
  room.status = "playing";
  if (!activePlayers.every((item) => Number(item.completedRound ?? -1) >= room.roundIndex)) {
    room.roundAdvanceAt = 0;
    return;
  }
  if (!room.roundAdvanceAt) room.roundAdvanceAt = Date.now() + 3_000;
  if (Date.now() >= room.roundAdvanceAt) {
    room.roundIndex += 1;
    room.roundAdvanceAt = 0;
    room.players.forEach((item) => { item.readyRound = -1; });
  }
}

function getActiveMultiplayerPlayers(room) {
  const now = Date.now();
  return room.players.filter((item) => now - Number(item.lastSeen || room.createdAt) < 30_000);
}

function getMultiplayerHostId(room) {
  return room.hostId || room.players[0]?.id;
}

function isMultiplayerHostConnected(room) {
  const host = room.players.find((player) => player.id === getMultiplayerHostId(room));
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < 30_000);
}

function multiplayerRoomResponse(room, privatePlayer = null) {
  const now = Date.now();
  return {
    roomName: room.roomName,
    config: room.config,
    seed: room.seed,
    roundIndex: room.roundIndex,
    roundAdvanceAt: Number(room.roundAdvanceAt || 0),
    status: room.status,
    players: room.players.map(({ id, name, emoji, score, readyRound, completedRound, finished, lastSeen }) => ({
      id, name, emoji, score, readyRound, completedRound, finished, connected: now - Number(lastSeen || room.createdAt) < 30_000
    })).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)),
    player: privatePlayer ? { id: privatePlayer.id, token: privatePlayer.token, isHost: privatePlayer.id === getMultiplayerHostId(room) } : undefined
  };
}

const impostor_WORD_SETS = {
  general: [
    ["aeropuerto", "lugar de viaje"], ["pizza", "comida"], ["paraguas", "objeto de lluvia"], ["guitarra", "objeto musical"],
    ["biblioteca", "lugar silencioso"], ["volcan", "naturaleza"], ["doctor", "profesion"], ["chocolate", "comida dulce"],
    ["bicicleta", "transporte"], ["cine", "lugar de ocio"], ["espejo", "objeto de casa"], ["pinguino", "animal"],
    ["castillo", "edificio"], ["cohete", "espacio"], ["playa", "lugar de vacaciones"], ["tren", "transporte"],
    ["camara", "objeto tecnologico"], ["futbol", "deporte"], ["almohada", "objeto de dormitorio"], ["restaurante", "lugar publico"],
    ["diamante", "objeto valioso"], ["museo", "lugar cultural"], ["cafe", "bebida"], ["muneco de nieve", "cosa de invierno"],
    ["pirata", "personaje"], ["escuela", "lugar diario"], ["vela", "objeto de casa"], ["baloncesto", "deporte"],
    ["elefante", "animal"], ["hospital", "lugar publico"], ["ordenador", "objeto tecnologico"], ["bocadillo", "comida"],
    ["bombero", "profesion"], ["isla", "geografia"], ["arcoiris", "cosa del cielo"], ["submarino", "transporte"],
    ["mochila", "objeto personal"], ["circo", "lugar de ocio"], ["telescopio", "objeto cientifico"], ["cascada", "naturaleza"],
    ["sushi", "comida"], ["detective", "personaje"], ["teclado", "objeto tecnologico"], ["mercado", "lugar de compras"],
    ["planeta", "espacio"], ["cepillo de dientes", "objeto de bano"], ["jungla", "naturaleza"], ["violin", "objeto musical"]
  ].map(([word, hint]) => ({ word, hint })),
  celebrities: [
    ["Aitana", "Segundo intento"], ["Rosalia", "Sobremesa industrial"], ["Bad Bunny", "Archipielago"], ["Shakira", "Barranquilla"],
    ["Ibai Llanos", "Nobleza digital"], ["David Bisbal", "Ave"], ["Enrique Iglesias", "Apellido pesado"], ["Quevedo", "Islas y numeros"],
    ["Lola Indigo", "Cambio de color"], ["Ana Mena", "Sanremo"], ["C. Tangana", "Demasiado tarde"], ["Rauw Alejandro", "Orbita"],
    ["Karol G", "Inicial doble"], ["Taylor Swift", "Regrabacion"], ["Beyonce", "Destiny"], ["Harry Styles", "Residencia"],
    ["Justin Bieber", "Descubrimiento casero"], ["Lady Gaga", "Carne"], ["Rihanna", "Barbados"], ["Miley Cyrus", "Demolicion"],
    ["Zendaya", "Doble identidad"], ["Pedro Pascal", "Escolta"], ["Leonardo DiCaprio", "Veinticinco"], ["Margot Robbie", "Tonya"],
    ["Dwayne Johnson", "Lucha y cine"], ["Will Smith", "Principe occidental"], ["Tom Holland", "Bailo bajo la lluvia"], ["Jennifer Aniston", "Corte noventero"],
    ["Jenna Ortega", "Baile viral"], ["Mario Casas", "Hache"], ["Blanca Suarez", "Telefonistas"], ["Belen Esteban", "Ambiciones"],
    ["David Broncano", "Dinero y sexo"], ["Jordi Wild", "Cueva"], ["El Rubius", "Noruega"], ["AuronPlay", "Telefono oxidado"],
    ["IlloJuan", "Andalucia digital"], ["Fernando Alonso", "Treinta y tres"], ["Carlos Sainz", "Dos generaciones"], ["Rafa Nadal", "Decimocuarta"],
    ["Sergio Ramos", "Minuto noventa y tres"], ["Gerard Pique", "Empresa de siete"], ["Lamine Yamal", "304"], ["Cristiano Ronaldo", "Madeira"],
    ["Leo Messi", "Servilleta"], ["Alexia Putellas", "Mollet"], ["Marc Marquez", "Hormiga"], ["Harry Potter", "Armario"],
    ["Hermione Granger", "Giratiempos"], ["Voldemort", "Diario ajeno"], ["Draco Malfoy", "Manzana"], ["Frodo Bolson", "Jardin heredado"],
    ["Gandalf", "Puente"], ["Legolas", "Cuenta absurda"], ["Darth Vader", "Mustafar"], ["Yoda", "Dagobah"],
    ["Luke Skywalker", "Tatooine"], ["Spider-Man", "Fotografo precario"], ["Iron Man", "Cueva"], ["Capitan America", "Brooklyn"],
    ["Thor", "Tuerto"], ["Loki", "Variante"], ["Thanos", "Agricultor"], ["Deadpool", "Cuarta pared"],
    ["Batman", "Callejon"], ["Joker", "Agente del caos"], ["Harley Quinn", "Psiquiatra"], ["Superman", "Periodista discreto"],
    ["Shrek", "Capas"], ["Fiona", "Maldicion nocturna"], ["Burro", "Dragona"], ["Elsa", "Guantes"],
    ["Buzz Lightyear", "Andy escrito"], ["Woody", "Serpiente en la bota"], ["Nemo", "Corriente oriental"], ["Bob Esponja", "Carne de conducir"],
    ["Homer Simpson", "Sector 7G"], ["Bart Simpson", "El Barto"], ["Pikachu", "Bosque Verde"], ["Ash Ketchum", "Pueblo Paleta"],
    ["Mario Bros", "Reino Champinon"], ["Luigi", "Mansion"], ["Sonic", "Anillos perdidos"], ["Goku", "Abuelo adoptivo"],
    ["Vegeta", "Numero dos"], ["Naruto", "Monte de rostros"], ["Luffy", "East Blue"], ["Eleven", "Laboratorio"],
    ["Walter White", "Lavado de coches"], ["Jon Snow", "Aegon"], ["Daenerys Targaryen", "Meereen"], ["Barbie", "Mundo real"],
    ["Ken", "Patriarcado ecuestre"], ["Indiana Jones", "Profesor de arqueologia"], ["Jack Sparrow", "Brujula defectuosa"], ["Rocky Balboa", "Filadelfia"],
    ["Terminator", "Skynet"], ["Torrente", "Atleti"], ["Amador Rivas", "Capitan Salami"], ["Antonio Recio", "Mariscos"],
    ["Mortadelo", "T.I.A."], ["Pocoyo", "Narrador britanico"], ["Don Limpio", "Pendiente"], ["Pablo Iglesias", "Chalet"],
    ["Abascal", "Chaleco"], ["Kiko Rivera", "Paquirrin"], ["Jordi Urtado", "Antiguedad"], ["Carles Puigdemont", "Gafas"],
    ["Isabel Diaz Ayuso", "Residencias"], ["Irene Montero", "Agenda 2030"], ["Omar Montes", "Pan Bendito"], ["Pedro Sanchez", "Mafioso"],
    ["Georgina Rodriguez", "Jaca"], ["Risto Mejide", "Chester"], ["Chicote", "Cuchillo rojo"]
  ].map(([word, hint]) => ({ word, hint }))
};

async function createimpostorRoom(request, env) {
  if (!env.LEADERBOARD_DB) return json({ error: "Room storage is not configured" }, 503);
  const room = normalizeNewimpostorRoom(await request.json().catch(() => ({})));
  if (!room) return json({ error: "Invalid room, player, or impostor settings" }, 400);
  const existing = await loadimpostorRoom(room.key, env);
  if (existing && isimpostorHostConnected(existing)) return json({ error: "Room name is already in use" }, 409);
  if (existing) await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(impostorStorageKey(room.key)).run();
  await saveimpostorRoom(room, env, true);
  return json(impostorRoomResponse(room, room.players[0]), 201);
}

async function joinimpostorRoom(request, roomName, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const identity = normalizeimpostorIdentity(await request.json().catch(() => ({})));
  if (!identity) return json({ error: "Invalid player details" }, 400);
  const existingPlayer = room.players.find((player) => player.name === identity.name);
  if (existingPlayer) {
    existingPlayer.token = crypto.randomUUID() + crypto.randomUUID();
    existingPlayer.emoji = identity.emoji;
    existingPlayer.lastSeen = Date.now();
    room.updatedAt = Date.now();
    await saveimpostorRoom(room, env);
    return json(impostorRoomResponse(room, existingPlayer), 200);
  }
  if (room.status !== "lobby") return json({ error: "Game already started" }, 409);
  if (room.players.length >= Number(room.config.playerLimit)) return json({ error: "Room is full" }, 409);
  if (room.players.some((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase())) return json({ error: "Player name is already in use" }, 409);
  const player = createimpostorPlayer(identity, nextimpostorSeatNumber(room));
  room.players.push(player);
  if (room.players.length === Number(room.config.playerLimit)) assignimpostorRoles(room);
  room.updatedAt = Date.now();
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player), 201);
}

async function getimpostorRoom(roomName, request, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const url = new URL(request.url);
  const player = touchimpostorRoom(room, url.searchParams.get("playerId"), url.searchParams.get("token"));
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player));
}

async function startimpostorGame(request, roomName, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!player || player.id !== (room.hostId || room.players[0]?.id)) return json({ error: "Only host can start" }, 403);
  if (room.status !== "lobby") return json({ error: "Game already started" }, 409);
  if (room.players.length !== Number(room.config.playerLimit)) return json({ error: "Wait for all players before starting" }, 409);
  assignimpostorRoles(room);
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player));
}

async function restartimpostorGame(request, roomName, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!player || player.id !== (room.hostId || room.players[0]?.id)) return json({ error: "Only host can restart" }, 403);
  if (room.players.length < 3) return json({ error: "Need at least 3 players" }, 409);
  assignimpostorRoles(room);
  room.updatedAt = Date.now();
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player));
}

async function kickimpostorPlayer(request, roomName, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  const hostId = room.hostId || room.players[0]?.id;
  if (!player || player.id !== hostId) return json({ error: "Only host can kick players" }, 403);
  if (room.status !== "lobby") return json({ error: "Players can only be kicked before the game starts" }, 409);
  const targetId = String(body.targetPlayerId || "");
  if (!targetId || targetId === hostId) return json({ error: "Invalid player to kick" }, 400);
  const before = room.players.length;
  room.players = room.players.filter((item) => item.id !== targetId);
  if (room.players.length === before) return json({ error: "Player not found" }, 404);
  room._removedPlayerIds = [targetId];
  room.updatedAt = Date.now();
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player));
}

async function voteimpostorPlayer(request, roomName, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || player.eliminated || !["playing", "tiebreak"].includes(room.status)) return json({ error: "Invalid vote" }, 400);
  const target = room.players.find((item) => item.id === body.targetPlayerId && !item.eliminated);
  if (!target || target.id === player.id) return json({ error: "Invalid vote target" }, 400);
  if (room.status === "tiebreak" && !room.tieCandidates?.includes(target.id)) return json({ error: "Vote only tied players" }, 400);
  room._voteRoundIndex = room.roundIndex;
  room._voteStatus = room.status;
  room.votes = { ...(room.votes || {}), [player.id]: target.id };
  player.lastSeen = Date.now();
  resolveimpostorVotesIfReady(room);
  room.updatedAt = Date.now();
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player));
}

async function guessimpostorWord(request, roomName, env) {
  const room = await loadimpostorRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || player.role !== "impostor" || player.eliminated || !["playing", "tiebreak"].includes(room.status)) return json({ error: "Only active impostors can guess" }, 400);
  player.lastSeen = Date.now();
  const guess = String(body.guess || "").trim().slice(0, 40);
  if (normalizeimpostorGuess(guess) === normalizeimpostorGuess(room.word)) {
    finishimpostorGame(room, "impostors", { type: "guess-win", playerName: player.name, guess });
  } else {
    player.eliminated = true;
    room.status = "playing";
    room.votes = {};
    room.tieCandidates = [];
    room.roundIndex += 1;
    setimpostorEvent(room, { type: "guess-fail", playerName: player.name, role: player.role, guess });
    checkimpostorWinState(room);
  }
  room.updatedAt = Date.now();
  await saveimpostorRoom(room, env);
  return json(impostorRoomResponse(room, player));
}

async function leaveimpostorRoom(request, roomName, env) {
  const key = normalizeRoomKey(roomName);
  const room = await loadimpostorRoom(key, env);
  if (!room) return json({ ok: true });
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!player || player.id !== (room.hostId || room.players[0]?.id)) return json({ error: "Only room creator can close room" }, 403);
  await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(impostorStorageKey(key)).run();
  return json({ ok: true });
}

async function loadimpostorRoom(key, env) {
  if (!key || !env.LEADERBOARD_DB) return null;
  const row = await env.LEADERBOARD_DB.prepare("SELECT state_json AS stateJson, updated_at AS updatedAt FROM multiplayer_rooms WHERE room_key = ?")
    .bind(impostorStorageKey(key)).first();
  return row?.stateJson ? { ...JSON.parse(row.stateJson), _version: row.updatedAt } : null;
}

async function saveimpostorRoom(room, env, create = false) {
  const storageKey = impostorStorageKey(room.key);
  if (create) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    await env.LEADERBOARD_DB.prepare("INSERT INTO multiplayer_rooms (room_key, state_json, updated_at) VALUES (?, ?, ?)")
      .bind(storageKey, impostorRoomJson(room), version).run();
    room._version = version;
    return;
  }
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    const previousVersion = room._version || "";
    const result = previousVersion
      ? await env.LEADERBOARD_DB.prepare("UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ? AND updated_at = ?")
        .bind(impostorRoomJson(room), version, storageKey, previousVersion).run()
      : await env.LEADERBOARD_DB.prepare("UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ?")
        .bind(impostorRoomJson(room), version, storageKey).run();
    if (result.meta?.changes) {
      room._version = version;
      delete room._removedPlayerIds;
      delete room._touchOnly;
      delete room._voteRoundIndex;
      delete room._voteStatus;
      return;
    }
    const latest = await loadimpostorRoom(room.key, env);
    if (!latest) throw new Error("Room not found");
    Object.assign(room, mergeimpostorRooms(latest, room));
  }
  throw new Error("Room update conflict");
}

function impostorStorageKey(key) {
  return `impostor:${key}`;
}

function impostorRoomJson(room) {
  const stored = { ...room };
  delete stored._version;
  delete stored._removedPlayerIds;
  delete stored._touchOnly;
  delete stored._voteRoundIndex;
  delete stored._voteStatus;
  return JSON.stringify(stored);
}

function normalizeNewimpostorRoom(value) {
  const key = normalizeRoomKey(value?.roomName);
  const roomName = String(value?.roomName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const identity = normalizeimpostorIdentity(value);
  const config = normalizeimpostorConfig(value?.config);
  if (!key || !roomName || !identity || !config) return null;
  const host = createimpostorPlayer(identity, 1);
  return { key, roomName, config, roundIndex: 0, eventId: "", status: "lobby", hostId: host.id, startingPlayerId: "", word: "", hint: "", votes: {}, tieCandidates: [], winner: "", players: [host], createdAt: Date.now(), updatedAt: Date.now() };
}

function normalizeimpostorConfig(value = {}) {
  const playerLimit = Math.floor(Number(value.playerLimit));
  if (!Number.isFinite(playerLimit) || playerLimit < 3) return null;
  const maximpostors = Math.max(1, Math.floor((playerLimit - 1) / 2));
  const impostorCount = Math.floor(Number(value.impostorCount));
  if (!Number.isFinite(impostorCount) || impostorCount < 1 || impostorCount > maximpostors) return null;
  const wordSet = impostor_WORD_SETS[value.wordSet] ? value.wordSet : "general";
  return { playerLimit, impostorCount, impostorHint: Boolean(value.impostorHint), wordSet };
}

function createimpostorPlayer(identity, seatNumber) {
  return { id: crypto.randomUUID(), token: crypto.randomUUID() + crypto.randomUUID(), ...identity, seatNumber, role: "", eliminated: false, lastSeen: Date.now() };
}

function normalizeimpostorIdentity(value) {
  const name = String(value?.playerName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const emoji = Array.from(String(value?.emoji || "").trim())[0] || "";
  return name && emoji ? { name, emoji } : null;
}

function nextimpostorSeatNumber(room) {
  return Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
}

function touchimpostorRoom(room, playerId, token) {
  const player = authenticateMultiplayerPlayer(room, { playerId, token });
  if (player) player.lastSeen = Date.now();
  room._touchOnly = true;
  room.updatedAt = Date.now();
  return player || null;
}

function assignimpostorRoles(room) {
  const wordSet = impostor_WORD_SETS[room.config.wordSet] || impostor_WORD_SETS.general;
  const secret = wordSet[Math.floor(Math.random() * wordSet.length)];
  const impostorIds = new Set(shuffleimpostorItems(room.players.map((player) => player.id)).slice(0, room.config.impostorCount));
  const startingPlayer = shuffleimpostorItems(room.players)[0] || null;
  room.players.forEach((player) => {
    player.role = impostorIds.has(player.id) ? "impostor" : "crew";
    player.eliminated = false;
    delete player.won;
  });
  room.word = secret.word;
  room.hint = normalizeimpostorHint(secret.hint);
  room.status = "playing";
  room.roundIndex = 1;
  room.votes = {};
  room.tieCandidates = [];
  room.winner = "";
  room.startingPlayerId = startingPlayer?.id || "";
  setimpostorEvent(room, { type: "start", startingPlayerName: startingPlayer?.name || "" });
}

function resolveimpostorVotesIfReady(room) {
  const activePlayers = getActiveimpostorPlayers(room);
  if (activePlayers.some((player) => !room.votes?.[player.id])) return;
  const counts = new Map();
  for (const targetId of Object.values(room.votes || {})) counts.set(targetId, (counts.get(targetId) || 0) + 1);
  const voteResults = buildimpostorVoteResults(room, counts);
  const high = Math.max(0, ...counts.values());
  const tiedIds = [...counts.entries()].filter(([, count]) => count === high).map(([id]) => id);
  if (tiedIds.length !== 1) {
    room.status = "tiebreak";
    room.tieCandidates = tiedIds;
    room.votes = {};
    room.roundIndex += 1;
    setimpostorEvent(room, {
      type: "tie",
      names: tiedIds.map((id) => room.players.find((player) => player.id === id)?.name).filter(Boolean),
      voteResults
    });
    return;
  }
  const eliminated = room.players.find((player) => player.id === tiedIds[0]);
  if (eliminated) {
    eliminated.eliminated = true;
    setimpostorEvent(room, {
      type: "eliminated",
      playerName: eliminated.name,
      emoji: eliminated.emoji,
      role: eliminated.role,
      voteResults
    });
  }
  room.status = "playing";
  room.votes = {};
  room.tieCandidates = [];
  room.roundIndex += 1;
  checkimpostorWinState(room);
}

function checkimpostorWinState(room) {
  const active = getActiveimpostorPlayers(room);
  const impostors = active.filter((player) => player.role === "impostor").length;
  const crew = active.length - impostors;
  if (impostors <= 0) finishimpostorGame(room, "crew", room.lastEvent);
  else if (impostors >= crew) finishimpostorGame(room, "impostors", room.lastEvent);
}

function finishimpostorGame(room, winner, event) {
  room.status = "finished";
  room.winner = winner;
  room.votes = {};
  room.tieCandidates = [];
  room.players.forEach((player) => { player.won = winner === "impostors" ? player.role === "impostor" : player.role !== "impostor"; });
  setimpostorEvent(room, event || { type: "finished" });
}

function getActiveimpostorPlayers(room) {
  return room.players.filter((player) => !player.eliminated);
}

function buildimpostorVoteResults(room, counts) {
  return [...counts.entries()]
    .map(([playerId, count]) => {
      const player = room.players.find((item) => item.id === playerId);
      return {
        playerId,
        name: player?.name || "",
        emoji: player?.emoji || "",
        role: player?.role || "",
        votes: count
      };
    })
    .sort((a, b) => b.votes - a.votes || a.name.localeCompare(b.name));
}

function setimpostorEvent(room, event) {
  room.eventId = crypto.randomUUID();
  room.lastEvent = event || {};
}

function mergeimpostorRooms(latest, incoming) {
  const removedIds = new Set(incoming._removedPlayerIds || []);
  const staleVote = incoming._voteRoundIndex !== undefined
    && (Number(latest.roundIndex || 0) !== Number(incoming._voteRoundIndex) || latest.status !== incoming._voteStatus);
  const merged = incoming._touchOnly ? { ...latest } : { ...incoming };
  if (staleVote) Object.assign(merged, latest);
  const players = new Map();
  for (const player of latest.players || []) {
    if (!removedIds.has(player.id)) players.set(player.id, { ...player });
  }
  for (const player of incoming.players || []) {
    if (removedIds.has(player.id)) continue;
    const current = players.get(player.id);
    if ((incoming._touchOnly || staleVote) && current) {
      players.set(player.id, {
        ...current,
        lastSeen: Math.max(Number(current.lastSeen || 0), Number(player.lastSeen || 0))
      });
      continue;
    }
    players.set(player.id, {
      ...(current || {}),
      ...player,
      lastSeen: Math.max(Number(current?.lastSeen || 0), Number(player.lastSeen || 0))
    });
  }
  merged.players = [...players.values()].sort((a, b) => Number(a.seatNumber || 0) - Number(b.seatNumber || 0));
  if (!incoming._touchOnly && !staleVote && latest.status === incoming.status && latest.roundIndex === incoming.roundIndex && ["playing", "tiebreak"].includes(incoming.status)) {
    merged.votes = { ...(latest.votes || {}), ...(incoming.votes || {}) };
    resolveimpostorVotesIfReady(merged);
  }
  merged._version = latest._version;
  merged._removedPlayerIds = incoming._removedPlayerIds;
  merged._touchOnly = incoming._touchOnly;
  merged._voteRoundIndex = incoming._voteRoundIndex;
  merged._voteStatus = incoming._voteStatus;
  return merged;
}

function shuffleimpostorItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function normalizeimpostorGuess(value) {
  return String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizeimpostorHint(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function isimpostorHostConnected(room) {
  const host = room.players.find((player) => player.id === (room.hostId || room.players[0]?.id));
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < 30_000);
}

function impostorRoomResponse(room, privatePlayer = null) {
  const now = Date.now();
  const activeCount = getActiveimpostorPlayers(room).length;
  const revealAll = room.status === "finished";
  return {
    roomName: room.roomName,
    config: room.config,
    roundIndex: room.roundIndex,
    eventId: room.eventId || "",
    lastEvent: room.lastEvent || null,
    status: room.status,
    winner: room.winner || "",
    startingPlayerId: room.startingPlayerId || "",
    startingPlayerName: room.players.find((player) => player.id === room.startingPlayerId)?.name || "",
    activeCount,
    votesCast: Object.keys(room.votes || {}).length,
    tieCandidates: room.tieCandidates || [],
    players: room.players.map((player) => ({
      id: player.id,
      name: player.name,
      emoji: player.emoji,
      seatNumber: player.seatNumber,
      eliminated: Boolean(player.eliminated),
      connected: now - Number(player.lastSeen || room.createdAt) < 30_000,
      hasVoted: Boolean(room.votes?.[player.id]),
      starts: player.id === room.startingPlayerId,
      role: revealAll || player.eliminated ? player.role : "",
      word: revealAll ? room.word : "",
      won: revealAll ? Boolean(player.won) : undefined
    })).sort((a, b) => a.seatNumber - b.seatNumber),
    player: privatePlayer ? {
      id: privatePlayer.id,
      token: privatePlayer.token,
      isHost: privatePlayer.id === (room.hostId || room.players[0]?.id),
      role: privatePlayer.role,
      eliminated: Boolean(privatePlayer.eliminated),
      hasVoted: Boolean(room.votes?.[privatePlayer.id]),
      starts: privatePlayer.id === room.startingPlayerId,
      word: privatePlayer.role === "crew" || revealAll ? room.word : "",
      hint: privatePlayer.role === "impostor" && room.config?.impostorHint ? room.hint : "",
      won: revealAll ? Boolean(privatePlayer.won) : undefined
    } : undefined
  };
}

const MASTER_WORD_MAX_ROUNDS = 13;
const MASTER_WORDS = [
  "abeja", "abogado", "acuario", "albahaca", "almendra", "ancla", "antena", "archivo", "armadura", "asteroide",
  "bambu", "barco", "bateria", "biblioteca", "bigote", "brujula", "burbuja", "caballo", "cactus", "calabaza",
  "camaleon", "campana", "canela", "caracol", "carpeta", "castillo", "cereza", "cicatriz", "cohete", "colmena",
  "cometa", "corona", "diamante", "dragon", "embudo", "escoba", "espejo", "farol", "flauta", "galaxia",
  "girasol", "globo", "helicoptero", "herradura", "iguana", "isla", "jirafa", "laberinto", "linterna", "maleta",
  "martillo", "medusa", "microfono", "murcielago", "naranja", "nube", "orquesta", "palmera", "paraguas", "pirata",
  "pizarra", "planeta", "puente", "reloj", "robot", "sandia", "semilla", "sirena", "tambor", "telescopio",
  "tesoro", "tiburon", "tornado", "tortuga", "volcan", "zanahoria"
];

async function createMasterWordRoom(request, env) {
  if (!env.LEADERBOARD_DB) return json({ error: "Room storage is not configured" }, 503);
  const room = normalizeNewMasterWordRoom(await request.json().catch(() => ({})));
  if (!room) return json({ error: "Sala, jugador o configuracion no valida" }, 400);
  const existing = await loadMasterWordRoom(room.key, env);
  if (existing && isMasterWordHostConnected(existing)) return json({ error: "Room name is already in use" }, 409);
  if (existing) await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(masterWordStorageKey(room.key)).run();
  await saveMasterWordRoom(room, env, true);
  return json(masterWordRoomResponse(room, room.players[0]), 201);
}

async function joinMasterWordRoom(request, roomName, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const identity = normalizeMasterWordIdentity(await request.json().catch(() => ({})));
  if (!identity) return json({ error: "Invalid player details" }, 400);
  const existingPlayer = room.players.find((player) => player.name === identity.name);
  if (existingPlayer) {
    existingPlayer.token = crypto.randomUUID() + crypto.randomUUID();
    existingPlayer.emoji = identity.emoji;
    existingPlayer.lastSeen = Date.now();
    room.updatedAt = Date.now();
    await saveMasterWordRoom(room, env);
    return json(masterWordRoomResponse(room, existingPlayer));
  }
  if (room.status !== "lobby") return json({ error: "Game already started" }, 409);
  if (room.players.length >= Number(room.config.playerLimit)) return json({ error: "Room is full" }, 409);
  if (room.players.some((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase())) return json({ error: "Player name is already in use" }, 409);
  const player = createMasterWordPlayer(identity, nextMasterWordSeatNumber(room));
  room.players.push(player);
  if (room.players.length === Number(room.config.playerLimit)) startMasterWordRound(room);
  room.updatedAt = Date.now();
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player), 201);
}

async function getMasterWordRoom(roomName, request, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const url = new URL(request.url);
  const player = touchMasterWordRoom(room, url.searchParams.get("playerId"), url.searchParams.get("token"));
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player));
}

async function startMasterWordGame(request, roomName, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!isMasterWordHost(room, player)) return json({ error: "Only host can start" }, 403);
  if (room.status !== "lobby") return json({ error: "Game already started" }, 409);
  if (room.players.length < 3) return json({ error: "Need at least 3 players" }, 409);
  startMasterWordRound(room);
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player));
}

async function restartMasterWordGame(request, roomName, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!isMasterWordHost(room, player)) return json({ error: "Only host can restart" }, 403);
  resetMasterWordGame(room);
  if (room.players.length >= 3) startMasterWordRound(room);
  room.updatedAt = Date.now();
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player));
}

async function submitMasterWordClue(request, roomName, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || room.status !== "clue" || player.id === room.activePlayerId) return json({ error: "No puedes enviar pista ahora" }, 400);
  const expected = getMasterWordClueSlots(room);
  const values = Array.isArray(body.clues) ? body.clues : [body.clue];
  const clues = values.map((value) => normalizeMasterWordClue(value)).filter(Boolean).slice(0, expected);
  if (clues.length !== expected) return json({ error: expected > 1 ? `Envia ${expected} pistas` : "Envia una pista" }, 400);
  room._actionRoundKey = masterWordRoundKey(room);
  room.clues = { ...(room.clues || {}), [player.id]: clues };
  player.lastSeen = Date.now();
  if (areMasterWordCluesReady(room)) {
    room.clueReview = reviewMasterWordClues(room);
    room.status = "guessing";
    setMasterWordEvent(room, { type: "clues-ready" });
  }
  room.updatedAt = Date.now();
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player));
}

async function guessMasterWord(request, roomName, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || room.status !== "guessing" || player.id !== room.activePlayerId) return json({ error: "Solo adivina el jugador activo" }, 400);
  const guess = String(body.guess || "").trim().replace(/\s+/g, " ").slice(0, 40);
  if (!guess) return json({ error: "Escribe una respuesta" }, 400);
  const correct = normalizeMasterWordText(guess) === normalizeMasterWordText(room.word);
  finishMasterWordRound(room, correct ? "correct" : "wrong", guess);
  room.updatedAt = Date.now();
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player));
}

async function skipMasterWord(request, roomName, env) {
  const room = await loadMasterWordRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!player || room.status !== "guessing" || player.id !== room.activePlayerId) return json({ error: "Solo pasa el jugador activo" }, 400);
  finishMasterWordRound(room, "passed", "");
  room.updatedAt = Date.now();
  await saveMasterWordRoom(room, env);
  return json(masterWordRoomResponse(room, player));
}

async function leaveMasterWordRoom(request, roomName, env) {
  const key = normalizeRoomKey(roomName);
  const room = await loadMasterWordRoom(key, env);
  if (!room) return json({ ok: true });
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!isMasterWordHost(room, player)) return json({ error: "Only room creator can close room" }, 403);
  await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(masterWordStorageKey(key)).run();
  return json({ ok: true });
}

async function loadMasterWordRoom(key, env) {
  if (!key || !env.LEADERBOARD_DB) return null;
  const row = await env.LEADERBOARD_DB.prepare("SELECT state_json AS stateJson, updated_at AS updatedAt FROM multiplayer_rooms WHERE room_key = ?")
    .bind(masterWordStorageKey(key)).first();
  return row?.stateJson ? { ...JSON.parse(row.stateJson), _version: row.updatedAt } : null;
}

async function saveMasterWordRoom(room, env, create = false) {
  const storageKey = masterWordStorageKey(room.key);
  if (create) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    await env.LEADERBOARD_DB.prepare("INSERT INTO multiplayer_rooms (room_key, state_json, updated_at) VALUES (?, ?, ?)")
      .bind(storageKey, masterWordRoomJson(room), version).run();
    room._version = version;
    return;
  }
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    const previousVersion = room._version || "";
    const result = previousVersion
      ? await env.LEADERBOARD_DB.prepare("UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ? AND updated_at = ?")
        .bind(masterWordRoomJson(room), version, storageKey, previousVersion).run()
      : await env.LEADERBOARD_DB.prepare("UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ?")
        .bind(masterWordRoomJson(room), version, storageKey).run();
    if (result.meta?.changes) {
      room._version = version;
      delete room._touchOnly;
      delete room._actionRoundKey;
      return;
    }
    const latest = await loadMasterWordRoom(room.key, env);
    if (!latest) throw new Error("Room not found");
    Object.assign(room, mergeMasterWordRooms(latest, room));
  }
  throw new Error("Room update conflict");
}

function masterWordStorageKey(key) {
  return `masterword:${key}`;
}

function masterWordRoomJson(room) {
  const stored = { ...room };
  delete stored._version;
  delete stored._touchOnly;
  delete stored._actionRoundKey;
  return JSON.stringify(stored);
}

function mergeMasterWordRooms(latest, incoming) {
  if (incoming._touchOnly) {
    const merged = { ...latest };
    merged.players = mergeMasterWordPlayers(latest.players, incoming.players);
    merged._version = latest._version;
    return merged;
  }
  const staleAction = incoming._actionRoundKey && incoming._actionRoundKey !== masterWordRoundKey(latest);
  if (staleAction) return { ...latest, players: mergeMasterWordPlayers(latest.players, incoming.players), _version: latest._version };
  const merged = { ...incoming, players: mergeMasterWordPlayers(latest.players, incoming.players), _version: latest._version };
  if (incoming._actionRoundKey && latest.status === "clue" && incoming.status === "clue") {
    merged.clues = { ...(latest.clues || {}), ...(incoming.clues || {}) };
    if (areMasterWordCluesReady(merged)) {
      merged.clueReview = reviewMasterWordClues(merged);
      merged.status = "guessing";
      setMasterWordEvent(merged, { type: "clues-ready" });
    }
  }
  merged._actionRoundKey = incoming._actionRoundKey;
  return merged;
}

function mergeMasterWordPlayers(latestPlayers = [], incomingPlayers = []) {
  const players = new Map(latestPlayers.map((player) => [player.id, { ...player }]));
  incomingPlayers.forEach((player) => {
    const current = players.get(player.id);
    players.set(player.id, { ...(current || {}), ...player, lastSeen: Math.max(Number(current?.lastSeen || 0), Number(player.lastSeen || 0)) });
  });
  return [...players.values()].sort((a, b) => Number(a.seatNumber || 0) - Number(b.seatNumber || 0));
}

function masterWordRoundKey(room) {
  return `${room.status}:${room.roundIndex}:${room.activePlayerId}:${room.word}`;
}

function normalizeNewMasterWordRoom(value) {
  const key = normalizeRoomKey(value?.roomName);
  const roomName = String(value?.roomName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const identity = normalizeMasterWordIdentity(value);
  const playerLimit = Math.floor(Number(value?.config?.playerLimit || value?.playerLimit || 5));
  if (!key || !roomName || !identity || playerLimit < 3 || playerLimit > 7) return null;
  const host = createMasterWordPlayer(identity, 1);
  return {
    key,
    roomName,
    config: { playerLimit },
    status: "lobby",
    hostId: host.id,
    activePlayerId: "",
    activeSeatIndex: -1,
    roundIndex: 0,
    opportunitiesUsed: 0,
    score: 0,
    word: "",
    usedWords: [],
    clues: {},
    clueReview: null,
    history: [],
    eventId: "",
    lastEvent: null,
    players: [host],
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
}

function normalizeMasterWordIdentity(value) {
  const name = String(value?.playerName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const emoji = Array.from(String(value?.emoji || "").trim())[0] || "";
  return name && emoji ? { name, emoji } : null;
}

function createMasterWordPlayer(identity, seatNumber) {
  return { id: crypto.randomUUID(), token: crypto.randomUUID() + crypto.randomUUID(), ...identity, seatNumber, lastSeen: Date.now() };
}

function nextMasterWordSeatNumber(room) {
  return Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
}

function touchMasterWordRoom(room, playerId, token) {
  const player = authenticateMultiplayerPlayer(room, { playerId, token });
  if (player) player.lastSeen = Date.now();
  room._touchOnly = true;
  room.updatedAt = Date.now();
  return player || null;
}

function resetMasterWordGame(room) {
  room.status = "lobby";
  room.activePlayerId = "";
  room.activeSeatIndex = -1;
  room.roundIndex = 0;
  room.opportunitiesUsed = 0;
  room.score = 0;
  room.word = "";
  room.usedWords = [];
  room.clues = {};
  room.clueReview = null;
  room.history = [];
  room.eventId = "";
  room.lastEvent = null;
}

function startMasterWordRound(room) {
  if (room.players.length < 3) return;
  const nextWord = getNextMasterWord(room);
  if (!nextWord || Number(room.opportunitiesUsed || 0) >= MASTER_WORD_MAX_ROUNDS) {
    finishMasterWordGame(room, { type: "finished" });
    return;
  }
  room.status = "clue";
  room.roundIndex = Number(room.roundIndex || 0) + 1;
  room.activeSeatIndex = (Number(room.activeSeatIndex ?? -1) + 1) % room.players.length;
  room.activePlayerId = room.players[room.activeSeatIndex]?.id || room.players[0]?.id || "";
  room.word = nextWord;
  room.usedWords = [...(room.usedWords || []), nextWord];
  room.clues = {};
  room.clueReview = null;
  setMasterWordEvent(room, { type: "round-start", activePlayerName: getMasterWordActivePlayer(room)?.name || "" });
}

function getNextMasterWord(room) {
  const used = new Set(room.usedWords || []);
  const available = MASTER_WORDS.filter((word) => !used.has(word));
  if (!available.length) return "";
  return available[Math.floor(Math.random() * available.length)];
}

function getMasterWordActivePlayer(room) {
  return room.players.find((player) => player.id === room.activePlayerId) || null;
}

function getMasterWordClueSlots(room) {
  return room.players.length === 3 ? 2 : 1;
}

function areMasterWordCluesReady(room) {
  const clueSlots = getMasterWordClueSlots(room);
  return room.players
    .filter((player) => player.id !== room.activePlayerId)
    .every((player) => (room.clues?.[player.id] || []).length === clueSlots);
}

function reviewMasterWordClues(room) {
  const entries = [];
  for (const [playerId, clues] of Object.entries(room.clues || {})) {
    const player = room.players.find((item) => item.id === playerId);
    (clues || []).forEach((text, index) => {
      entries.push({ id: `${playerId}:${index}`, playerId, playerName: player?.name || "", emoji: player?.emoji || "", text, normalized: normalizeMasterWordText(text) });
    });
  }
  const counts = new Map();
  entries.forEach((entry) => counts.set(entry.normalized, (counts.get(entry.normalized) || 0) + 1));
  const reviewed = entries.map((entry) => {
    const invalidReason = getMasterWordInvalidReason(entry.text, room.word);
    const duplicate = counts.get(entry.normalized) > 1;
    return { ...entry, valid: !invalidReason && !duplicate, reason: invalidReason || (duplicate ? "duplicada" : "") };
  });
  return {
    valid: reviewed.filter((entry) => entry.valid).map(({ id, text }) => ({ id, text })),
    removed: reviewed.filter((entry) => !entry.valid).map(({ id, text, reason }) => ({ id, text, reason })),
    all: reviewed
  };
}

function getMasterWordInvalidReason(clue, word) {
  const text = String(clue || "").trim();
  if (!text) return "vacia";
  if (/\s/.test(text)) return "varias palabras";
  const normalized = normalizeMasterWordText(text);
  const wordNormalized = normalizeMasterWordText(word);
  if (!normalized) return "vacia";
  if (normalized === wordNormalized) return "palabra secreta";
  if (normalized.length >= 4 && wordNormalized.includes(normalized)) return "variante";
  if (wordNormalized.length >= 4 && normalized.includes(wordNormalized)) return "variante";
  if (levenshteinDistance(normalized, wordNormalized) <= 1) return "demasiado parecida";
  return "";
}

function finishMasterWordRound(room, result, guess) {
  const correct = result === "correct";
  const penalty = result === "wrong" ? 2 : 1;
  room.opportunitiesUsed = Math.min(MASTER_WORD_MAX_ROUNDS, Number(room.opportunitiesUsed || 0) + penalty);
  if (correct) room.score = Number(room.score || 0) + 1;
  room.history = [...(room.history || []), {
    roundNumber: room.roundIndex,
    activePlayerId: room.activePlayerId,
    activePlayerName: getMasterWordActivePlayer(room)?.name || "",
    word: room.word,
    guess,
    result,
    score: room.score,
    validClues: room.clueReview?.valid || [],
    removedClues: room.clueReview?.removed || []
  }];
  if (room.opportunitiesUsed >= MASTER_WORD_MAX_ROUNDS || room.usedWords.length >= MASTER_WORDS.length) {
    finishMasterWordGame(room, { type: result, guess });
    return;
  }
  startMasterWordRound(room);
}

function finishMasterWordGame(room, event) {
  room.status = "finished";
  room.activePlayerId = "";
  room.clues = {};
  room.clueReview = null;
  setMasterWordEvent(room, event || { type: "finished" });
}

function setMasterWordEvent(room, event) {
  room.eventId = crypto.randomUUID();
  room.lastEvent = event || {};
}

function normalizeMasterWordClue(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 28);
}

function normalizeMasterWordText(value) {
  return String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function levenshteinDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    previous.splice(0, previous.length, ...current);
  }
  return previous[b.length];
}

function isMasterWordHost(room, player) {
  return Boolean(player && player.id === (room.hostId || room.players[0]?.id));
}

function isMasterWordHostConnected(room) {
  const host = room.players.find((player) => player.id === (room.hostId || room.players[0]?.id));
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < 30_000);
}

function masterWordRoomResponse(room, privatePlayer = null) {
  const now = Date.now();
  const activePlayer = getMasterWordActivePlayer(room);
  const isActive = privatePlayer?.id === room.activePlayerId;
  const clueSlots = getMasterWordClueSlots(room);
  const clueReview = room.clueReview || { valid: [], removed: [] };
  const showClues = ["guessing", "finished"].includes(room.status);
  return {
    roomName: room.roomName,
    config: room.config,
    status: room.status,
    eventId: room.eventId || "",
    lastEvent: room.lastEvent || null,
    roundIndex: Number(room.roundIndex || 0),
    roundNumber: Math.min(Number(room.roundIndex || 0), MASTER_WORD_MAX_ROUNDS),
    maxRounds: MASTER_WORD_MAX_ROUNDS,
    opportunitiesUsed: Number(room.opportunitiesUsed || 0),
    score: Number(room.score || 0),
    activePlayerId: room.activePlayerId || "",
    activePlayerName: activePlayer?.name || "",
    clueSlots,
    cluesCast: Object.keys(room.clues || {}).length,
    clueGivers: Math.max(0, room.players.length - 1),
    validClues: showClues ? clueReview.valid.map(({ id, text }) => ({ id, text })) : [],
    removedClues: showClues && !isActive ? clueReview.removed.map(({ id, text, reason }) => ({ id, text, reason })) : [],
    history: room.status === "finished" ? room.history || [] : (room.history || []).map(({ word, ...item }) => item),
    players: room.players.map((player) => ({
      id: player.id,
      name: player.name,
      emoji: player.emoji,
      seatNumber: player.seatNumber,
      connected: now - Number(player.lastSeen || room.createdAt) < 30_000,
      isActive: player.id === room.activePlayerId,
      hasSubmitted: (room.clues?.[player.id] || []).length === clueSlots
    })).sort((a, b) => a.seatNumber - b.seatNumber),
    player: privatePlayer ? {
      id: privatePlayer.id,
      token: privatePlayer.token,
      isHost: isMasterWordHost(room, privatePlayer),
      isActive,
      clueSlots,
      hasSubmitted: (room.clues?.[privatePlayer.id] || []).length === clueSlots,
      word: !isActive && ["clue", "guessing", "finished"].includes(room.status) ? room.word : "",
      canClue: room.status === "clue" && !isActive && (room.clues?.[privatePlayer.id] || []).length !== clueSlots,
      canGuess: room.status === "guessing" && isActive
    } : undefined
  };
}

const RESISTANCE_RULES = {
  5: { spies: 2, teams: [2, 3, 2, 3, 3] },
  6: { spies: 2, teams: [2, 3, 4, 3, 4] },
  7: { spies: 3, teams: [2, 3, 3, 4, 4] },
  8: { spies: 3, teams: [3, 4, 4, 5, 5] },
  9: { spies: 3, teams: [3, 4, 4, 5, 5] },
  10: { spies: 4, teams: [3, 4, 4, 5, 5] }
};

async function createResistanceRoom(request, env) {
  if (!env.LEADERBOARD_DB) return json({ error: "Room storage is not configured" }, 503);
  const room = normalizeNewResistanceRoom(await request.json().catch(() => ({})));
  if (!room) return json({ error: "Invalid room, player, or Resistance settings" }, 400);
  const existing = await loadResistanceRoom(room.key, env);
  if (existing && isResistanceHostConnected(existing)) return json({ error: "Room name is already in use" }, 409);
  if (existing) await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(resistanceStorageKey(room.key)).run();
  await saveResistanceRoom(room, env, true);
  return json(resistanceRoomResponse(room, room.players[0]), 201);
}

async function joinResistanceRoom(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const identity = normalizeResistanceIdentity(await request.json().catch(() => ({})));
  if (!identity) return json({ error: "Invalid player details" }, 400);
  const existingPlayer = room.players.find((player) => player.name === identity.name);
  if (existingPlayer) {
    existingPlayer.token = crypto.randomUUID() + crypto.randomUUID();
    existingPlayer.emoji = identity.emoji;
    existingPlayer.lastSeen = Date.now();
    room.updatedAt = Date.now();
    await saveResistanceRoom(room, env);
    return json(resistanceRoomResponse(room, existingPlayer), 200);
  }
  if (room.status !== "lobby") return json({ error: "Game already started" }, 409);
  if (room.players.length >= Number(room.config.playerLimit)) return json({ error: "Room is full" }, 409);
  if (room.players.some((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase())) return json({ error: "Player name is already in use" }, 409);
  const player = createResistancePlayer(identity, nextResistanceSeatNumber(room));
  room.players.push(player);
  if (room.players.length === Number(room.config.playerLimit)) assignResistanceRoles(room);
  room.updatedAt = Date.now();
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player), 201);
}

async function getResistanceRoom(roomName, request, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const url = new URL(request.url);
  const player = touchResistanceRoom(room, url.searchParams.get("playerId"), url.searchParams.get("token"));
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function startResistanceGame(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!isResistanceHost(room, player)) return json({ error: "Only host can start" }, 403);
  if (room.status !== "lobby") return json({ error: "Game already started" }, 409);
  if (room.players.length !== Number(room.config.playerLimit)) return json({ error: "Wait for all players before starting" }, 409);
  assignResistanceRoles(room);
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function restartResistanceGame(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!isResistanceHost(room, player)) return json({ error: "Only host can restart" }, 403);
  assignResistanceRoles(room);
  room.updatedAt = Date.now();
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function kickResistancePlayer(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  const hostId = room.hostId || room.players[0]?.id;
  if (!isResistanceHost(room, player)) return json({ error: "Only host can kick players" }, 403);
  if (room.status !== "lobby") return json({ error: "Players can only be kicked before the game starts" }, 409);
  const targetId = String(body.targetPlayerId || "");
  if (!targetId || targetId === hostId) return json({ error: "Invalid player to kick" }, 400);
  const before = room.players.length;
  room.players = room.players.filter((item) => item.id !== targetId);
  if (room.players.length === before) return json({ error: "Player not found" }, 404);
  room._removedPlayerIds = [targetId];
  room.updatedAt = Date.now();
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function proposeResistanceTeam(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || room.status !== "team" || player.id !== getResistanceLeader(room)?.id) return json({ error: "Only current leader can propose" }, 403);
  const teamIds = Array.isArray(body.teamIds) ? [...new Set(body.teamIds.map(String))] : [];
  const teamSize = getResistanceTeamSize(room);
  const validIds = new Set(room.players.map((item) => item.id));
  if (teamIds.length !== teamSize || teamIds.some((id) => !validIds.has(id))) return json({ error: `Select exactly ${teamSize} players` }, 400);
  room.currentTeam = teamIds;
  room.teamVotes = {};
  room.missionVotes = {};
  room.status = "voting";
  room.eventId = crypto.randomUUID();
  room.lastEvent = { type: "team-proposed", leaderName: player.name, teamNames: teamIds.map((id) => room.players.find((item) => item.id === id)?.name).filter(Boolean) };
  player.lastSeen = Date.now();
  room.updatedAt = Date.now();
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function voteResistanceTeam(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || room.status !== "voting") return json({ error: "Invalid team vote" }, 400);
  room._voteRoundKey = resistanceRoundKey(room, "team");
  room.teamVotes = { ...(room.teamVotes || {}), [player.id]: Boolean(body.approve) };
  player.lastSeen = Date.now();
  resolveResistanceTeamVotes(room);
  room.updatedAt = Date.now();
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function voteResistanceMission(request, roomName, env) {
  const room = await loadResistanceRoom(normalizeRoomKey(roomName), env);
  if (!room) return json({ error: "Room not found" }, 404);
  const body = await request.json().catch(() => ({}));
  const player = authenticateMultiplayerPlayer(room, body);
  if (!player || room.status !== "mission" || !room.currentTeam?.includes(player.id)) return json({ error: "Only mission team can act" }, 400);
  const sabotage = player.role === "spy" && Boolean(body.sabotage);
  room._voteRoundKey = resistanceRoundKey(room, "mission");
  room.missionVotes = { ...(room.missionVotes || {}), [player.id]: sabotage };
  player.lastSeen = Date.now();
  resolveResistanceMissionVotes(room);
  room.updatedAt = Date.now();
  await saveResistanceRoom(room, env);
  return json(resistanceRoomResponse(room, player));
}

async function leaveResistanceRoom(request, roomName, env) {
  const key = normalizeRoomKey(roomName);
  const room = await loadResistanceRoom(key, env);
  if (!room) return json({ ok: true });
  const player = authenticateMultiplayerPlayer(room, await request.json().catch(() => ({})));
  if (!isResistanceHost(room, player)) return json({ error: "Only room creator can close room" }, 403);
  await env.LEADERBOARD_DB.prepare("DELETE FROM multiplayer_rooms WHERE room_key = ?").bind(resistanceStorageKey(key)).run();
  return json({ ok: true });
}

async function loadResistanceRoom(key, env) {
  if (!key || !env.LEADERBOARD_DB) return null;
  const row = await env.LEADERBOARD_DB.prepare("SELECT state_json AS stateJson, updated_at AS updatedAt FROM multiplayer_rooms WHERE room_key = ?")
    .bind(resistanceStorageKey(key)).first();
  return row?.stateJson ? { ...JSON.parse(row.stateJson), _version: row.updatedAt } : null;
}

async function saveResistanceRoom(room, env, create = false) {
  const storageKey = resistanceStorageKey(room.key);
  if (create) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    await env.LEADERBOARD_DB.prepare("INSERT INTO multiplayer_rooms (room_key, state_json, updated_at) VALUES (?, ?, ?)")
      .bind(storageKey, resistanceRoomJson(room), version).run();
    room._version = version;
    return;
  }
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const version = `${Date.now()}-${crypto.randomUUID()}`;
    const previousVersion = room._version || "";
    const result = previousVersion
      ? await env.LEADERBOARD_DB.prepare("UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ? AND updated_at = ?")
        .bind(resistanceRoomJson(room), version, storageKey, previousVersion).run()
      : await env.LEADERBOARD_DB.prepare("UPDATE multiplayer_rooms SET state_json = ?, updated_at = ? WHERE room_key = ?")
        .bind(resistanceRoomJson(room), version, storageKey).run();
    if (result.meta?.changes) {
      room._version = version;
      delete room._removedPlayerIds;
      delete room._touchOnly;
      delete room._voteRoundKey;
      return;
    }
    const latest = await loadResistanceRoom(room.key, env);
    if (!latest) throw new Error("Room not found");
    Object.assign(room, mergeResistanceRooms(latest, room));
  }
  throw new Error("Room update conflict");
}

function resistanceStorageKey(key) {
  return `resistance:${key}`;
}

function resistanceRoomJson(room) {
  const stored = { ...room };
  delete stored._version;
  delete stored._removedPlayerIds;
  delete stored._touchOnly;
  delete stored._voteRoundKey;
  return JSON.stringify(stored);
}

function normalizeNewResistanceRoom(value) {
  const key = normalizeRoomKey(value?.roomName);
  const roomName = String(value?.roomName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const identity = normalizeResistanceIdentity(value);
  const playerLimit = Math.floor(Number(value?.config?.playerLimit || value?.playerLimit));
  if (!key || !roomName || !identity || !RESISTANCE_RULES[playerLimit]) return null;
  const host = createResistancePlayer(identity, 1);
  return {
    key,
    roomName,
    config: { playerLimit },
    status: "lobby",
    hostId: host.id,
    leaderIndex: 0,
    missionIndex: 0,
    rejectCount: 0,
    currentTeam: [],
    teamVotes: {},
    missionVotes: {},
    missionResults: [],
    winner: "",
    eventId: "",
    lastEvent: null,
    players: [host],
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
}

function normalizeResistanceIdentity(value) {
  const name = String(value?.playerName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const emoji = Array.from(String(value?.emoji || "").trim())[0] || "";
  return name && emoji ? { name, emoji } : null;
}

function createResistancePlayer(identity, seatNumber) {
  return { id: crypto.randomUUID(), token: crypto.randomUUID() + crypto.randomUUID(), ...identity, seatNumber, role: "", lastSeen: Date.now() };
}

function nextResistanceSeatNumber(room) {
  return Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
}

function touchResistanceRoom(room, playerId, token) {
  const player = authenticateMultiplayerPlayer(room, { playerId, token });
  if (player) player.lastSeen = Date.now();
  room._touchOnly = true;
  room.updatedAt = Date.now();
  return player || null;
}

function assignResistanceRoles(room) {
  const shuffledIds = shuffleimpostorItems(room.players.map((player) => player.id));
  const spyIds = new Set(shuffledIds.slice(0, getResistanceRules(room).spies));
  const leader = shuffleimpostorItems(room.players)[0] || room.players[0];
  room.players.forEach((player) => {
    player.role = spyIds.has(player.id) ? "spy" : "resistance";
    delete player.won;
  });
  room.leaderIndex = Math.max(0, room.players.findIndex((player) => player.id === leader?.id));
  room.missionIndex = 0;
  room.rejectCount = 0;
  room.currentTeam = [];
  room.teamVotes = {};
  room.missionVotes = {};
  room.missionResults = [];
  room.winner = "";
  room.status = "team";
  setResistanceEvent(room, { type: "start", leaderName: getResistanceLeader(room)?.name || "" });
}

function resolveResistanceTeamVotes(room) {
  if (room.players.some((player) => room.teamVotes?.[player.id] === undefined)) return;
  const approvals = Object.values(room.teamVotes || {}).filter(Boolean).length;
  const rejected = room.players.length - approvals;
  if (approvals > room.players.length / 2) {
    room.status = "mission";
    room.missionVotes = {};
    setResistanceEvent(room, { type: "team-approved", approvals, rejected, teamNames: getResistanceTeamNames(room) });
    return;
  }
  room.rejectCount = Number(room.rejectCount || 0) + 1;
  room.currentTeam = [];
  room.teamVotes = {};
  room.missionVotes = {};
  if (room.rejectCount >= 5) {
    finishResistanceGame(room, "spies", { type: "five-rejections", approvals, rejected });
    return;
  }
  advanceResistanceLeader(room);
  room.status = "team";
  setResistanceEvent(room, { type: "team-rejected", approvals, rejected, leaderName: getResistanceLeader(room)?.name || "" });
}

function resolveResistanceMissionVotes(room) {
  if ((room.currentTeam || []).some((playerId) => room.missionVotes?.[playerId] === undefined)) return;
  const missionVotes = { ...(room.missionVotes || {}) };
  const sabotages = Object.values(missionVotes).filter(Boolean).length;
  const successes = Object.values(missionVotes).filter((value) => !value).length;
  const requiredFails = getResistanceFailsRequired(room);
  const failed = sabotages >= requiredFails;
  room.missionResults.push({
    missionNumber: Number(room.missionIndex || 0) + 1,
    failed,
    successes,
    sabotages,
    requiredFails,
    teamIds: [...(room.currentTeam || [])],
    teamVotes: { ...(room.teamVotes || {}) }
  });
  const failedMissions = room.missionResults.filter((mission) => mission.failed).length;
  const successfulMissions = room.missionResults.length - failedMissions;
  const event = { type: failed ? "mission-failed" : "mission-succeeded", sabotages, requiredFails, missionNumber: room.missionIndex + 1 };
  if (successfulMissions >= 3) {
    finishResistanceGame(room, "resistance", event);
    return;
  }
  if (failedMissions >= 3) {
    finishResistanceGame(room, "spies", event);
    return;
  }
  room.missionIndex += 1;
  room.rejectCount = 0;
  room.currentTeam = [];
  room.teamVotes = {};
  room.missionVotes = {};
  advanceResistanceLeader(room);
  room.status = "team";
  setResistanceEvent(room, { ...event, nextLeaderName: getResistanceLeader(room)?.name || "" });
}

function finishResistanceGame(room, winner, event) {
  room.status = "finished";
  room.winner = winner;
  room.currentTeam = [];
  room.teamVotes = {};
  room.missionVotes = {};
  room.players.forEach((player) => { player.won = winner === "spies" ? player.role === "spy" : player.role === "resistance"; });
  setResistanceEvent(room, event || { type: "finished" });
}

function setResistanceEvent(room, event) {
  room.eventId = crypto.randomUUID();
  room.lastEvent = event || {};
}

function advanceResistanceLeader(room) {
  room.leaderIndex = (Number(room.leaderIndex || 0) + 1) % Math.max(1, room.players.length);
}

function getResistanceRules(room) {
  return RESISTANCE_RULES[Number(room.config?.playerLimit) || room.players.length] || RESISTANCE_RULES[5];
}

function getResistanceTeamSize(room) {
  return getResistanceRules(room).teams[Math.max(0, Math.min(4, Number(room.missionIndex || 0)))] || 2;
}

function getResistanceFailsRequired(room) {
  return Number(room.config?.playerLimit || room.players.length) >= 7 && Number(room.missionIndex || 0) === 3 ? 2 : 1;
}

function getResistanceLeader(room) {
  return room.players[Number(room.leaderIndex || 0) % Math.max(1, room.players.length)] || room.players[0] || null;
}

function getResistanceTeamNames(room) {
  return (room.currentTeam || []).map((id) => room.players.find((player) => player.id === id)?.name).filter(Boolean);
}

function isResistanceHost(room, player) {
  return Boolean(player && player.id === (room.hostId || room.players[0]?.id));
}

function isResistanceHostConnected(room) {
  const host = room.players.find((player) => player.id === (room.hostId || room.players[0]?.id));
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < 30_000);
}

function resistanceRoundKey(room, kind) {
  return `${kind}:${room.status}:${room.missionIndex}:${room.rejectCount}:${(room.currentTeam || []).join(",")}`;
}

function mergeResistanceRooms(latest, incoming) {
  const removedIds = new Set(incoming._removedPlayerIds || []);
  const staleVote = incoming._voteRoundKey && incoming._voteRoundKey !== resistanceRoundKey(latest, incoming._voteRoundKey.split(":")[0]);
  const merged = incoming._touchOnly || staleVote ? { ...latest } : { ...incoming };
  const players = new Map();
  for (const player of latest.players || []) {
    if (!removedIds.has(player.id)) players.set(player.id, { ...player });
  }
  for (const player of incoming.players || []) {
    if (removedIds.has(player.id)) continue;
    const current = players.get(player.id);
    if ((incoming._touchOnly || staleVote) && current) {
      players.set(player.id, { ...current, lastSeen: Math.max(Number(current.lastSeen || 0), Number(player.lastSeen || 0)) });
      continue;
    }
    players.set(player.id, { ...(current || {}), ...player, lastSeen: Math.max(Number(current?.lastSeen || 0), Number(player.lastSeen || 0)) });
  }
  merged.players = [...players.values()].sort((a, b) => Number(a.seatNumber || 0) - Number(b.seatNumber || 0));
  if (!incoming._touchOnly && !staleVote && latest.status === incoming.status && latest.missionIndex === incoming.missionIndex) {
    if (incoming.status === "voting") {
      merged.teamVotes = { ...(latest.teamVotes || {}), ...(incoming.teamVotes || {}) };
      resolveResistanceTeamVotes(merged);
    } else if (incoming.status === "mission") {
      merged.missionVotes = { ...(latest.missionVotes || {}), ...(incoming.missionVotes || {}) };
      resolveResistanceMissionVotes(merged);
    }
  }
  merged._version = latest._version;
  merged._removedPlayerIds = incoming._removedPlayerIds;
  merged._touchOnly = incoming._touchOnly;
  merged._voteRoundKey = incoming._voteRoundKey;
  return merged;
}

function resistanceRoomResponse(room, privatePlayer = null) {
  const now = Date.now();
  const revealAll = room.status === "finished";
  const leader = getResistanceLeader(room);
  const spyNames = privatePlayer?.role === "spy" || revealAll
    ? room.players.filter((player) => player.role === "spy").map((player) => player.name)
    : [];
  return {
    roomName: room.roomName,
    config: room.config,
    status: room.status,
    eventId: room.eventId || "",
    lastEvent: room.lastEvent || null,
    missionIndex: Number(room.missionIndex || 0),
    missionNumber: Number(room.missionIndex || 0) + 1,
    missionResults: room.missionResults || [],
    teamSize: getResistanceTeamSize(room),
    failsRequired: getResistanceFailsRequired(room),
    rejectCount: Number(room.rejectCount || 0),
    leaderId: leader?.id || "",
    leaderName: leader?.name || "",
    currentTeam: room.currentTeam || [],
    teamVotesCast: Object.keys(room.teamVotes || {}).length,
    missionVotesCast: Object.keys(room.missionVotes || {}).length,
    winner: room.winner || "",
    players: room.players.map((player) => ({
      id: player.id,
      name: player.name,
      emoji: player.emoji,
      seatNumber: player.seatNumber,
      connected: now - Number(player.lastSeen || room.createdAt) < 30_000,
      isLeader: player.id === leader?.id,
      onTeam: (room.currentTeam || []).includes(player.id),
      hasTeamVoted: room.teamVotes?.[player.id] !== undefined,
      hasMissionVoted: room.missionVotes?.[player.id] !== undefined,
      role: revealAll ? player.role : "",
      won: revealAll ? Boolean(player.won) : undefined
    })).sort((a, b) => a.seatNumber - b.seatNumber),
    player: privatePlayer ? {
      id: privatePlayer.id,
      token: privatePlayer.token,
      isHost: isResistanceHost(room, privatePlayer),
      role: privatePlayer.role,
      spyNames,
      isLeader: privatePlayer.id === leader?.id,
      onTeam: (room.currentTeam || []).includes(privatePlayer.id),
      hasTeamVoted: room.teamVotes?.[privatePlayer.id] !== undefined,
      hasMissionVoted: room.missionVotes?.[privatePlayer.id] !== undefined,
      won: revealAll ? Boolean(privatePlayer.won) : undefined
    } : undefined
  };
}

async function loadCustomGamePlaylist(request, env) {
  try {
    const body = await request.json().catch(() => ({}));
    const input = String(body.input || "").trim();
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");
    if (!["youtube.com", "music.youtube.com", "m.youtube.com"].includes(host)) {
      return json({ error: "Add a public YouTube playlist URL" }, 400);
    }
    const playlistId = url.searchParams.get("list");
    if (!playlistId) return json({ error: "Add a public YouTube playlist URL" }, 400);
    const videos = await readYouTubePlaylistVideos(playlistId, () => {}, env);
    const songs = uniqueSongs(videos.map((video) =>
      songFromVideo(video.videoId, video.title, "Custom playlist", "", video.thumbnail, video.durationSeconds)
    ));
    if (!songs.length) return json({ error: "Playlist is empty, private, or unavailable" }, 404);
    return json({
      group: { id: "custom", name: "Custom playlist", image: songs[0]?.thumbnail || "" },
      channel: "Custom playlist",
      source: "youtube-playlist",
      songs
    });
  } catch (error) {
    return json({ error: friendlyError(error) }, 400);
  }
}

function cacheSongGroup(group, songs, source, ttl) {
  const payload = {
    group: {
      id: group.id,
      name: group.name,
      handle: group.handle || "",
      channelId: group.channelId || "",
      playlistId: group.playlistId || "",
      image: group.image,
      url: getArtistUrl(group)
    },
    channel: group.name,
    source,
    songs: prepareArtistSongs(group, songs)
  };
  songGroupCache.set(group.id, { expiresAt: Date.now() + ttl, payload });
  return payload;
}

function getArtistUrl(group) {
  if (group.handle) return `https://www.youtube.com/@${group.handle}`;
  if (group.playlistId) return `https://www.youtube.com/playlist?list=${group.playlistId}`;
  return "";
}

function getLockedSnapshotSongs(group) {
  if (!group.locked) return [];
  const snapshot = LOCKED_SONG_SNAPSHOTS[group.id];
  if (!snapshot?.length) return group.fallbackSongs || [];
  return snapshot.map(([videoId, rawTitle, durationSeconds = 0]) =>
    songFromVideo(videoId, rawTitle, group.name, "", "", durationSeconds)
  );
}

async function readArtistPlaylist(group, env) {
  if (!group.playlistId) return { songs: [] };
  const videos = await readYouTubePlaylistVideos(group.playlistId, () => {}, env);
  return {
    songs: videos.map((video) => songFromVideo(video.videoId, cleanAlbumTitle(video.title, group.name), group.name, "", video.thumbnail, video.durationSeconds))
  };
}

async function readChannelVideosPage(group) {
  if (!group.handle) return { songs: [] };
  const html = await fetchText(`https://www.youtube.com/@${encodeURIComponent(group.handle)}/videos`);
  const data = extractInitialData(html);
  const videos = [];
  collectYouTubeRenderers(data, "videoRenderer", videos);
  const config = extractInnertubeConfig(html);
  const seenTokens = new Set();
  let token = findNextContinuationToken(data, seenTokens);

  for (let page = 0; token && page < 30 && videos.length < 900; page += 1) {
    try {
      const continuation = await readYouTubeContinuation(token, config);
      collectYouTubeRenderers(continuation, "videoRenderer", videos);
      token = findNextContinuationToken(continuation, seenTokens);
    } catch {
      break;
    }
  }

  return {
    songs: uniqueVideos(videos).map((video) => songFromVideo(video.videoId, video.title, group.name, "", video.thumbnail, video.durationSeconds))
  };
}

async function readYouTubeContinuation(token, config) {
  if (!config.apiKey || !config.clientVersion) return {};
  const url = new URL("https://www.youtube.com/youtubei/v1/browse");
  url.searchParams.set("key", config.apiKey);
  return fetchJson(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      context: {
        client: {
          clientName: "WEB",
          clientVersion: config.clientVersion,
          hl: "en",
          gl: "US"
        }
      },
      continuation: token
    })
  });
}

function extractInnertubeConfig(html) {
  return {
    apiKey: readJsonStringConfig(html, "INNERTUBE_API_KEY"),
    clientVersion: readJsonStringConfig(html, "INNERTUBE_CLIENT_VERSION")
  };
}

function readJsonStringConfig(text, key) {
  const match = String(text).match(new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`));
  return match?.[1] || "";
}

function findNextContinuationToken(value, seenTokens) {
  const tokens = [];
  collectContinuationTokens(value, tokens);
  const token = tokens.find((item) => !seenTokens.has(item));
  if (token) seenTokens.add(token);
  return token || "";
}

function collectContinuationTokens(value, out) {
  if (!value || typeof value !== "object") return;
  const token = value.continuationCommand?.token;
  if (token) out.push(token);
  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      for (const item of child) collectContinuationTokens(item, out);
    } else if (child && typeof child === "object") {
      collectContinuationTokens(child, out);
    }
  }
}

function prepareArtistSongs(group, songs) {
  const filtered = uniqueSongs(songs).filter((song) => shouldKeepArtistSong(group, song));
  if (group.preserveSongOrder) return filtered;
  return dedupeArtistSongs(group, filtered);
}

function shouldKeepArtistSong(group, song) {
  if (group.excludeVideoIds?.includes(song.videoId)) return false;
  if (!["skrillex", "daftpunk"].includes(group.id)) return true;
  const text = normalizeSongText(`${song.rawTitle} ${song.answer} ${song.title}`);
  const duration = Number(song.durationSeconds || 0);
  if (duration && duration < 70) return false;
  if (duration && duration > 12 * 60) return false;
  const words = ` ${text} `;
  const blocked = [
    " remix ", " remixes ", " maximum overdrive ", " soulwax ", " vitalic ", " digitalism ",
    " emperor machine ", " alter ego ", " juan maclean ", " justice remix ", " live ", " coachella ",
    " ultra music festival ", " festival ", " full set ", " dj set ", " setlist ", " full album ", " album all ",
    " archive ", " reminder ", " out now ", " watch now ", " stream online ", " vinyl ", " trailer ", " teaser ",
    " behind the ", " interview ", " short ", " shorts ", " memory tapes ", " the collaborators ", " making of ",
    " episode ", " anniversary ", " unboxed "
  ];
  return !blocked.some((token) => words.includes(token));
}

function dedupeArtistSongs(group, songs) {
  const byKey = new Map();
  for (const song of songs) {
    const key = canonicalSongKey(group, song);
    const current = byKey.get(key);
    if (!current || songPreferenceScore(song) > songPreferenceScore(current)) byKey.set(key, { ...song, dedupeKey: key });
  }
  return [...byKey.values()].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

function canonicalSongKey(group, song) {
  const parsed = parseSongTitle(song.rawTitle || song.answer || song.title, group.name);
  const base = parsed.title || song.title || song.answer;
  return normalizeSongText(base)
    .replace(/\b(official|music|video|audio|visualizer|visualiser|lyrics?|lyric|clip|clean|explicit|version|ver|mv|hd|4k)\b/g, " ")
    .replace(/\b(feat|ft|featuring)\b.*$/g, "")
    .replace(/\s+/g, " ")
    .trim() || normalizeSongText(song.answer);
}

function songPreferenceScore(song) {
  const text = normalizeSongText(song.rawTitle || song.answer);
  let score = 0;
  if (text.includes("official music video")) score += 50;
  if (text.includes("official video")) score += 45;
  if (text.includes("official audio")) score += 40;
  if (text.includes("visualizer")) score += 20;
  if (text.includes("lyric")) score -= 10;
  if (text.includes("clean")) score -= 8;
  if (text.includes("explicit")) score += 3;
  if (song.thumbnail) score += 2;
  return score;
}

function cleanAlbumTitle(title, artist) {
  const clean = decodeHtml(title)
    .replace(/\s*\([^)]*(official|oficial|music|musical|video|audio|visualizer|mv)[^)]*\)\s*/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (/^BTS\b/i.test(clean) && !/\s[-\u2013\u2014]\s/.test(clean)) {
    const quoted = clean.match(/['"]([^'"]+)['"]/);
    if (quoted?.[1]) return `${artist} - ${quoted[1]}`;
  }
  return /\s[-\u2013\u2014]\s/.test(clean) ? clean : `${artist} - ${clean}`;
}

function songFromVideo(videoId, rawTitle, channel, publishedAt = "", thumbnail = "", durationSeconds = 0) {
  const parsed = parseSongTitle(rawTitle, channel);
  return {
    id: videoId,
    videoId,
    rawTitle: decodeHtml(rawTitle),
    artist: parsed.artist,
    title: parsed.title,
    answer: parsed.answer,
    link: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnail: thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    publishedAt,
    durationSeconds
  };
}

function parseSongTitle(rawTitle, fallbackArtist) {
  const clean = decodeHtml(rawTitle)
    .replace(/\s*\[[^\]]+\]\s*$/g, "")
    .replace(/\s*\([^)]*(official|oficial|visualizer|audio|video|lyrics?|letra|live|remix|edit|music|musical)[^)]*\)\s*/gi, " ")
    .replace(/\s*#\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const split = clean.match(/^(.+?)\s+[-\u2013\u2014]\s+(.+)$/);
  if (split) {
    return {
      artist: split[1].trim(),
      title: split[2].trim(),
      answer: `${split[1].trim()} - ${split[2].trim()}`
    };
  }

  return {
    artist: fallbackArtist,
    title: clean,
    answer: clean || rawTitle
  };
}

function normalizeSongText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function uploadsPlaylistId(channelId) {
  return channelId.replace(/^UC/, "UU");
}

function uniqueSongs(songList) {
  const seen = new Set();
  return songList.filter((song) => {
    if (!song?.videoId || seen.has(song.videoId)) return false;
    seen.add(song.videoId);
    return true;
  });
}

async function convertPlaylist(request, env) {
  const body = await request.json().catch(() => ({}));
  const input = String(body.input || "").trim();
  const target = String(body.target || "").trim().toLowerCase();
  const platforms = new Set(["spotify", "youtube"]);

  if (!input) return json({ error: "Add a playlist URL" }, 400);
  if (!platforms.has(target)) return json({ error: "Choose Spotify or YouTube" }, 400);

  const source = detectPlaylistPlatform(input);
  if (!source) return json({ error: "Unsupported playlist URL" }, 400);
  if (source === target) return json({ error: "Choose a different target platform" }, 400);

  const tracks = await readTracksForConversion(input, source, env);
  if (!tracks.length) return json({ error: "No playlist tracks found" }, 404);

  const rows = [];
  for (const track of tracks) {
    const result = await searchPlatformLink(track, target, env);
    rows.push({ title: formatTrackQuery(track), matchTitle: result.title, link: result.link });
  }

  return json({ source, target, rows, message: `Converted ${rows.length} tracks` });
}

function detectPlaylistPlatform(input) {
  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");
    if (["youtube.com", "youtu.be", "music.youtube.com", "m.youtube.com"].includes(host)) {
      if (url.searchParams.has("list") || getYouTubeVideoId(url)) return "youtube";
    }
    if (host === "open.spotify.com") return "spotify";
  } catch {
    return "";
  }
  return "";
}

async function readTracksForConversion(input, source, env) {
  if (source === "youtube") {
    const url = new URL(input);
    if (!url.searchParams.has("list") && getYouTubeVideoId(url)) {
      const row = await readYouTubeVideo(input, env);
      return [{ title: row.title, artist: "", sourceLink: row.link }];
    }
    const rows = await readYouTubePlaylist(input, () => {}, env);
    return rows.map((row) => ({ title: row.title, artist: "", sourceLink: row.link }));
  }
  if (source === "spotify") {
    const url = new URL(input);
    if (url.pathname.includes("/track/")) return [await readSpotifyTrack(input, env)];
    return readSpotifyPlaylist(input, () => {}, env);
  }
  throw new Error("Unsupported playlist URL");
}

async function searchPlatformLink(track, target, env) {
  if (target === "youtube") return searchYouTubeRow(track, env);
  if (target === "spotify") return searchSpotifyLink(track, env);
  throw new Error("Unsupported target platform");
}

async function readYouTubeVideo(input, env) {
  const url = new URL(input);
  const videoId = getYouTubeVideoId(url);
  if (!videoId) throw new Error("Missing YouTube video id");
  const link = `https://www.youtube.com/watch?v=${videoId}`;
  const title = await getYouTubeTitle(videoId, link, env);
  return { title, link };
}

async function readYouTubePlaylist(input, onProgress, env) {
  const url = new URL(input);
  const playlistId = url.searchParams.get("list");
  if (!playlistId) throw new Error("Missing YouTube playlist id");

  const videos = await readYouTubePlaylistVideos(playlistId, onProgress, env);
  return videos.map((video) => ({ title: video.title, link: `https://www.youtube.com/watch?v=${video.videoId}` }));
}

async function readYouTubePlaylistVideos(playlistId, onProgress, env) {
  onProgress(15, "Reading playlist");
  let videos = [];
  let apiError = null;
  if (env.YOUTUBE_API_KEY) {
    try {
      videos = await readYouTubePlaylistApi(playlistId, onProgress, env);
    } catch (error) {
      apiError = error;
      if (isQuotaError(error)) throw error;
      try {
        videos = await readYouTubePlaylistPage(playlistId);
      } catch {
        throw new Error(friendlyPlaylistError("youtube", error));
      }
    }
  } else {
    videos = await readYouTubePlaylistPage(playlistId);
  }

  if (!videos.length) throw new Error(friendlyPlaylistError("youtube", apiError));
  return videos;
}

async function readYouTubePlaylistApi(playlistId, onProgress, env) {
  const videos = [];
  let pageToken = "";

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("key", env.YOUTUBE_API_KEY);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const data = await fetchJson(url);
    for (const item of data.items || []) {
      const videoId = item.snippet?.resourceId?.videoId;
      const title = item.snippet?.title;
      const thumbnail = bestThumbnail(item.snippet?.thumbnails);
      if (videoId && title && title !== "Deleted video" && title !== "Private video") videos.push({ videoId, title, thumbnail });
    }
    pageToken = data.nextPageToken || "";
    onProgress(Math.min(80, 20 + videos.length), `Read ${videos.length} videos`);
  } while (pageToken);

  return videos;
}

async function readYouTubePlaylistPage(playlistId) {
  const html = await fetchText(`https://www.youtube.com/playlist?list=${encodeURIComponent(playlistId)}`);
  const data = extractInitialData(html);
  const videos = [];
  collectYouTubeRenderers(data, "playlistVideoRenderer", videos);
  return uniqueVideos(videos);
}

async function getYouTubeTitle(videoId, link, env) {
  try {
    const data = await fetchJson(`https://www.youtube.com/oembed?url=${encodeURIComponent(link)}&format=json`);
    if (data.title) return data.title;
  } catch {}

  if (env.YOUTUBE_API_KEY) {
    try {
      const url = new URL("https://www.googleapis.com/youtube/v3/videos");
      url.searchParams.set("part", "snippet");
      url.searchParams.set("id", videoId);
      url.searchParams.set("key", env.YOUTUBE_API_KEY);
      const data = await fetchJson(url);
      const title = data.items?.[0]?.snippet?.title;
      if (title) return decodeHtml(title);
    } catch {}
  }

  return `YouTube video ${videoId}`;
}

async function readSpotifyTrack(input, env) {
  const id = getSpotifyId(input, "track");
  if (!id) throw new Error("Missing Spotify track id");

  if (hasSpotifyCredentials(env)) {
    const token = await getSpotifyToken(env);
    const data = await fetchJson(`https://api.spotify.com/v1/tracks/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return spotifyTrackFromApi(data);
  }

  const data = await fetchJson(`https://open.spotify.com/oembed?url=${encodeURIComponent(input)}`);
  return parseSpotifyOembedTitle(data.title || "");
}

async function readSpotifyPlaylist(input, onProgress, env) {
  const id = getSpotifyId(input, "playlist");
  if (!id) throw new Error("Missing Spotify playlist id");
  if (!hasSpotifyCredentials(env)) throw new Error("Spotify playlist needs SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET");

  const token = await getSpotifyToken(env);
  const tracks = [];
  let next = `https://api.spotify.com/v1/playlists/${id}/tracks?limit=100&fields=items(track(name,artists(name))),next`;

  try {
    while (next) {
      const data = await fetchJson(next, { headers: { Authorization: `Bearer ${token}` } });
      for (const item of data.items || []) if (item.track?.name) tracks.push(spotifyTrackFromApi(item.track));
      next = data.next;
      onProgress(Math.min(45, 10 + tracks.length), `Read ${tracks.length} Spotify tracks`);
    }
  } catch (error) {
    if (!/Spotify request failed: 403\b|Request failed: 403\b/.test(error.message)) throw error;
    const embedTracks = await readSpotifyPlaylistEmbed(id);
    embedTracks.sourceWarning = `Spotify API denied full playlist access; public embed exposed ${embedTracks.length} tracks.`;
    return embedTracks;
  }

  return tracks;
}

async function readSpotifyPlaylistEmbed(id) {
  const html = await fetchText(`https://open.spotify.com/embed/playlist/${encodeURIComponent(id)}`);
  const data = extractNextData(html);
  const trackList = data?.props?.pageProps?.state?.data?.entity?.trackList || [];
  const tracks = trackList.filter((track) => track?.title).map((track) => ({ title: decodeHtml(track.title), artist: decodeHtml(track.subtitle || "") }));
  if (!tracks.length) throw new Error(friendlyPlaylistError("spotify"));
  return tracks;
}

async function searchYouTubeRow(track, env) {
  const query = formatTrackQuery(track);
  let video = null;
  try {
    video = await searchYouTubePage(query);
  } catch {}
  if (!video && useYouTubeSearchApi(env)) video = await searchYouTubeApi(query, "video", env);
  if (!video) throw new Error(`No YouTube result found for ${query}`);
  return { title: video.title, link: `https://www.youtube.com/watch?v=${video.videoId}` };
}

async function searchSpotifyLink(track, env) {
  if (!hasSpotifyCredentials(env)) throw new Error("Spotify search needs SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET");

  const token = await getSpotifyToken(env);
  const url = new URL("https://api.spotify.com/v1/search");
  url.searchParams.set("type", "track");
  url.searchParams.set("limit", "1");
  url.searchParams.set("q", formatTrackQuery(track));

  const data = await fetchJson(url, { headers: { Authorization: `Bearer ${token}` } });
  const item = data.tracks?.items?.[0];
  const link = item?.external_urls?.spotify;
  if (!link) throw new Error(`No Spotify result found for ${formatTrackQuery(track)}`);
  return { title: spotifyDisplayTitle(item), link };
}

async function searchYouTubeAlbum(query, onProgress, env) {
  onProgress(15, "Searching album playlist");

  const playlistRows = await searchYouTubeAlbumPlaylistRows(query, onProgress, env);
  if (playlistRows.length) return playlistRows;

  if (useYouTubeSearchApi(env)) {
    const playlist = await searchYouTubePlaylistApi(`${query} album`, env);
    if (playlist) {
      onProgress(35, `Reading playlist: ${playlist.title}`);
      const videos = await readYouTubePlaylistVideos(playlist.playlistId, onProgress, env);
      if (videos.length > 1) return videos.map((video) => ({ title: video.title, link: `https://www.youtube.com/watch?v=${video.videoId}` }));
    }
  }

  onProgress(60, "No playlist found, using top video");
  return [await searchYouTubeRow({ title: `${query} album`, artist: "" }, env)];
}

async function searchYouTubeAlbumPlaylistRows(query, onProgress, env) {
  const searches = [`${query} album playlist`, `${query} playlist`, `${query} album`];

  for (const search of searches) {
    let playlists = [];
    try {
      playlists = await searchYouTubePlaylistPage(search);
    } catch {
      continue;
    }

    for (const playlist of playlists.slice(0, 5)) {
      onProgress(35, `Reading playlist: ${playlist.title}`);
      try {
        const videos = await readYouTubePlaylistVideos(playlist.playlistId, onProgress, env);
        if (videos.length > 1) return videos.map((video) => ({ title: video.title, link: `https://www.youtube.com/watch?v=${video.videoId}` }));
      } catch {
        // Try the next playlist candidate before falling back to a top video.
      }
    }
  }

  return [];
}

async function searchYouTubeApi(query, type, env) {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("type", type);
  url.searchParams.set("q", query);
  url.searchParams.set("key", env.YOUTUBE_API_KEY);

  const data = await fetchJson(url);
  const item = data.items?.[0];
  const videoId = item?.id?.videoId;
  const title = item?.snippet?.title;
  return videoId && title ? { videoId, title: decodeHtml(title) } : null;
}

async function searchYouTubePlaylistApi(query, env) {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("type", "playlist");
  url.searchParams.set("q", query);
  url.searchParams.set("key", env.YOUTUBE_API_KEY);

  const data = await fetchJson(url);
  const item = data.items?.[0];
  const playlistId = item?.id?.playlistId;
  const title = item?.snippet?.title;
  return playlistId && title ? { playlistId, title: decodeHtml(title) } : null;
}

async function searchYouTubePlaylistPage(query) {
  const url = new URL("https://www.youtube.com/results");
  url.searchParams.set("search_query", query);
  url.searchParams.set("sp", "EgIQAw==");

  const html = await fetchText(url);
  const data = extractInitialData(html);
  const playlists = [];
  collectYouTubePlaylists(data, playlists);
  return uniquePlaylists(playlists);
}

async function searchYouTubePage(query) {
  const html = await fetchText(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
  const data = extractInitialData(html);
  const videos = [];
  collectYouTubeRenderers(data, "videoRenderer", videos);
  return uniqueVideos(videos)[0] || null;
}

function getYouTubeVideoId(url) {
  if (url.hostname.includes("youtu.be")) return url.pathname.split("/").filter(Boolean)[0] || "";
  if (url.searchParams.get("v")) return url.searchParams.get("v");
  const parts = url.pathname.split("/").filter(Boolean);
  if (["shorts", "embed", "live"].includes(parts[0])) return parts[1] || "";
  return "";
}

function getSpotifyId(input, type) {
  const url = new URL(input);
  const match = url.pathname.match(new RegExp(`/${type}/([^/?]+)`));
  return match?.[1] || "";
}

function hasSpotifyCredentials(env) {
  return Boolean(env.SPOTIFY_CLIENT_ID && env.SPOTIFY_CLIENT_SECRET);
}

async function getSpotifyToken(env) {
  if (spotifyToken && spotifyToken.expiresAt > Date.now() + 60_000) return spotifyToken.value;

  const credentials = btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`);
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: `Basic ${credentials}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "client_credentials" })
  });

  if (!response.ok) throw new Error(`Spotify token failed: ${response.status}`);
  const data = await response.json();
  spotifyToken = { value: data.access_token, expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000 };
  return spotifyToken.value;
}

function spotifyTrackFromApi(track) {
  return { title: track.name, artist: (track.artists || []).map((artist) => artist.name).join(" ") };
}

function parseSpotifyOembedTitle(title) {
  const parts = title.split(/\s(?:-|\||\*)\s|\s\u2022\s/);
  return { title: parts[0] || title || "Spotify track", artist: parts.slice(1).join(" ") || "" };
}

function formatTrackQuery(track) {
  return `${track.title || ""} ${track.artist || ""}`.trim();
}

function spotifyDisplayTitle(track) {
  const artist = (track.artists || []).map((item) => item.name).join(" ");
  return `${track.name || "Spotify track"}${artist ? ` - ${artist}` : ""}`;
}

function useYouTubeSearchApi(env) {
  return env.YOUTUBE_SEARCH_API === "1" && Boolean(env.YOUTUBE_API_KEY);
}

function extractInitialData(html) {
  const markers = ["var ytInitialData = ", "window[\"ytInitialData\"] = ", "ytInitialData = "];
  for (const marker of markers) {
    const start = html.indexOf(marker);
    if (start !== -1) {
      const jsonStart = html.indexOf("{", start);
      return JSON.parse(readBalancedObject(html, jsonStart));
    }
  }
  throw new Error("YouTube page data not found");
}

function extractNextData(html) {
  const match = html.match(/<script\s+id="__NEXT_DATA__"\s+type="application\/json">([\s\S]*?)<\/script>/i);
  if (!match?.[1]) throw new Error("Spotify embed data not found");
  return JSON.parse(match[1]);
}

function readBalancedObject(text, start) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === "\"") inString = false;
      continue;
    }
    if (char === "\"") inString = true;
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return text.slice(start, i + 1);
  }

  throw new Error("Malformed page data");
}

function collectYouTubeRenderers(value, rendererName, out) {
  if (!value || typeof value !== "object") return;
  if (value[rendererName]) {
    const renderer = value[rendererName];
    const videoId = renderer.videoId || renderer.navigationEndpoint?.watchEndpoint?.videoId;
    const title = textFromYouTubeTitle(renderer.title);
    const thumbnail = bestThumbnail(renderer.thumbnail?.thumbnails);
    const durationSeconds = durationFromYouTubeRenderer(renderer);
    if (videoId && title) out.push({ videoId, title, thumbnail, durationSeconds });
  }
  if (rendererName === "videoRenderer" && value.lockupViewModel?.contentType === "LOCKUP_CONTENT_TYPE_VIDEO") {
    const renderer = value.lockupViewModel;
    const command = renderer.rendererContext?.commandContext?.onTap?.innertubeCommand || {};
    const videoId = renderer.contentId || command.watchEndpoint?.videoId || "";
    const title = renderer.metadata?.lockupMetadataViewModel?.title?.content || "";
    const thumbnail = bestThumbnail(renderer.contentImage?.thumbnailViewModel?.image?.sources);
    const durationSeconds = durationFromYouTubeRenderer(renderer);
    if (videoId && title) out.push({ videoId, title: decodeHtml(title), thumbnail, durationSeconds });
  }
  for (const child of Object.values(value)) {
    if (Array.isArray(child)) for (const item of child) collectYouTubeRenderers(item, rendererName, out);
    else if (child && typeof child === "object") collectYouTubeRenderers(child, rendererName, out);
  }
}

function durationFromYouTubeRenderer(renderer) {
  const direct = textFromYouTubeTitle(renderer.lengthText);
  return parseDurationText(direct || findDurationText(renderer));
}

function findDurationText(value) {
  if (typeof value === "string") return parseDurationText(value) ? value : "";
  if (!value || typeof value !== "object") return "";
  for (const [key, child] of Object.entries(value)) {
    if (key === "url") continue;
    if (typeof child === "string" && parseDurationText(child)) return child;
    if (Array.isArray(child)) {
      for (const item of child) {
        const found = findDurationText(item);
        if (found) return found;
      }
    } else if (child && typeof child === "object") {
      const found = findDurationText(child);
      if (found) return found;
    }
  }
  return "";
}

function parseDurationText(value) {
  const text = String(value || "").trim();
  const clock = text.match(/^(\d{1,2}:)?\d{1,2}:\d{2}$/);
  if (clock) return text.split(":").reduce((sum, part) => (sum * 60) + Number(part), 0);
  const hours = Number(text.match(/(\d+)\s*(hour|hours|hora|horas)/i)?.[1] || 0);
  const minutes = Number(text.match(/(\d+)\s*(minute|minutes|minuto|minutos)/i)?.[1] || 0);
  const seconds = Number(text.match(/(\d+)\s*(second|seconds|segundo|segundos)/i)?.[1] || 0);
  return hours || minutes || seconds ? hours * 3600 + minutes * 60 + seconds : 0;
}

function bestThumbnail(thumbnails) {
  if (typeof thumbnails === "string") return thumbnails;
  if (!thumbnails || typeof thumbnails !== "object") return "";
  if (!Array.isArray(thumbnails)) {
    return bestThumbnail(
      thumbnails.maxres?.url ||
      thumbnails.standard?.url ||
      thumbnails.high?.url ||
      thumbnails.medium?.url ||
      thumbnails.default?.url
    );
  }
  const sorted = [...thumbnails].sort((a, b) => (b.width || 0) - (a.width || 0));
  return sorted[0]?.url || "";
}

function collectYouTubePlaylists(value, out) {
  if (!value || typeof value !== "object") return;

  if (value.playlistRenderer) {
    const renderer = value.playlistRenderer;
    const playlistId = renderer.playlistId || renderer.navigationEndpoint?.watchEndpoint?.playlistId || "";
    const title = textFromYouTubeTitle(renderer.title);
    if (playlistId && title) out.push({ playlistId, title });
  }

  if (value.lockupViewModel) {
    const renderer = value.lockupViewModel;
    const command = renderer.rendererContext?.commandContext?.onTap?.innertubeCommand || {};
    const browseId = command.browseEndpoint?.browseId || "";
    const playlistId = renderer.contentId || command.watchEndpoint?.playlistId || browseId.replace(/^VL/, "");
    const title = renderer.metadata?.lockupMetadataViewModel?.title?.content || "";
    if (playlistId && title) out.push({ playlistId, title: decodeHtml(title) });
  }

  for (const child of Object.values(value)) {
    if (Array.isArray(child)) for (const item of child) collectYouTubePlaylists(item, out);
    else if (child && typeof child === "object") collectYouTubePlaylists(child, out);
  }
}

function textFromYouTubeTitle(title) {
  if (!title) return "";
  if (typeof title.simpleText === "string") return decodeHtml(title.simpleText);
  if (Array.isArray(title.runs)) return decodeHtml(title.runs.map((run) => run.text || "").join(""));
  if (typeof title.text === "string") return decodeHtml(title.text);
  return "";
}

function uniqueVideos(videos) {
  const seen = new Set();
  return videos.filter((video) => {
    if (seen.has(video.videoId)) return false;
    seen.add(video.videoId);
    return true;
  });
}

function uniquePlaylists(playlists) {
  const seen = new Set();
  return playlists.filter((playlist) => {
    if (seen.has(playlist.playlistId)) return false;
    seen.add(playlist.playlistId);
    return true;
  });
}

function toCsv(rows) {
  const lines = [["Title", "YouTube Link"], ...rows.map((row) => [row.title, row.link])];
  return lines.map((line) => line.map(csvCell).join(";")).join("\r\n") + "\r\n";
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[";\r\n]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
}

function getPublicJob(id) {
  const job = jobs.get(id);
  if (!job) return { error: "Job not found" };
  return {
    id: job.id,
    status: job.status,
    progress: job.progress,
    message: job.message,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
    items: job.items,
    rows: job.rows,
    csv: job.csv,
    artifact: job.artifact,
    errors: job.errors
  };
}

function jobEvent(id) {
  const job = getPublicJob(id);
  const body = `data: ${JSON.stringify(job)}\n\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache"
    }
  });
}

function downloadCsv(id) {
  const job = jobs.get(id);
  if (!job?.artifact) return json({ error: "CSV not ready" }, 404);
  return new Response(`\uFEFF${job.csv}`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${job.artifact.name}"`
    }
  });
}

function json(payload, status = payload?.error ? 404 : 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { "User-Agent": "Mozilla/5.0 CSV metadata tool", ...(options.headers || {}) } });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    const isSpotify = new URL(String(url)).hostname.endsWith("spotify.com");
    const detail = getErrorMessage(body);
    const error = new Error(`${isSpotify ? "Spotify request failed" : "Request failed"}: ${response.status}${detail ? ` ${detail}` : ""}`);
    error.status = response.status;
    error.detail = detail;
    error.body = body;
    throw error;
  }
  return response.json();
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { "User-Agent": "Mozilla/5.0 CSV metadata tool", ...(options.headers || {}) } });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.text();
}

function getErrorMessage(body) {
  if (!body) return "";
  try {
    const data = JSON.parse(body);
    return data?.error?.message || data?.error_description || data?.message || "";
  } catch {
    return "";
  }
}

function friendlyError(error) {
  if (isQuotaError(error)) return "API quota exceeded. Try again later or disable YouTube API usage.";
  if (isPrivatePlaylistError(error)) return "Playlist is private or unavailable. Make it public, then try again.";
  return error?.message || "Request failed";
}

function friendlyPlaylistError(platform, error = null) {
  if (isQuotaError(error)) return "API quota exceeded. Try again later or disable YouTube API usage.";
  if (platform === "spotify") return "Spotify playlist is private or unavailable. Make it public, then try again.";
  return "YouTube playlist is private, empty, or unavailable. Make it public, then try again.";
}

function isQuotaError(error) {
  const text = `${error?.message || ""} ${error?.detail || ""} ${error?.body || ""}`.toLowerCase();
  return /quota|ratelimit|rate limit|daily limit|exceeded/.test(text);
}

function isPrivatePlaylistError(error) {
  const text = `${error?.message || ""} ${error?.detail || ""} ${error?.body || ""}`.toLowerCase();
  return /private|forbidden|not found|playlistitemsnotaccessible|playlistnotfound|unavailable/.test(text);
}

function decodeHtml(value) {
  return String(value)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "\"")
    .replaceAll("&apos;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}
