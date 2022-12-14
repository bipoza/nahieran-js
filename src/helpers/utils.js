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
