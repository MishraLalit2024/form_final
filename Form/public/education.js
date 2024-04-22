/**
 * Developer Name:  Lalit Mishra
 * Devloper ID:     24DEV018
 * Date:            18-March-2024
 * 
 * Description:     this file contains functions and validations for education section.
 */


function showEdu() {
    document.getElementById('education').style.display = "block";
}
function hideEdu() {
    document.getElementById('education').style.display = "none";
}


//Function to add the rows in the education fields:
let rowCount = 1;
function addEduRow() {
    if (rowCount < 0) {     //To verify whether the rowCount is negative or not.
        rowCount = 1
    }
    else if (rowCount < 7) {//To limit the number of rows
        str = `<div id="edu-row-${rowCount}" class="flexer">
        <div>
          Course:
          <select name="course-${rowCount}" id="handle-14-${rowCount}" onchange="activeField(${rowCount})">
            <option value="ssc">SSC</option>
            <option value="hsc">HSC</option>
            <option value="dip">Diploma</option>
            <option value="bac">Bachelor</option>
            <option value="mas">Master</option>
            <option value="doc">Doctorate</option>
          </select>
        </div>
        <div class="flexer">
          <input
          class="edu-spy"
            type="text"
            name="pyear-${rowCount}"
            id="handle-15-${rowCount}"
            placeholder="Passing Year"
          />
          <input
          class="edu-spy"
            type="text"
            name="score-${rowCount}"
            id="handle-16-${rowCount}"
            placeholder="Score"
          />
          </div>
          <div class="edu-inputs">
          <input type="button" value="Remove" onclick="remEdu(${rowCount})" />
        </div>`
        document.getElementById('edu-row').innerHTML += str;
        rowCount++;
    }
}

//Function to remove the rows from the education fields:
function remEdu(data) {
    if (rowCount > 1) {   //to stop user from deleting all the rows
        parent = document.getElementById(`edu-row-${data}`);
        parent.remove();
        rowCount--;
    }
    else {
        return;
    }
}


//to active all the fields on change of option:
function activeField(num) {
    document.getElementById(`handle-15-${num}`).removeAttribute("disabled", "true");
    document.getElementById(`handle-16-${num}`).removeAttribute("disabled", "true");
}