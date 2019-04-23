const fs = require('fs')

const logar = (content) => {
    fs.appendFileSync('log.txt',(new Date()).toString() + ': ' + content, 'utf8')
}
module.exports = {
    logar
}