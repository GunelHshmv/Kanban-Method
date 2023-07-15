const enterItem = document.getElementById("enterId");
const addBtn = document.getElementById("addBtn");
const firstDiv = document.getElementById("firstDiv");
const task = document.querySelectorAll("task");
const divs = document.querySelectorAll(".divs");
const doneDiv = document.getElementById("doneDiv");
const h3 = document.getElementById("doneId");
const todo = document.getElementById("todo");
const fInnerDiv = document.getElementById("fInnerDiv");
const secondDiv = document.getElementById("secondDiv");
const fourthDiv = document.getElementById("fourthDiv");
const threedDiv = document.getElementById("threedDiv");
const enterId = document.getElementById("enterId");
const mainDiv = document.getElementById("mainDiv");
const allDivs = document.getElementById("allDivs");
const moduleDiv = document.getElementById("moduleDiv");
const addDiv = document.getElementById("addDiv");
const desInp = document.getElementById("desInp");
const titleInp = document.getElementById("titleInp");
const userInp = document.getElementById("userInp");
const desInp2 = document.getElementById("desInp2");
const titleInp2 = document.getElementById("titleInp2");
const userInp2 = document.getElementById("userInp2");
const photoInp2 = document.createElement("photoInp2");
const photoInp = document.getElementById("photoInp");
const con = document.getElementById("con");
const backBtn = document.getElementById("backBtn");
let dataArr = [];
let parr = [];
addBtn.addEventListener("click", saveTask);
function drag(ev) {
  if (ev.target.parentElement.id != "threedDiv") {
    ev.dataTransfer.setData("text", ev.target.id);
  } else {
    alert("You can not come back");
  }
}
function drop(ev) {
  if (ev.target.id == "threedDiv") {
    if (confirm("Are you sure ?") == true) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    } else {
      return;
    }
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  count();
}
function allowDrop(ev) {
  ev.preventDefault();
}
function saveTask() {
  var taskName = enterItem.value;
  if (true) {
    fInnerDiv.innerHTML += `
    <p class="mt-4 bg-success px-3 mx-2 x-type border bg-light border border-success rounded" id="${taskName
      .toLowerCase()
      .split(" ")
      .join("")}" draggable="true" ondragstart="drag(event)">
        <span><i>${taskName}</i></span>
    </p>
    `;
    var ids = taskName;
    var x = document.querySelectorAll(".x-type");
    x.forEach((item) => {
      item.addEventListener("click", function (ev) {
        console.log("ok");
        allDivs.classList.toggle("d-none");
        mainDiv.classList.toggle("d-none");
        createArr();
      });
    });
    moduleDiv.classList.add("d-none");
    allDivs.classList.remove("d-none");
  } else {
    alert("You fill in all the blanks !!! ");
  }
  enterItem.value = "";
  countDiv.innerHTML = `Count of Todo: ${fInnerDiv.children.length}`;
}
let countDiv = document.createElement("div");
countDiv.className = "pt-2  d-flex mt-2 justify-content-end fst-italic px-4";
firstDiv.insertBefore(countDiv, firstDiv.children[1]);
let sCountDiv = document.createElement("div");
sCountDiv.className = " d-flex mt-2  justify-content-end fst-italic px-4";
secondDiv.appendChild(sCountDiv);
let fCountDiv = document.createElement("div");
fCountDiv.className = " d-flex mt-2 justify-content-end fst-italic px-4";
fourthDiv.appendChild(fCountDiv);
console.log(fourthDiv.childNodes[1]);
let tCountDiv = document.createElement("div");
tCountDiv.className = " d-flex mt-2 justify-content-end fst-italic px-4";
threedDiv.appendChild(tCountDiv);
function count() {
  countDiv.innerHTML = `Count of Todo: ${fInnerDiv.children.length}`;
  sCountDiv.innerHTML = `Count of Progress: ${secondDiv.children.length - 2}`;
  fCountDiv.innerHTML = `Count of InReview: ${fourthDiv.children.length - 2}`;
  tCountDiv.innerHTML = `Count of Doned: ${threedDiv.children.length - 2}`;
}
let large = [];
large.push(dataArr);
function createArr() {
  dataArr.push(desInp.value, titleInp.value, userInp.value, photoInp.value);
  console.log(dataArr);
  desInp2.value = dataArr[0];
  titleInp2.value = dataArr[1];
  userInp2.value = dataArr[2];
  photoInp2.value = dataArr[3];
}
