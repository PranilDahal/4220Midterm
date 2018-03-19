const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')

    .command({
        command: 'search',
        desc: ' --sq <query>: Searches for TV Shows based on given query string. Shows will be found even if your query has small typos.',
        builder: (yargs) => {
            return yargs.option('softQuery', {
                alias: 'sq',
                describe: 'Query by using show\'s name. Shows will be found even if your query has small typos.'
            })
        },
        handler: (argv) => { app.searchWithParams(argv.sq) }
    })

    .help()

    .argv