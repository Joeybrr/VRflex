const redSphere = document.getElementById("js--sphere--red");
const greenSphere = document.getElementById("js--sphere--green");
const blueSphere = document.getElementById("js--sphere--blue");
let i = 0;

const cursor = document.getElementById("js--cursor");

redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red")
};

greenSphere.onmouseleave = function(){
    cursor.setAttribute("color", "green")
};

blueSphere.onmouseleave = function(){
    cursor.setAttribute("color", "blue")
};

const boxes = document.getElementsByClassName("js--box");
for(let i = 0; i < boxes.length; i++){
    boxes[i].onmouseenter = function(){
        boxes[i].setAttribute("color", cursor.getAttribute("color"));
    }
}