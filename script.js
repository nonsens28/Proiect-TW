//npm run serve-json
let p = document.createElement("p");                        //create
document.body.appendChild(p);
p.innerHTML = "Thanks for reading";                         //edit
p.id = "end";
document.getElementById("end").style.marginLeft = "35vw";
//document.getElementById("end").style.marginTop = "";
document.getElementById("end").style.fontSize = "40px";
const el = document.querySelector('#end');
el.dataset.info = 'final';

document.addEventListener('keypress', (event) => {                      //folosirea datelor din noduri + keyboard event
    let name = event.key;
    let html = document.getElementsByTagName("html")[0];
    let compStyles = window.getComputedStyle(html);
    let font = parseInt(compStyles.getPropertyValue('font-size'));
    if (name === '+') {
        font++;
        font += "px";
        html.style.fontSize = font;
    }
    else if (name === '-') {
        font--;
        font += "px";
        html.style.fontSize = font;
    }
})

const elmnt = document.getElementById("img");                   //mouse event
elmnt.addEventListener('click', (event) => {
    elmnt.remove();                                             //delete
})

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let txt = JSON.parse(this.responseText).text1;
        document.getElementById("descriere").innerHTML = txt;
        console.log(txt);
    }
    xhttp.open("GET", "http://localhost:3000/resources/");                  //get
    xhttp.send();
}
window.onload = loadDoc;

var id = 0;

const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);                         //post
function logSubmit() {
    debugger;
    let val = document.getElementById("uniqueID").value;
    id = id.toString();
    let data = { [id]: val };
    id++;
    fetch("http://localhost:3000/feedback/", {

        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        if (res.status === 201) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
    })
}

const modif = document.getElementById('modificare');                            //put
modif.addEventListener('click', logM);
function logM() {
    debugger;
    let val = document.getElementById("uniqueID").value;
    id = id.toString();
    let data = { [id]: val };
    fetch("http://localhost:3000/feedback/", {

        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const del = document.getElementById('delete');
del.addEventListener('click', logD);
function logD() {
    debugger;
    id = id.toString();
    fetch("http://localhost:3000/feedback/", {
        method: 'delete',
    }).then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


