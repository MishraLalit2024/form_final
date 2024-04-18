/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     This file contains the fuctions and validations for the work experience section.
 */

function showWork(){
    document.getElementById('work-exp').style.display = "block";
}
function hideWork(){
    document.getElementById('work-exp').style.display = "none";
}


//to add the more rows
let rowWorkCount=1;
function addWorkRow(){
    if(rowWorkCount<0){ //check whether row count is negative or not
        rowWorkCount=1
    }
    else if(rowWorkCount<7){    //to restrict the number of rows 
        str =   `<div id="work-row-${rowWorkCount}">
                    <label for="company">Company Name: </label>
                        <input type="text" name="comp-${rowWorkCount}" id="handle-17-${rowWorkCount}" onfocus="activeWorkField(${rowWorkCount})">
                    <label for="w-desg">Designation: </label>
                        <input type="text" name="w-desg-${rowWorkCount}" id="handle-18-${rowWorkCount}" disabled>
                    <label for="from">From: </label>
                        <input type="date" name="from-${rowWorkCount}" id="handle-19-${rowWorkCount}" disabled>
                    <label for="to">To: </label>
                        <input type="date" name="to-${rowWorkCount}" id="handle-20-${rowWorkCount}" disabled>
                </div>`
        document.getElementById('work-row').innerHTML += str;
        rowWorkCount++;
    }
}
function remWork(){ 
    if(rowWorkCount > 1){   //to avoid user removing all the rows.
        parent = document.getElementById('work-row');
        parent.removeChild(parent.lastChild);
        rowWorkCount--;
    }
    else{
        return;
    }
}

//Function to activate all the field in the row if user types in company name;
function activeWorkField(num){
    document.getElementById(`handle-18-${num}`).removeAttribute("disabled", "true");
    document.getElementById(`handle-19-${num}`).removeAttribute("disabled", "true");
    document.getElementById(`handle-20-${num}`).removeAttribute("disabled", "true");
}