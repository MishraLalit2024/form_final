/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     this file contains the validations and function for the Reference section.
 */

function showRef(){
    document.getElementById('reference').style.display = "block";
}
function hideRef(){
    document.getElementById('reference').style.display = "none";
}


//to add the rows for more refernces:
let rowRefCount=1;
function addRefRow(){
    if(rowRefCount<0){ //to check whether row count is negative or not.
        rowRefCount=1
    }
    else if(rowRefCount<7){ //to limit the number of rows.
        str = ` <div id="ref-row-${rowRefCount}" class="flexer">
                    <div>
                        <label for="r-name">Name: </label>
                        <input type="text" name="r-name-${rowRefCount}" id="handle-29-${rowRefCount}">
                    </div>
                    <div>
                        <label for="r-phone">Phone: </label>
                        <input type="text" name="r-phone-${rowRefCount}" id="handle-30-${rowRefCount}">
                    </div>
                    <div>
                        <label for="r-rel">Relation: </label>
                        <input type="text" name="r-rel-${rowRefCount}" id="handle-31-${rowRefCount}">
                    </div>
                </div>`
        document.getElementById('ref-row').innerHTML += str;
        rowRefCount++;
    }
}
function remRef(){
    if(rowRefCount>1){  //to stop user removing all the rows:
        parent = document.getElementById('ref-row');
        parent.removeChild(parent.lastElementChild);
        rowRefCount--;
    }
    else{
        return;
    }
}