# NahieranJS

Proiektu hau [@erral](https://github.com/erral)-en https://github.com/erral/eitbapi-react proiektuan oinarrituta dago.

Proiektu honen helburua Nahieran-eko APIa erabiltzeko beharrezkoak diren Javascript funtzioak lortzea da.

Dokumentazioa: https://bipoza.github.io/nahieran-js/docs/


Adibideak:

````JS
import { getTVCategories, getTVCategory } from "nahieran-js";
   
getTVCategories().then(res => {
    console.log("Response: ", res);
    // Response:
    // {
    // "count": 12,
    // "timestamp": "2022-12-09 20:20:58",
    // "categories": [
    //      {
    //          "id": 12,
    //          "slug": "PELICULAS",
    //          "eu": "Zinea",
    //          "es": "Cine",
    //          "fr": null,
    //          "en": "Cinema"
    //      },
    //      {
    //          "id": 14,
    //          "slug": "ACTUALIDAD",
    //          "eu": "Albistegiak",
    //          "es": "Actualidad",
    //          "fr": null,
    //          "en": "News"
    //      },
    //      ...
    // ]}
}, err => {
    console.error("Response error: ", err);
});

getTVCategory(category_slug).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
````