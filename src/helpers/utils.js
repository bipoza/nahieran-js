import {
  TV_API_PATH,
  TV_API_CATEGORIES,
  TV_API_CATEGORY,
  TV_API_CATEGORY_PROGRAM,
  TV_API_PROGRAMS,
  TV_API_CATEGORY_PROGRAM_PLAYLIST,
  TV_API_CATEGORY_PROGRAM_PLAYLIST_CHAPTER,
} from '../constants.js';

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
