const log = console.log
const chalk = require("chalk")
console.time('tempo')
for (let i = 1; i < 100; i++) {
    log(chalk.hsl(i, i, 50).bold('###Orange!'))
}
console.timeEnd('tempo')