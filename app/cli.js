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
    .command({
        command: 'single search',
        desc: 'As opposed to the regular search endpoint, the singlesearch endpoint allows embedding additional information in the result.',
        builder: (yargs) => {
            return yargs.option('singleSearch', {
                alias: 'ss',
                describe: 'Search for show title. Details of show will be given'
            })
        },
        handler: (argv) => { app.singleSearch(argv.ss) }
    })
    .command({
        command: 'people search',
        desc: 'search for specific actors based on names',
        builder: (yargs) => {
            return yargs.option('peopleSearch', {
                alias: 'ps',
                describe: 'Search for actors. Details of actor will be given'
            })
        },
        handler: (argv) => { app.peopleSearch(argv.ps) }
    })
    /*
    .command({
        command: 'people search',
        desc: 'search for specific actors based on names',
        builder: (yargs) => {
            return yargs.option('peopleSearch', {
                alias: 'ps',
                describe: 'Search for show title. Details of show will be given'
            })
        },
        handler: (argv) => { app.peopleSearch(argv.ps) }
    })
    */
    .help()
    .argv
