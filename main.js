const{getMostExpensivePlayers} = require('./most_ex_players')
const{getBallondorWinners}= require('./balondor_winners')
const{mostExTransfers} = require('./most_ex_transfers')
const{report}=require('./report')

async function main(){
    let funcInstruction = `     run "npm run start" with either of the following 
    > ballondorWinners
    > mostExpensiveTransfers
    > mostExpensivePlayers
    e.g npm run start ballondorWinners

    note: function is case sensitive
    `
    
    if(process.argv.length <3){
        console.log( funcInstruction)
    }
    if(process.argv.length >3){
        console.log( funcInstruction)
    }
    if(process.argv.length ==3){
    
    
    let func = process.argv[2]
    if(func=='ballondorWinners'){
        let ballondorWinners = await getBallondorWinners()
        let ballondorLabel ='All BallonDor Winners'
        report(ballondorWinners,ballondorLabel)
    }
    else if(func=='mostExpensiveTransfers'){
        let mostExpensiveTransfers = await mostExTransfers()
        let expensiveTransferLabel= 'Most Expensive Transfers'
        report(mostExpensiveTransfers,expensiveTransferLabel)
    }
    else if(func=='mostExpensivePlayers'){
        let mostExpensivePlayers = await getMostExpensivePlayers()
        let expensivePlayerLabel = 'Most Expensive Players'
        report(mostExpensivePlayers,expensivePlayerLabel)
    }else{
    console.log( funcInstruction)}
    }
    
}

main()