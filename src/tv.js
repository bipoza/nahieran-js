import { TV_API_CATEGORIES, TV_API_CATEGORY, TV_API_CATEGORY_PROGRAM, TV_API_PROGRAMS } from "./contants.js";
import { fetchAPI } from "./helpers/fetch.js";
import { parseImage } from "./helpers/parsers.js"

const getTVCategories = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetchAPI(TV_API_CATEGORIES);
            const parsedData = {
                count: data.num,
                timestamp: data.timestamp,
                categories: data.web_clasif.map(item => {
                    return {
                        id: item.ID_WEB_CLASIF,
                        slug: item.CLASIFICACION,
                        eu: item.CLASIFICACION_EU,
                        es: item.CLASIFICACION_ES,
                        fr: item.CLASIFICACION_FR,
                        en: item.CLASIFICACION_EN
                    }
                })
            };
            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    })
}

const getTVCategory = (category_slug) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetchAPI(`${TV_API_CATEGORY}/${category_slug}/`);
            const parsedData = {
                count: data.num,
                timestamp: data.timestamp,
                program: data.web_group.map(item => {
                    return {
                        id: item.ID_WEB_GROUP,
                        title: item.NOMBRE_GROUP,
                        order: item.ORDEN,
                        description: item.SHORT_DESC,
                        images: item.images ? item.images.map(image => parseImage(data.vod_url, image)) : []
                    }
                })
            };
            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    })
};


const getTVCategoryPrograms = (category_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetchAPI(`${TV_API_CATEGORY_PROGRAM}/${category_id}/`);
            const parsedData = {
                count: data.num,
                timestamp: data.timestamp,
                title: data.web_group[0].NOMBRE_GROUP,
                id: data.web_group[0].ID_WEB_GROUP,
                description: data.web_group[0].SHORT_DESC,
                images: data.web_group[0].images ? data.web_group[0].images.map(image => parseImage(data.vod_url, image)) : [],
                playlist: data.web_group[0].web_playlist.map(item => {
                    return {
                        id: item.ID,
                        name: item.NAME,
                        order: item.ORDER,
                        description: item.SHORT_DESC,
                        images: item.images ? item.images?.map((image) => parseImage(data.vod_url, image)) : []
                    }
                })
            };
            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    });
};

const getTVPrograms = () =>{
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetchAPI(TV_API_PROGRAMS);
            const parsedData = {
                count: data.num,
                timestamp: data.timestamp,
                programs: data.web_group.map(item => {
                    return {
                        id: item.ID_WEB_GROUP,
                        name: item.NOMBRE_GROUP,
                        order: item.ORDEN,
                        description: item.SHORT_DESC,
                        images: item.images ? item.images?.map((image) => parseImage(data.vod_url, image)) : [],
                    }
                }), 
            };
            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    });
}

export {
    getTVCategories,
    getTVCategory,
    getTVCategoryPrograms,
    getTVPrograms
}