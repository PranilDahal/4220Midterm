const
    config = require('./config'),
    superagent = require('superagent')


const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

exports.search = (sq) => {
    param = `search/shows?q=${sq}`
    return _fetch(param)
}
exports.singleSearch = (ss) => {
    param = `singlesearch/shows?q=${ss}`
    console.log(param)
    return _fetch(param)
}
exports.peopleSearch = (ps) =>{
    param = `/search/people?q=${ps}`
    return _fetch(param)
}
exports.episodeSearch = (id) => {
    param = `shows/${id}/episodes`
    return _fetch(param)
}
exports.fetch_by_id = (id) => {
    return _fetch(`shows/${id}`)
}
exports.fetch_person = (id) => {
    return _fetch(`people/${id}`)
}
