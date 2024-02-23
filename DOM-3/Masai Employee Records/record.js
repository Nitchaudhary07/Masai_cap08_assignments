// fill in javascript code here

let name = document.getElementById("name");
let employee = document.getElementById("employeeID");
let department = document.getElementById("department");
let exp = document.getElementById("exp");
let mbl = document.getElementById("mbl");
let email = document.getElementById("email");

let tbody = document.querySelector("tbody");

let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name.value;
    tr.append(td1);

    let td2 = document.createElement("td");
    td2.innerText = employee.value;
    tr.append(td2);

    let td3 = document.createElement("td");
    td3.innerText = department.value;
    tr.append(td3);

    let td4 = document.createElement("td");
    td4.innerText = exp.value;
    tr.append(td4);

    let position = "";

    if(exp.value >= 5){
        position = "Senior";

    }else if(exp.value>=2 && exp.value< 5){
            position = "junior";
    }else if(exp.value<=1){
        position = "Fresher";
    }else{
        position = "Invalid"
    }

    let td7 = document.createElement("td");
    td7.innerText = position;
    tr.append(td7);


    let td5 = document.createElement("td");
    td5.innerText = email.value;
    tr.append(td5);

    let td6 = document.createElement("td");
    td6.innerText = mbl.value;
    tr.append(td6);

    // let td7 = document.createElement("td7");
    // td7.innerText = position;
    // tr.append(td7);

    let btn = document.createElement("button")
    btn.innerText = "Delete";
    tr.append(btn);

    btn.addEventListener("click" , function(){
        tr.innerHTML = "";
       
    })
    tbody.append(tr);
    
})