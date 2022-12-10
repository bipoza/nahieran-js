import {
  TV_API_PATH,
  TV_API_CATEGORY,
  TV_API_CATEGORY_PROGRAM,
  TV_API_CATEGORY_PROGRAM_PLAYLIST,
  TV_API_CATEGORY_PROGRAM_PLAYLIST_CHAPTER,
  RADIO_PROGRAMS,
  RADIO_PROGRAM,
  RADIO_PROGRAM_SEASON,
  RADIO_PROGRAM_SEASON_CHAPTER,
} from '../constants.js';

export const get_current_datetime = () => {
  return new Date().toISOString();
};

export const build_tv_category_url = (item) => {
  return `${TV_API_PATH}${TV_API_CATEGORY}/${item.CLASIFICACION}/`;
};

export const build_tv_category_program_url = (item) => {
  return `${TV_API_PATH}${TV_API_CATEGORY_PROGRAM}/${item.ID_WEB_GROUP}/`;
};

export const build_tv_category_program_playlist_url = (item) => {
  return `${TV_API_PATH}${TV_API_CATEGORY_PROGRAM_PLAYLIST}/${item.ID}/`;
};

export const build_tv_category_program_playlist_program_url = (item) => {
  return `${TV_API_PATH}${TV_API_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}/${item.ID}/`;
};

export const build_radio_url = (item) => {
  return `${RADIO_PROGRAMS}/${item.slug}/`;
};

export const build_radio_program_url = (item) => {
  return `${RADIO_PROGRAM}/${item.id}/`;
};

export const build_radio_program_data_url = (item) => {
  return `${RADIO_PROGRAM}/${item.id}/`;
};
export const build_radio_program_season_url = (item) => {
  return `${RADIO_PROGRAM_SEASON}/${item.id}/`;
};

export const build_radio_program_season_chapter_url = (item) => {
  return `${RADIO_PROGRAM_SEASON_CHAPTER}/${item.id}/`;
};
