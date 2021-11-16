
const { writeFile } = require('fs')
const {join} = require("path");

const test = (result) => {
    const p = join(__dirname,'./result.json')
    writeFile(p, JSON.stringify(result), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    return result
}
module.exports = test