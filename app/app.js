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
                        display(showObject)
                    })

                })

                .catch(err => console.log(err))

        })

        .catch(err => console.log(err))

}

const singleSearch = (ss)=>{
    mod.singleSearch(ss)
    .then(res => {
        display(res);
    })
    .catch(err => console.log(err))
}

const peopleSearch = (ps) => {
    mod.peopleSearch(ps)
    .then(res => {
            let available = []
            results.forEach(element => {
                available.push(`${element.person.name} (${element.person.id})`)
            });
        })
            inquirer.prompt([{
                type: 'list',
                message: 'Select an Actor to view their details: ',
                name: 'ActorName',
                choices: available

            }])
                .then(choice => {
                    console.log(`\n${choice.ActorName}\n`)
                    let selection = choice.ActorName.split("(")[1].slice(0, -1)
                    mod.fetch_by_id(selection)
                    .then(showObject => {
                        displayActor(showObject)
                    })
                })
                .catch(err => console.log(err))
        .catch(err => console.log(err))
}

const showSchedule = (id) =>{

}
function display(show){
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

    rl.question('Would you like to view show schedule? [Y/N]', (answer) => {
      if(answer.toLowerCase() === 'y'){
         showSchedule(show.id)
      }
      rl.close();
    });
}
function displayActor(actor){
    console.log(`Name: ${actor.name}`)
    console.log(`Gender: ${actor.gender}`)
    console.log(`Birthday: ${actor.birthday}`)
    console.log(`Deathday: ${actor.deathday}`)
}

module.exports = {
    searchWithParams,singleSearch
}
