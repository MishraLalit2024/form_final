/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 * 
 * Description:     This file contains the functions and validations for section about technologies and languages.
 */

function showTechLang(){
    document.getElementById('tech-lang').style.display = "block";
}
function hideTechLang(){
    document.getElementById('tech-lang').style.display = "none";
}

function activeLangField(num){
    document.getElementById(`handle-2${num+1}-${num}1`).removeAttribute("disabled", "true");
    document.getElementById(`handle-2${num+1}-${num}2`).removeAttribute("disabled", "true");
    document.getElementById(`handle-2${num+1}-${num}3`).removeAttribute("disabled", "true");
}

function activeTechField(num){
    document.getElementById(`handle-2${num+4}-${num}1`).removeAttribute("disabled", "true");
    document.getElementById(`handle-2${num+4}-${num}2`).removeAttribute("disabled", "true");
    document.getElementById(`handle-2${num+4}-${num}3`).removeAttribute("disabled", "true");
}