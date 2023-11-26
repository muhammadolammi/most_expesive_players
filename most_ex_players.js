const {JSDOM} = require("jsdom")

async function getTableDataFromHtml(htmlBody, tableClass){
     let res = await fetch ('https://www.transfermarkt.com/marktwertetop/wertvollstespieler')
     htmlBody = await res.text()
     tableClass = 'items'
    const dom = new JSDOM(htmlBody)
    let table = dom.window.document.querySelector(`table.${tableClass}`)
    let rows =[]
    let playerDetails = []
     // Accessing rows and cells within the table
     if (table) {
        // Iterate through each row
        table.querySelectorAll('tr').forEach((row, rowIndex) => {
            //access the iner table
            row.querySelectorAll('table.inline-table').forEach((inlineTable, inlineTableIndex) =>{

             let img=  inlineTable.querySelector('img')
             
             
                let img_row = {}
                img_row['src'] = img.src
                img_row['name'] = img.title
                playerDetails.push(img_row)

             
            });
        });
    } else {
        console.log('Table not found');
    }
return (playerDetails)

}

getTableDataFromHtml()