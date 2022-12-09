import { TV_API_CATEGORIES, TV_API_CATEGORY } from "./contants.js"
import { fetchAPI } from "./helpers/fetch.js"

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
            console.log("Get TV category: ", data)
            const parsedData = {
                count: data.num,
                timestamp: data.timestamp,
                program: data.web_group.map(item => {
                    return {
                        id: item.ID_WEB_GROUP,
                        title: item.NOMBRE_GROUP,
                        order: item.ORDEN,
                        description: item.SHORT_DESC,
                        images: item.images.map(image => {
                            return {
                                height: image.HEIGHT,
                                width: image.WIDTH,
                                order: image.ORDEN,
                                url: data.vod_url + image.URL
                            }
                        })
                    }
                })
            };
            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    })
}

export {
    getTVCategories,
    getTVCategory
}