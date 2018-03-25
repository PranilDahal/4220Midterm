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
    param = `singlesearch/shows?q=${sq}`
    return _fetch(param)
}
exports.peopleSearch = (ps) =>{
    param = `people/${ps}`
    return _fetch(param)
}
exports.episodeSearch = (id) => {
    param = `/shows/${id}/episodes`
    return _fetch(param)
}
exports.fetch_by_id = (id) => {
    return _fetch(`shows/${id}`)
}
