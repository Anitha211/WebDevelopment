let sortDirection = true;

function sortTable(column){
    let table = document.getElementById("myTable");

    let rows = Array.from(table.rows).slice(1);

    sortDirection[columnIndex] = !sortDirection[columnIndex];

    rows.sort((a,b) => {

        let x = a.cells[columnIndex].innnerText

        let y = b.cells[columnIndex].innnerText

        if(column == 1){
            x = Number(x);
            y = Number(y);
        }

        if(sortDirection)  {
            return x > y ? 1 : -1;
        }else{ 
                return x < y  ? 1 : -1;
        }

           

            
        
    });
    sortDirection = !sortDirection;

    let tbody = table.querySelector("tbody");

    rows.forEach(row => {
        tbody.appendChild(row);
    });
};