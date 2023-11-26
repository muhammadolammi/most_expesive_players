
function report(page, pageLabel){
    console.log(`_____starting report on ${pageLabel}_____`)
    for (let player of page){
        console.log(`_____Reporting on ${player['Player-Name']}_____`)
        for (let key in player){
            console.log(`${key}: ${player[key]}`)
        }
    }
}



module.exports={
    report
}