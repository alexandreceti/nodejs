const yargs = require("yargs");
const chalk = require("chalk");
const taskUtil = require("./taskUtil")
//console.log(process.argv);

yargs.version('1.2.7');

yargs.command({
    command: 'add',
    describe: 'adding new task',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        },
        description: {
            describe: 'task Description',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        const info = chalk.green.bold('Creating a new task:')
        console.log(info)
        console.log(yargs.name);
        console.log(yargs.description);
    }
}).command({
    command: 'remove',
    describe: 'remove new task',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        const info = chalk.red.bold('Remove a task:')
        console.log(info)
        console.log(yargs.name);
    }
}).command({
    command: 'list',
    describe: 'list tasks',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        console.log(yargs.name);
    }
}).command({
    command: 'find',
    describe: 'find task',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        console.log(yargs.name);
    }
})

yargs.parse();