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
          <select name="course-${rowCount}" id="handle-14-${rowCount}">
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
          <input type="button" id="rem-edu-${rowCount}" value="Remove" onclick="remEdu(${rowCount})" />
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
    }
    else {
        return;
    }
}

let flag = false;
function saveEdu(){
  let parent = document.getElementById('edu-row').children;
  for (let i = 0; i < parent.length; i++) {
    let course = document.getElementById(`handle-14-${i}`).value;
    let pyear = document.getElementById(`handle-15-${i}`).value;
    let score = document.getElementById(`handle-16-${i}`).value;
    if(course == '' || pyear == '' || score == ''){
      alert('Cannot leave any field empty if anyone field is filled.');
      flag = false;
      document.getElementById(`handle-15-${i}`).focus();
      console.log(flag);
    }
    else{
      flag = true;
      console.log(flag);
    }
  }

  
  if(flag == true){
    for (let i = 0; i < parent.length; i++) {
      document.getElementById(`handle-14-${i}`).setAttribute('disabled', true);
      document.getElementById(`handle-15-${i}`).setAttribute('disabled', true);
      document.getElementById(`handle-16-${i}`).setAttribute('disabled', true);
      document.getElementById(`rem-edu-${i}`).setAttribute('disabled', true)
    }
    document.getElementById('nextEdu').removeAttribute('disabled', 'true');
  }
}
