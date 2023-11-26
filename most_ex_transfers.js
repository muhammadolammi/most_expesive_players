const {JSDOM} = require("jsdom")

async function mostExTransfers(){
    try{
        let res = await fetch('https://www.goal.com/en/news/100-most-expensive-football-transfers-all-time/ikr3oojohla51fh9adq3qkwpu')
        let htmlBody =await res.text()
        let tableClass = 'tableizer-table'
        const dom = new JSDOM(htmlBody)
        let playersDetails = []
        let table = dom.window.document.querySelector(`table.${tableClass}`)
        table.querySelectorAll('tr').forEach((tr, trIndex)=>{
            let trRow ={}
            tr.querySelectorAll('td').forEach((td, tdIndex)=>{
                if(tdIndex==0){
                    trRow['Position'] = td.textContent
                }
                if(tdIndex==1){
                    trRow['Player-Name'] = td.textContent
                }
                if(tdIndex==2){
                    trRow['Clubs'] = td.textContent
                }
                if(tdIndex==3){
                    trRow['Year'] = td.textContent
                }
                if(tdIndex==4){
                    trRow['Price'] = td.textContent
                }

            });
        playersDetails.push(trRow)
        });

        return playersDetails
    }catch(err){
        console.log(`try/catch err ${err.message}`)
    }

    
}

module.exports={
    mostExTransfers
}

