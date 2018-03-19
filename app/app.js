const
    mod = require('api_module'),
    inquirer = require('inquirer')

const searchWithParams = (sq) => {

    mod.search(sq)
        .then(results => {

            let available = []
            results.forEach(element => {
                available.push(`${element.show.name} (${element.show.id})`)
            });

            inquirer.prompt([{

                type: 'list',

                message: 'Select a show to view its details: ',

                name: 'ShowName',

                choices: available

            }])
                .then(choice => {

                    console.log(`\n${choice.ShowName}\n`)
                    let selection = choice.ShowName.split("(")[1].slice(0, -1)
                    mod.fetch_by_id(selection)
                    .then(showObject => {
                        Display(showObject)
                    })

                })

                .catch(err => console.log(err))

        })

        .catch(err => console.log(err))

}

function Display(show){
    console.log(`Name: ${show.name}`)
    console.log(`Show Type: ${show.type==null? 'Not Available' : show.type}`)
    console.log(`Channel Network: ${show.network==null ? 'Not Available' :show.network.name}`)
    console.log(`Country: ${show.network==null ? 'Not Available' :show.network.country.name}`)
    console.log(`Language : ${show.language==null ? 'Not Available' :show.language}`)
    console.log(`Genres: ${show.genres==null ? 'Not Available' :show.genres}`)
    console.log(`Current Status of the show: ${show.status==null ? 'Not Available' :show.status}`)
    console.log(`Premiered on: ${show.premiered==null ? 'Not Available' :show.premiered}`)
    console.log(`Offical Site: ${show.officialSite==null ? 'Not Available' :show.officialSite}`)
    console.log(`Ratings: ${show.rating.average==null ? 'Not Available' : show.rating.average}`)
    console.log(`Summary of the plot: ${show.summary==null ? 'Not Available' :show.summary}`)
}

module.exports = {
    searchWithParams
}