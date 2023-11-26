const{getMostExpensivePlayers} = require('./most_ex_players')
const{getBallondorWinners}= require('./balondor_winners')
const{mostExTransfers} = require('./most_ex_transfers')

async function main(){
    let mostExpensivePlayers = await getMostExpensivePlayers()
    let mostExpensiveTransferss = await mostExTransfers()
    let ballondorWinners = await getBallondorWinners()
    console.log(ballondorWinners)
}

main()