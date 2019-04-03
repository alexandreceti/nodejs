const fs = require('fs')

//fs.writeFileSync('teste.txt', 'teste arquivo \nteste 2', 'utf8')
fs.appendFileSync('teste.txt', 'teste arquivo \n', 'utf8')
