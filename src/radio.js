import {
  RADIOS,
  RADIO_PROGRAMS,
  RADIO_PROGRAM,
  RADIO_PROGRAM_SEASONS,
  RADIO_PROGRAM_SEASON_CHAPTERS,
  RADIO_PROGRAM_SEASON_CHAPTER,
} from './constants.js';
import { get_current_datetime } from './helpers/utils.js';
import { fetchAPI } from './helpers/fetch.js';

const getRadios = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const parsedData = {
        count: RADIOS.length,
        timestamp: get_current_datetime(),
        radios: RADIOS.map((item) => {
          return item;
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getRadioPrograms = (radio_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(`${RADIO_PROGRAMS}/${radio_id}/`);

      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        programs: data.map((item) => {
          return item;
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getRadioProgramData = (program_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(`${RADIO_PROGRAM}/${program_id}/`);

      const parsedData = {
        count: 1,
        timestamp: get_current_datetime(),
        data: {
          ...data,
          seasons: await getRadioProgramSeasons(program_id).then(
            (season_data) => {
              return season_data;
            },
          ),
        },
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getRadioProgramSeasons = (program_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(`${RADIO_PROGRAM_SEASONS}/${program_id}/`);

      const parsedData = {
        count: data.length,
        timestamp: get_current_datetime(),
        seasons: data.map((item) => {
          return item;
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getRadioProgramSeason = (season_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(
        `${RADIO_PROGRAM_SEASON_CHAPTERS}/${season_id}/`,
      );
      const parsedData = {
        count: data.length,
        timestamp: get_current_datetime(),
        chapters: data.map((item) => {
          return item;
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getRadioProgramSeasonChapter = (chapter_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(
        `${RADIO_PROGRAM_SEASON_CHAPTER}/${chapter_id}/`,
      );
      const parsedData = {
        count: data.length,
        timestamp: get_current_datetime(),
        ...data,
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

export {
  getRadios,
  getRadioPrograms,
  getRadioProgramData,
  getRadioProgramSeasons,
  getRadioProgramSeason,
  getRadioProgramSeasonChapter,
};
