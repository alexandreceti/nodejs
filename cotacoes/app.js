const yargs = require("yargs");
const util = require('./util/contacaoUtil')
//console.log(process.argv);

yargs.version('1.2.7');

yargs.command({
    command: 'cotacao',
    describe: 'pesquisa cotação',
    builder: {
        ativo: {
            describe: 'codigo do ativo name',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (yargs){
        console.log(yargs)
        util.find(yargs.ativo);
        
    },
})

yargs.parse();