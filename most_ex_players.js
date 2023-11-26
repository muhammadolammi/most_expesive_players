const {JSDOM} = require("jsdom")

async function getMostExpensivePlayers(){
    try{ 
        let res = await fetch ('https://www.transfermarkt.com/marktwertetop/wertvollstespieler')
   let htmlBody = await res.text()
    let tableClass = 'items'
   const dom = new JSDOM(htmlBody)
   let table = dom.window.document.querySelector(`table.${tableClass}`)
   
   let playerDetails = []
    // Accessing rows and cells within the table
    if (table) {
       // Iterate through each row
       table.querySelectorAll('tr').forEach((row, rowIndex) => {
           //access the iner table
           row.querySelectorAll('table.inline-table').forEach((inlineTable, inlineTableIndex) =>{
//get the image
            let img=  inlineTable.querySelector('img')
            //push image details
            
               let img_row = {}
               img_row['src'] = img.src
               img_row['name'] = img.title
               
               //lets get player position and push to the details
               inlineTable.querySelectorAll('tr').forEach((tr, trIndex)=>{
                   if(trIndex ==1){
                       img_row['position'] = tr.querySelector('td').textContent
                   }
               });
               playerDetails.push(img_row)

            
           });
       });
       
   } else {
       console.log('Table not found');
   }
   console.log(playerDetails)
   return (playerDetails)
}catch(err){
    console.log(`try/catch err ${err.message}`)
   }
    

}




module.exports = {
    getMostExpensivePlayers
}