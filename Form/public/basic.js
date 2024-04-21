/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            18-March-2024
 */


//function to make Basic section Visible:
function showBasic() {
    document.getElementById('basic-details').style.display = "block";
}
//dunction to hide Basic sectoin:
function hideBasic() {
    document.getElementById('basic-details').style.display = 'none';
}

//function to load the states data in the select option.
function loadState() {

    fetch('http://localhost:3900/getState')
        .then(resp => resp.json())
        .then(json => stateMaker(json))

    async function stateMaker(ob) {
        str = ``;
        Object.keys(ob.data).forEach(el => {
            str += `<option value="${el}">${el}</option>`
        })

        document.getElementById('handle-10').innerHTML += str;

        document.getElementById('handle-10').addEventListener('change', () => {
            state = document.getElementById('handle-10').value;
            var newstr = ``;
            ob.data[state].forEach(el => {
                newstr += `<option value="${el}">${el}</option>`
            })
            document.getElementById('handle-11').innerHTML = newstr;
        })

        await new Promise((resolve, reject) => { setTimeout(resolve, 1000) })
    }
}


//Function to validate for names (Only alphabets fields);
function checkNames(regex, handler, flag) {
    document.getElementById(`handle-${handler}`).addEventListener("focusin", (e) => {
        e.preventDefault();
        document.getElementById(`message-${handler}`).innerText = 'Only Alphabets are valid.';
    })
    document.getElementById(`handle-${handler}`).addEventListener("focusout", (e) => {
        e.preventDefault();
        if (e.target.value === undefined || e.target.value === '' || e.target.value === null) {
            document.getElementById(`message-${handler}`).innerText = 'Cannot be left empty.';
        }
        else if (!regex.test(e.target.value)) {
            document.getElementById(`message-${handler}`).innerText = 'Please fill alphabets only';
        }
        else {
            document.getElementById(`message-${handler}`).innerText = '';
        }
    })
    flag = false;
}

//Function for E-MAIL Validation:
function checkEmail(regex, handler, flag) {
    document.getElementById(`handle-${handler}`).addEventListener("focusin", (e) => {
        e.preventDefault();
        document.getElementById(`message-${handler}`).innerText = 'Enter a valid email.';
    })
    document.getElementById(`handle-${handler}`).addEventListener("focusout", (e) => {
        e.preventDefault();
        if (e.target.value === undefined || e.target.value === '' || e.target.value === null) {
            document.getElementById(`message-${handler}`).innerText = 'Cannot be left empty.';
        }
        else if (!regex.test(e.target.value)) {
            document.getElementById(`message-${handler}`).innerText = 'Not Valid E-mail address';
        }
        else {
            document.getElementById(`message-${handler}`).innerText = '';
        }
    })
    flag = false;
}

//Function to validate phone number:
function checkPhone(regex, handler, flag) {
    document.getElementById(`handle-${handler}`).addEventListener("focusin", (e) => {
        e.preventDefault();
        document.getElementById(`message-${handler}`).innerText = 'In the format +91 XXXXX XXXXX';
    })
    document.getElementById(`handle-${handler}`).addEventListener("focusout", (e) => {
        e.preventDefault();
        if (e.target.value === undefined || e.target.value === '' || e.target.value === null) {
            document.getElementById(`message-${handler}`).innerText = 'Cannot be left empty.';
        }
        else if (!regex.test(e.target.value)) {
            document.getElementById(`message-${handler}`).innerText = 'Not Valid Mobile Number';
        }
        else {
            document.getElementById(`message-${handler}`).innerText = '';
        }
    })
    flag = false;
}

//Functions to validate rest of the input[type=text] fields:
function checkInput(regex, handler, flag) {
    document.getElementById(`handle-${handler}`).addEventListener("focusin", (e) => {
        e.preventDefault();
        document.getElementById(`message-${handler}`).innerText = '';
    })
    document.getElementById(`handle-${handler}`).addEventListener("focusout", (e) => {
        e.preventDefault();
        if (e.target.value === undefined || e.target.value === '' || e.target.value === null) {
            document.getElementById(`message-${handler}`).innerText = 'Cannot be left empty.';
        }
        else if (!regex.test(e.target.value)) {
            document.getElementById(`message-${handler}`).innerText = 'Not Valid';
        }
        else {
            document.getElementById(`message-${handler}`).innerText = '';
        }
    })
    flag = false
}





//Validations for the fields in the basic details phase;
var flag;

//Regex:
let nameRegex = /^[A-Za-z ]+$/;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let phoneRegex = /^[+][91]{1,3}[ ]{1}[0-9]{1,5}[ ]{1}[0-9]{1,5}/;
let normRegex = /^[A-Za-z0-9 ,-/]+$/;
let pincodeRegex = /^[0-9]{1,6}/;

//Validation function calls:
checkNames(nameRegex, "1", flag);
checkNames(nameRegex, "2", flag);
checkNames(nameRegex, "3", flag);
checkEmail(emailRegex, "4", flag);
checkPhone(phoneRegex, "5", flag);
checkInput(normRegex, "8", flag);
checkInput(normRegex, "9", flag);
checkInput(pincodeRegex, "12", flag);



//Now validations are done, so we will preview and save the data:
document.getElementById("saveBasic").addEventListener("click", (e) => {
    flag = false;
    e.preventDefault();
    for (let i = 1; i <= 13; i++) {
        if (document.getElementById(`message-${i}`).innerText == '') {
            flag = true;
        }
        else {
            flag = false;
        }
    }
    let phone = document.getElementById("handle-5").value;
    if (phone.length == 15) {
        flag = true;
    }
    else {
        flag = false;
        document.getElementById("message-5").innerText = "Not a Valid Number"
    }
    let pin = document.getElementById("handle-12").value;
    if (pin.length == 6) {
        flag = true;
    }
    else {
        flag = false;
        document.getElementById("message-12").innerText = "Not a Valid PIN Code"
    }
    let genderFlag = false;
    const gender = document.getElementsByName("gender");
    gender.forEach(el => {
        if (el.checked){
            genderFlag = true;
        }
    })
    if(genderFlag===false){
        document.getElementById("message-6").innerText = "Gender cannot be empty"
    }
    else{
        document.getElementById("message-6").innerText = ""
    }

    flag = genderFlag;

    console.log(flag);

    if (flag == true) {
        document.getElementById("nextBasic").removeAttribute("disabled", "true");
        let parent = document.getElementById("basic-class");
        let input = parent.querySelectorAll("input");
        let text = parent.querySelectorAll("textarea");
        let select = parent.querySelectorAll("select");
        input.forEach(x => {
            x.disabled = !x.disabled;
        })
        text.forEach(el => {
            el.disabled = !el.disabled;
        })
        select.forEach(el =>{
            el.disabled = !el.disabled;
        })
        document.getElementById("nextBasic").style.backgroundColor = 'green';
    }
    else {
        document.getElementById("nextBasic").setAttribute("disabled", "true");
    }
})