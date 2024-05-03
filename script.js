let add = document.getElementById("add");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
const dButton = document.querySelector(".dark");
const lButton = document.querySelector(".light");

add.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText= inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })
})

const dark = function(){
    dButton.classList.add("hidden");
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    inputField.style.border = "1px solid white"
    inputField.style.backgroundColor = "black";
    inputField.style.color = "white"
    add.style.backgroundColor = "black";
    add.style.color = "white";
    add.style.border = "1px solid white"
}
const light = function(){
    dButton.classList.remove("hidden");
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    inputField.style.border = "1px solid black"
    inputField.style.backgroundColor = "white";
    inputField.style.color = "black"
    add.style.backgroundColor = "white";
    add.style.color = "black";
    add.style.border = "1px solid black"
}
dButton.addEventListener("click",dark);
lButton.addEventListener("click",light);