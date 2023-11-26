const {JSDOM} = require("jsdom")

async function getBallondorWinners(){
    try{
        let res = await fetch('https://www.topendsports.com/sport/soccer/list-player-of-the-year-ballondor.htm')
        let htmlBody =await res.text()
        let tableClass = 'list'
        const dom = new JSDOM(htmlBody)
        let playersDetails = []
        let table = dom.window.document.querySelector(`table.${tableClass}`)
        table.querySelectorAll('tr').forEach((tr,trIndex)=>{
            //skip the first and second tr since they contain no useful data
            if(trIndex==0 || trIndex==1){
                return
            }
            //create an empty object to store details
            trRow = {}

            //select all td in tr and add details to trRow object
            tr.querySelectorAll('td').forEach((td,tdIndex)=>{
                if(tdIndex==0){
                  trRow['Year']=  td.textContent
                }
                if(tdIndex==1){
                    trRow['Player-Name']=  td.textContent
                }
                if(tdIndex==2){
                    
                    trRow['Country'] = td.textContent
                }
                if(tdIndex==3){
                    
                    trRow['Club'] = td.textContent
                }
            });


            //push the object to player details
            playersDetails.push(trRow)



        });
        
        return playersDetails
       
    }catch(err){
        console.log(`try/catch err ${err.message}`)
    }

    
}

module.exports={
    getBallondorWinners
}