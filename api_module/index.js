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

exports.fetch_by_id = (id) => {
    return _fetch(`shows/${id}`)
}