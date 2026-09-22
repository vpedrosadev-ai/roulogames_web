const MOVIE_ROWS = [
  ["Gladiator", 2000], ["Memento", 2000], ["Náufrago", 2000, "Cast Away"], ["Amores perros", 2000],
  ["El protegido", 2000, "Unbreakable"], ["X-Men", 2000], ["Chicken Run: Evasión en la granja", 2000, "Chicken Run"],
  ["El emperador y sus locuras", 2000, "The Emperor's New Groove"], ["Réquiem por un sueño", 2000, "Requiem for a Dream"],
  ["Harry Potter y la piedra filosofal", 2001, "Harry Potter and the Philosopher's Stone"], ["El señor de los anillos: La comunidad del anillo", 2001, "The Lord of the Rings: The Fellowship of the Ring"],
  ["El viaje de Chihiro", 2001, "Spirited Away"], ["Shrek", 2001], ["Monstruos, S.A.", 2001, "Monsters Inc"], ["Mulholland Drive", 2001],
  ["Una mente maravillosa", 2001, "A Beautiful Mind"], ["Ocean's Eleven", 2001], ["Amélie", 2001], ["Donnie Darko", 2001],
  ["El señor de los anillos: Las dos torres", 2002, "The Lord of the Rings: The Two Towers"], ["Harry Potter y la cámara secreta", 2002, "Harry Potter and the Chamber of Secrets"],
  ["Spider-Man", 2002], ["Lilo y Stitch", 2002, "Lilo & Stitch"], ["Atrápame si puedes", 2002, "Catch Me If You Can"],
  ["El pianista", 2002, "The Pianist"], ["Ice Age: La edad de hielo", 2002, "Ice Age"], ["28 días después", 2002, "28 Days Later"],
  ["El señor de los anillos: El retorno del rey", 2003, "The Lord of the Rings: The Return of the King"], ["Piratas del Caribe: La maldición de la Perla Negra", 2003, "Pirates of the Caribbean: The Curse of the Black Pearl"],
  ["Buscando a Nemo", 2003, "Finding Nemo"], ["Kill Bill: Volumen 1", 2003, "Kill Bill Vol. 1"], ["Lost in Translation", 2003],
  ["Big Fish", 2003], ["Love Actually", 2003], ["Oldboy", 2003], ["Escuela de rock", 2003, "School of Rock"],
  ["Harry Potter y el prisionero de Azkaban", 2004, "Harry Potter and the Prisoner of Azkaban"], ["Shrek 2", 2004],
  ["Los increíbles", 2004, "The Incredibles"], ["Spider-Man 2", 2004], ["El diario de Noa", 2004, "The Notebook"],
  ["¡Olvídate de mí!", 2004, "Eternal Sunshine of the Spotless Mind"], ["El castillo ambulante", 2004, "Howl's Moving Castle"],
  ["Saw", 2004], ["Million Dollar Baby", 2004], ["El bosque", 2004, "The Village"],
  ["Batman Begins", 2005], ["Harry Potter y el cáliz de fuego", 2005, "Harry Potter and the Goblet of Fire"], ["Charlie y la fábrica de chocolate", 2005, "Charlie and the Chocolate Factory"],
  ["Star Wars: Episodio III - La venganza de los Sith", 2005, "Revenge of the Sith"], ["Orgullo y prejuicio", 2005, "Pride & Prejudice"],
  ["Sin City", 2005], ["La novia cadáver", 2005, "Corpse Bride"], ["Madagascar", 2005], ["V de Vendetta", 2005, "V for Vendetta"],
  ["Piratas del Caribe: El cofre del hombre muerto", 2006, "Pirates of the Caribbean: Dead Man's Chest"], ["El laberinto del fauno", 2006, "Pan's Labyrinth"],
  ["El truco final", 2006, "The Prestige"], ["Cars", 2006], ["Infiltrados", 2006, "The Departed"], ["Casino Royale", 2006],
  ["Pequeña Miss Sunshine", 2006, "Little Miss Sunshine"], ["En busca de la felicidad", 2006, "The Pursuit of Happyness"], ["300", 2006],
  ["Ratatouille", 2007], ["Harry Potter y la Orden del Fénix", 2007, "Harry Potter and the Order of the Phoenix"],
  ["Transformers", 2007], ["Soy leyenda", 2007, "I Am Legend"], ["No es país para viejos", 2007, "No Country for Old Men"],
  ["Juno", 2007], ["Zodiac", 2007], ["Encantada: La historia de Giselle", 2007, "Enchanted"], ["[REC]", 2007],
  ["El caballero oscuro", 2008, "The Dark Knight"], ["WALL-E", 2008], ["Iron Man", 2008], ["Kung Fu Panda", 2008],
  ["El curioso caso de Benjamin Button", 2008, "The Curious Case of Benjamin Button"], ["Slumdog Millionaire", 2008],
  ["Gran Torino", 2008], ["Crepúsculo", 2008, "Twilight"], ["Mamma Mia!", 2008], ["Bolt", 2008],
  ["Avatar", 2009], ["Up", 2009], ["Malditos bastardos", 2009, "Inglourious Basterds"], ["Harry Potter y el misterio del príncipe", 2009, "Harry Potter and the Half-Blood Prince"],
  ["Coraline", 2009], ["Distrito 9", 2009, "District 9"], ["Resacón en Las Vegas", 2009, "The Hangover"],
  ["Los mundos de Coraline", 2009, "Coraline"], ["La princesa y el sapo", 2009, "The Princess and the Frog"],
  ["Origen", 2010, "Inception"], ["Toy Story 3", 2010], ["Cómo entrenar a tu dragón", 2010, "How to Train Your Dragon"],
  ["La red social", 2010, "The Social Network"], ["Cisne negro", 2010, "Black Swan"], ["Shutter Island", 2010],
  ["Gru, mi villano favorito", 2010, "Despicable Me"], ["Enredados", 2010, "Tangled"], ["Scott Pilgrim contra el mundo", 2010, "Scott Pilgrim vs. the World"],
  ["Harry Potter y las reliquias de la Muerte: Parte 1", 2010, "Harry Potter and the Deathly Hallows Part 1"],
  ["Harry Potter y las reliquias de la Muerte: Parte 2", 2011, "Harry Potter and the Deathly Hallows Part 2"], ["Intocable", 2011, "The Intouchables"],
  ["Drive", 2011], ["El origen del planeta de los simios", 2011, "Rise of the Planet of the Apes"], ["Thor", 2011],
  ["Capitán América: El primer vengador", 2011, "Captain America: The First Avenger"], ["X-Men: Primera generación", 2011, "X-Men: First Class"],
  ["Criadas y señoras", 2011, "The Help"], ["La invención de Hugo", 2011, "Hugo"],
  ["Los Vengadores", 2012, "The Avengers"], ["El caballero oscuro: La leyenda renace", 2012, "The Dark Knight Rises"],
  ["Los juegos del hambre", 2012, "The Hunger Games"], ["Django desencadenado", 2012, "Django Unchained"], ["Brave", 2012],
  ["¡Rompe Ralph!", 2012, "Wreck-It Ralph"], ["Lo imposible", 2012, "The Impossible"], ["La vida de Pi", 2012, "Life of Pi"],
  ["Skyfall", 2012], ["El lado bueno de las cosas", 2012, "Silver Linings Playbook"],
  ["Frozen: El reino del hielo", 2013, "Frozen"], ["Los juegos del hambre: En llamas", 2013, "Catching Fire"],
  ["El lobo de Wall Street", 2013, "The Wolf of Wall Street"], ["Gravity", 2013], ["Her", 2013], ["Prisioneros", 2013, "Prisoners"],
  ["Monstruos University", 2013, "Monsters University"], ["Guerra Mundial Z", 2013, "World War Z"], ["Pacific Rim", 2013],
  ["Interstellar", 2014], ["Guardianes de la Galaxia", 2014, "Guardians of the Galaxy"], ["Whiplash", 2014],
  ["Big Hero 6", 2014], ["Perdida", 2014, "Gone Girl"], ["El gran hotel Budapest", 2014, "The Grand Budapest Hotel"],
  ["Cómo entrenar a tu dragón 2", 2014, "How to Train Your Dragon 2"], ["El amanecer del planeta de los simios", 2014, "Dawn of the Planet of the Apes"],
  ["Mad Max: Furia en la carretera", 2015, "Mad Max: Fury Road"], ["Del revés", 2015, "Inside Out"], ["Marte", 2015, "The Martian"],
  ["Star Wars: Episodio VII - El despertar de la Fuerza", 2015, "The Force Awakens"], ["Jurassic World", 2015], ["El renacido", 2015, "The Revenant"],
  ["Sicario", 2015], ["La habitación", 2015, "Room"], ["Spotlight", 2015], ["Ant-Man", 2015],
  ["Deadpool", 2016], ["La ciudad de las estrellas: La La Land", 2016, "La La Land"], ["Zootrópolis", 2016, "Zootopia"],
  ["Vaiana", 2016, "Moana"], ["Doctor Strange", 2016], ["Animales fantásticos y dónde encontrarlos", 2016, "Fantastic Beasts and Where to Find Them"],
  ["Rogue One: Una historia de Star Wars", 2016, "Rogue One"], ["La llegada", 2016, "Arrival"], ["Hasta el último hombre", 2016, "Hacksaw Ridge"],
  ["Coco", 2017], ["Déjame salir", 2017, "Get Out"], ["Blade Runner 2049", 2017], ["Dunkerque", 2017, "Dunkirk"],
  ["Wonder Woman", 2017], ["Spider-Man: Homecoming", 2017], ["Thor: Ragnarok", 2017], ["It", 2017],
  ["Tres anuncios en las afueras", 2017, "Three Billboards Outside Ebbing Missouri"], ["El gran showman", 2017, "The Greatest Showman"],
  ["Vengadores: Infinity War", 2018, "Avengers: Infinity War"], ["Spider-Man: Un nuevo universo", 2018, "Spider-Man: Into the Spider-Verse"],
  ["Black Panther", 2018], ["Bohemian Rhapsody", 2018], ["Ha nacido una estrella", 2018, "A Star Is Born"],
  ["Un lugar tranquilo", 2018, "A Quiet Place"], ["Ready Player One", 2018], ["Los increíbles 2", 2018, "Incredibles 2"],
  ["Roma", 2018], ["Green Book", 2018],
  ["Parásitos", 2019, "Parasite"], ["Vengadores: Endgame", 2019, "Avengers: Endgame"], ["Joker", 2019],
  ["Érase una vez en Hollywood", 2019, "Once Upon a Time in Hollywood"], ["1917", 2019], ["Puñales por la espalda", 2019, "Knives Out"],
  ["Jojo Rabbit", 2019], ["Toy Story 4", 2019], ["El irlandés", 2019, "The Irishman"], ["Klaus", 2019],
  ["Soul", 2020], ["Tenet", 2020], ["Otra ronda", 2020, "Another Round"], ["Nomadland", 2020],
  ["El padre", 2020, "The Father"], ["Una joven prometedora", 2020, "Promising Young Woman"], ["Onward", 2020],
  ["Dune", 2021], ["Spider-Man: No Way Home", 2021], ["No mires arriba", 2021, "Don't Look Up"], ["Encanto", 2021],
  ["Cruella", 2021], ["El escuadrón suicida", 2021, "The Suicide Squad"], ["Última noche en el Soho", 2021, "Last Night in Soho"],
  ["El método Williams", 2021, "King Richard"], ["CODA: Los sonidos del silencio", 2021, "CODA"],
  ["Todo a la vez en todas partes", 2022, "Everything Everywhere All at Once"], ["Avatar: El sentido del agua", 2022, "Avatar: The Way of Water"],
  ["Top Gun: Maverick", 2022], ["The Batman", 2022], ["Pinocho de Guillermo del Toro", 2022, "Guillermo del Toro's Pinocchio"],
  ["El gato con botas: El último deseo", 2022, "Puss in Boots: The Last Wish"], ["Black Panther: Wakanda Forever", 2022],
  ["Sin novedad en el frente", 2022, "All Quiet on the Western Front"], ["Glass Onion: El misterio de Knives Out", 2022, "Glass Onion"],
  ["Oppenheimer", 2023], ["Barbie", 2023], ["Spider-Man: Cruzando el Multiverso", 2023, "Spider-Man: Across the Spider-Verse"],
  ["Guardianes de la Galaxia: Volumen 3", 2023, "Guardians of the Galaxy Vol. 3"], ["Wonka", 2023],
  ["Elemental", 2023], ["Super Mario Bros.: La película", 2023, "The Super Mario Bros. Movie"], ["Pobres criaturas", 2023, "Poor Things"],
  ["Anatomía de una caída", 2023, "Anatomy of a Fall"], ["La sociedad de la nieve", 2023, "Society of the Snow"],
  ["Dune: Parte dos", 2024, "Dune: Part Two"], ["Del revés 2", 2024, "Inside Out 2"], ["Deadpool y Lobezno", 2024, "Deadpool & Wolverine"],
  ["Wicked", 2024], ["Robot salvaje", 2024, "The Wild Robot"], ["Furiosa: De la saga Mad Max", 2024, "Furiosa"],
  ["Gladiator II", 2024], ["Bitelchús Bitelchús", 2024, "Beetlejuice Beetlejuice"], ["La sustancia", 2024, "The Substance"]
];

