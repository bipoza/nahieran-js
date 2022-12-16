// const jsdoc = require('jsdoc');
const { exec } = require("child_process");
var path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../src');

var doc_types = ['tv', 'radio'];

doc_types.forEach(type=>{
    exec(`npx jsdoc -X ${lib}/${type}.js > src/docs/${type}.json`);
});