import { getRadioProgramData, getRadioPrograms, getRadioProgramSeason, getRadioProgramSeasonChapter, getRadioProgramSeasons, getRadios } from "nahieran-js";

export const RADIO_DOCS = [
    {
        title: "Get Radio list",
        description: `
~~~js
import { getRadios } from "nahieran-js";

getRadios().then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getRadios
    },
    {
        title: "Get Radio programs",
        description: 
`~~~js
import { getRadioPrograms } from "nahieran-js";

getRadioPrograms(radio_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getRadioPrograms,
        actionParam: 'euskadi_irratia'
    },
    {
        title: "Get Radio program data",
        description: 
`
~~~js
import { getRadioProgramData } from "nahieran-js";

getRadioProgramData(program_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getRadioProgramData,
        actionParam: 5451
    },
    {
        title: "Get Radio program seasons",
        description: 
`
~~~js
import { getRadioProgramSeasons } from "nahieran-js";

getRadioProgramSeasons(program_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getRadioProgramSeasons,
        actionParam: 5451
    },
    {
        title: "Get Radio program season chapters",
        description: 
`
~~~js
import { getRadioProgramSeason } from "nahieran-js";

getRadioProgramSeason(program_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getRadioProgramSeason,
        actionParam: 8912852
    },
    {
        title: "Get Radio program season chapter",
        description: 
`
~~~js
import { getRadioProgramSeasonChapter } from "nahieran-js";

getRadioProgramSeasonChapter(program_id).then(res => {
    console.log("Response: ", res);
}, err => {
    console.error("Response error: ", err);
});
~~~`,
        actionFunction: getRadioProgramSeasonChapter,
        actionParam: 9031219
    },
]