export const EMOJI_CODE_MOVIES = Object.freeze(MOVIE_ROWS.map(([title, year, ...aliases]) => Object.freeze({ title, year, aliases })));

export function normalizeMovieTitle(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function resolveEmojiCodeMovieTitle(value) {
  const query = normalizeMovieTitle(value);
  if (!query) return "";
  const movie = EMOJI_CODE_MOVIES.find((item) => [item.title, ...item.aliases].some((name) => normalizeMovieTitle(name) === query));
  return movie?.title || "";
}

export function randomEmojiCodeMovieTitle(excludedTitle = "") {
  const excluded = normalizeMovieTitle(excludedTitle);
  const choices = EMOJI_CODE_MOVIES.filter((movie) => normalizeMovieTitle(movie.title) !== excluded);
  return choices[Math.floor(Math.random() * choices.length)]?.title || EMOJI_CODE_MOVIES[0].title;
}

export function findEmojiCodeMovieMatches(value, extraTitles = [], limit = 8) {
  const query = normalizeMovieTitle(value);
  if (query.length < 2) return [];
  const extras = extraTitles.map((title) => String(title || "").trim()).filter(Boolean);
  const movies = [
    ...EMOJI_CODE_MOVIES,
    ...extras.map((title) => ({ title, year: null, aliases: [], custom: true }))
  ];
  const seen = new Set();
  return movies
    .filter((movie) => {
      const key = normalizeMovieTitle(movie.title);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((movie) => ({ movie, score: Math.max(...[movie.title, ...(movie.aliases || [])].map((title) => scoreMovieTitle(title, query))) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.movie.title.localeCompare(b.movie.title, "es"))
    .slice(0, Math.max(1, Math.min(12, Number(limit) || 8)))
    .map(({ movie }) => ({ title: movie.title, year: movie.year, custom: Boolean(movie.custom) }));
}

function scoreMovieTitle(value, query) {
  const title = normalizeMovieTitle(value);
  if (title === query) return 1000;
  if (title.startsWith(query)) return 850 - Math.min(100, title.length - query.length);
  if (title.split(" ").some((word) => word.startsWith(query))) return 700;
  if (title.includes(query)) return 600;
  if (query.length < 3) return 0;
  const distance = levenshtein(title, query);
  const similarity = 1 - distance / Math.max(title.length, query.length);
  return similarity >= 0.55 ? Math.round(similarity * 500) : 0;
}

function levenshtein(left, right) {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    let diagonal = previous[0];
    previous[0] = leftIndex;
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const above = previous[rightIndex];
      previous[rightIndex] = Math.min(
        previous[rightIndex] + 1,
        previous[rightIndex - 1] + 1,
        diagonal + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1)
      );
      diagonal = above;
    }
  }
  return previous[right.length];
}
