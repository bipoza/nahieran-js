export const TV_DOMAIN_PATH = 'https://mam.eitb.eus';

export const TV_API_PATH = `${TV_DOMAIN_PATH}/mam/REST/ServiceMultiweb`;

export const TV_API_CATEGORIES = '/WebClasif/MULTIWEBTV/8/1/0/';
export const TV_API_CATEGORY = '/Grouplist/Clasification/MULTIWEBTV/8';

export const TV_API_CATEGORY_PROGRAM = '/Grouplist/ByGroup/MULTIWEBTV/8';
export const TV_API_CATEGORY_PROGRAM_PLAYLIST = '/Playlist2/MULTIWEBTV';
export const TV_API_CATEGORY_PROGRAM_PLAYLIST_CHAPTER = '/Video4/MULTIWEBTV';

export const TV_API_PROGRAMS = '/Grouplist/MULTIWEBTV/8/';

export const RADIO_DOMAIN_PATH = 'https://api.eitb.eus';
export const RADIO_API_PATH = `${RADIO_DOMAIN_PATH}/api`;
export const RADIOS = [
  {
    name: 'Euskadi Irratia',
    slug: 'euskadi_irratia',
  },
  {
    name: 'Radio Euskadi',
    slug: 'radio_euskadi',
  },
  {
    name: 'Radio Vitoria',
    slug: 'radio_vitoria',
  },
  {
    name: 'Gaztea',
    slug: 'gaztea',
  },
];

export const RADIO_PROGRAMS = `${RADIO_API_PATH}/getPrograms`;
export const RADIO_PROGRAM = `${RADIO_API_PATH}/getProgramData`;
export const RADIO_PROGRAM_SEASONS = `${RADIO_API_PATH}/getSeasons`;
export const RADIO_PROGRAM_SEASON = `${RADIO_API_PATH}/getSeasonData`;
export const RADIO_PROGRAM_SEASON_CHAPTERS = `${RADIO_API_PATH}/getChapters`;
export const RADIO_PROGRAM_SEASON_CHAPTER = `${RADIO_API_PATH}/getChapterData`;

export const JS_HEADERS = new Headers({
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0',
});
