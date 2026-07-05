//  Q1. Student Information Card 

showList()
let save = document.getElementById("save");
save.addEventListener("click", function(e){
    let name = document.getElementById("name")
    let course = document.getElementById("course")
    let courselist = localStorage.getItem("courselist")
    if(name.value=="" || course.value=="")
    {
    alert("Please enter Name and Course");
    return false;
    }
    if (courselist == null) {
    CourseObj = [];
    } else {
    CourseObj = JSON.parse(courselist);
    }
    let myObj = {
        name : name.value,
        course : course.value
    }
    CourseObj.push(myObj);
    localStorage.setItem("courselist", JSON.stringify(CourseObj));
    showList();
})

function showList() {
    let list = localStorage.getItem("courselist");
    if (list == null) {
        CourseObj = [];
    } else {
        CourseObj = JSON.parse(list);
    }
    let html = "";
    CourseObj.forEach(function(element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 12rem;">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${element.name}</h5>
                            <p class="card-text" style="white-space: break-spaces;"> <b>Course:</b> ${element.course}</p>
                        </div>
                    </div>`;
    });
    let listElm = document.getElementById("courselist");
    if (CourseObj.length != 0) {
        listElm.innerHTML = html;
    } else {
        listElm.innerHTML = `Nothing to show! .`;
    }
}

let dlt0 = document.getElementById("dlt0")
dlt0.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.removeItem("courselist");
    showList()
})
//  Q2. Even and Odd Number Checker 

let checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click", function(e){
    e.preventDefault();
    let no = document.getElementById("no");
    let odd = document.getElementById("odd");
    let even = document.getElementById("even");

    let noValue = Number(no.value)

    even.style.backgroundColor = "";
    even.style.color = "";
    // even.disabled = true;

    odd.style.backgroundColor = "";
    odd.style.color="";
    // odd.disabled = false;
    if(noValue==""){
        alert("Please Enter a Value")
    }
    if(noValue%2==0){
        even.style.backgroundColor = "green"
        even.style.color = "white"
    }
    else{
        odd.style.backgroundColor = "green"
        odd.style.color = "white"
    }
})

// Q3. Dynamic List using Array 

let html = "";
let fruits = ['Apple', 'Mango', 'Banana', 'Jackfruit', 'Dragon Fruit'];
    fruits.forEach(function(element, index) {
        html += `
                <li>${element}</li>`;
    });
    let listElm = document.getElementById("dl");
    if (fruits.length != 0) {
        listElm.innerHTML = html;
    } 

// Q4. Background Color Changer

let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let def = document.getElementById("def")

red.addEventListener("click", function(e){
    e.preventDefault();
    document.body.style.backgroundColor="red"
})
green.addEventListener("click", function(e){
    e.preventDefault();
    document.body.style.backgroundColor="green"
})
blue.addEventListener("click", function(e){
    e.preventDefault();
    document.body.style.backgroundColor="blue"
})
def.addEventListener("click", function(e){
    document.body.style.backgroundColor=""
})

// Q5. Store and Display User Name using Local Storage
showNList();
let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function(e){
    e.preventDefault()
    let names = document.getElementById("names")

    let nameList = localStorage.getItem("nameList")
    if(names.value=="")
    {
    alert("Please enter Name ");
    return false;
    }
    if (nameList == null) {
    NameObj = [];
    } else {
    NameObj = JSON.parse(nameList);
    }
    let myObj = {
        names : names.value,
    }
    NameObj.push(myObj);
    localStorage.setItem("nameList", JSON.stringify(NameObj));
    showNList();
})

function showNList() {
    let nlist = localStorage.getItem("nameList");
    if (nlist == null) {
        NameObj = [];
    } else {
        NameObj = JSON.parse(nlist);
    }
    let html = "";
    NameObj.forEach(function(element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 12rem; display: grid">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${element.names}</h5>
                        </div>
                    </div>`;
    });
    let listElm = document.getElementById("nameList");
    if (NameObj.length != 0) {
        listElm.innerHTML = html;
    } else {
        listElm.innerHTML = `Nothing to show!.`;
    }
    names.value=""
}

let dlt = document.getElementById("dlt")
dlt.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.removeItem("nameList");
    showNList()
})