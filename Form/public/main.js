let form = document.getElementById("form")

document.getElementById('submit').addEventListener("click", (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const fetchedData = Object.fromEntries(formData.entries())
    console.log(fetchedData);

    fetch("http://localhost:3300/postData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(fetchedData)
    })
    .then(resp => {
        if(!resp.ok){
            throw new Error(`An error occured: ${resp.statusText}`);
        }
        console.log(resp)
    })
    .catch(error => {
        console.log(error)
    });
})