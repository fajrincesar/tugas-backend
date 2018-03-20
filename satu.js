const fs = require('fs')
const os = require('os')
var y= JSON.stringify(os.cpus())
var x=fs.writeFileSync('soal.json', y)

module.exports.id=x;
