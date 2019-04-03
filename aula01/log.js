const fs = require('fs')

const logar = (content) => {
    fs.appendFileSync('log.txt', content, 'utf8')
}
module.exports = {
    logar
}