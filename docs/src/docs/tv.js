const { getTVPrograms, getTVCategories, getTVCategory, getTVCategoryPrograms, getTVCategoryProgramPlaylist, getTVCategoryProgramPlaylistChapter } = require("nahieran-js");



export const TV_DOCS = [
    {
        title: "Get TV program list",
        description: `
~~~js
import { getTVPrograms } from "nahieran-js";

getTVPrograms().then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getTVPrograms
    },
    {
        title: "Get TV categories",
        description: `
~~~js
import { getTVCategories } from "nahieran-js";

getTVCategories().then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getTVCategories
    },
    {
        title: "Get TV category",
        description: `
~~~js
import { getTVCategory } from "nahieran-js";

getTVCategory(category_slug).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getTVCategory,
        actionParam: 'PELICULAS'
    },
    {
        title: "Get TV category programs",
        description: `
~~~js
import { getTVCategoryPrograms } from "nahieran-js";

getTVCategoryPrograms(category_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getTVCategoryPrograms,
        actionParam: 5552
    },
    {
        title: "Get TV category program playlist",
        description: `
~~~js
import { getTVCategoryProgramPlaylist } from "nahieran-js";

getTVCategoryProgramPlaylist(playlist_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getTVCategoryProgramPlaylist,
        actionParam: 8493
    },
    {
        title: "Get TV category program playlist chapter",
        description: `
~~~js
import { getTVCategoryProgramPlaylistChapter } from "nahieran-js";

getTVCategoryProgramPlaylistChapter(cahpter_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getTVCategoryProgramPlaylistChapter,
        actionParam: 174848
    }
]