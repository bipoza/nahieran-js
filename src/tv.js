import {
  TV_API_PATH,
  TV_API_CATEGORIES,
  TV_API_CATEGORY,
  TV_API_CATEGORY_PROGRAM,
  TV_API_CATEGORY_PROGRAM_PLAYLIST,
  TV_API_CATEGORY_PROGRAM_PLAYLIST_CHAPTER,
  TV_API_PROGRAMS,
} from './constants.js';
import { fetchAPI } from './helpers/fetch.js';
import { parseImage } from './helpers/parsers.js';
import {
  build_tv_category_program_playlist_program_url,
  build_tv_category_program_playlist_url,
  build_tv_category_program_url,
  build_tv_category_url,
} from './helpers/utils.js';

const getTVCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(`${TV_API_PATH}${TV_API_CATEGORIES}`);

      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        categories: data.web_clasif.map((item) => {
          return {
            '@id': build_tv_category_url(item),
            id: item.ID_WEB_CLASIF,
            slug: item.CLASIFICACION,
            eu: item.CLASIFICACION_EU,
            es: item.CLASIFICACION_ES,
            fr: item.CLASIFICACION_FR,
            en: item.CLASIFICACION_EN,
          };
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getTVCategory = (category_slug) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(
        `${TV_API_PATH}${TV_API_CATEGORY}/${category_slug}/`,
      );
      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        program: data.web_group.map((item) => {
          return {
            '@id': build_tv_category_program_url(item),
            id: item.ID_WEB_GROUP,
            title: item.NOMBRE_GROUP,
            order: item.ORDEN,
            description: item.SHORT_DESC,
            images: item.images
              ? item.images.map((image) => parseImage(data.vod_url, image))
              : [],
          };
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getTVCategoryPrograms = (category_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(
        `${TV_API_PATH}${TV_API_CATEGORY_PROGRAM}/${category_id}/`,
      );
      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        title: data.web_group[0].NOMBRE_GROUP,
        id: data.web_group[0].ID_WEB_GROUP,
        description: data.web_group[0].SHORT_DESC,
        images: data.web_group[0].images
          ? data.web_group[0].images.map((image) =>
              parseImage(data.vod_url, image),
            )
          : [],
        playlist: data.web_group[0].web_playlist.map((item) => {
          return {
            '@id': build_tv_category_program_playlist_url(item),
            id: item.ID,
            name: item.NAME,
            order: item.ORDER,
            description: item.SHORT_DESC,
            images: item.images
              ? item.images?.map((image) => parseImage(data.vod_url, image))
              : [],
          };
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getTVCategoryProgramPlaylist = (playlist_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(
        `${TV_API_PATH}${TV_API_CATEGORY_PROGRAM_PLAYLIST}/${playlist_id}/`,
      );
      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        id: data.id,
        category_id: data.id_web_group,
        playlist_id: data.id_web_playlist,
        language: data.idioma,
        name: data.name,
        description: data.desc_playlist,
        playlist: data.web_media.map((item) => {
          return {
            '@id': build_tv_category_program_playlist_program_url(item),
            id: item.ID,
            name: item[`NAME_${item.IDIOMA}`],
            chapter_title: item[`CHAPTER_${item.IDIOMA}`],
            chapter_number: item.chapter,
            language: item.IDIOMA,
            description: item[`SHORT_DESC_${item.IDIOMA}`],
            parental_rating: item.PARENTAL_RATING,
            channel: item.LAST_BROADCST_CHANNEL,
            publication_date: item.PUB_DATE,
            thumbnail_url: item.THUMBNAIL_URL,
          };
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getTVCategoryProgramPlaylistChapter = (chapter_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(
        `${TV_API_PATH}${TV_API_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}/${chapter_id}/`,
      );
      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        id: data.id,
        category_id: data.id_web_group,
        playlist_id: data.id_web_playlist,
        language: data.idioma,
        name: data.name,
        description: data.desc_playlist,
        playlist: data.web_media.map((item) => {
          return {
            '@id': build_tv_category_program_playlist_program_url(item),
            id: item.ID,
            name: item[`NAME_${item.IDIOMA}`],
            chapter_title: item[`CHAPTER_${item.IDIOMA}`],
            chapter_number: item.chapter,
            language: item.IDIOMA,
            description: item[`SHORT_DESC_${item.IDIOMA}`],
            parental_rating: item.PARENTAL_RATING,
            channel: item.LAST_BROADCST_CHANNEL,
            publication_date: item.PUB_DATE,
            thumbnail_url: item.THUMBNAIL_URL,
            m3u8_streaming: item.HLS_SURL,
            videos: item.RENDITIONS.map((video) => {
              return {
                encoding_rate: video.ENCODING_RATE,
                height: video.FRAME_HEIGHT,
                width: video.WIDTH,
                url: video.PMD_URL,
              };
            }),
            images: item.IMAGES
              ? item.IMAGES?.map((image) => {
                  return {
                    height: image.HEIGHT,
                    width: image.WIDTH,
                    url: image.URL,
                  };
                })
              : [],
          };
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

const getTVPrograms = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchAPI(`${TV_API_PATH}${TV_API_PROGRAMS}`);
      const parsedData = {
        count: data.num,
        timestamp: data.timestamp,
        programs: data.web_group.map((item) => {
          return {
            '@id': build_tv_category_program_url(item),
            id: item.ID_WEB_GROUP,
            name: item.NOMBRE_GROUP,
            order: item.ORDEN,
            description: item.SHORT_DESC,
            images: item.images
              ? item.images?.map((image) => parseImage(data.vod_url, image))
              : [],
          };
        }),
      };
      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
};

export {
  getTVCategories,
  getTVCategory,
  getTVCategoryPrograms,
  getTVCategoryProgramPlaylist,
  getTVCategoryProgramPlaylistChapter,
  getTVPrograms,
};
