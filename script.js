// -------------------Generate Color Code---------------------------------------
const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
function generateCode(){
  let hexCode="";
for(let i=0;i<6;i++){
  let idx=Math.floor(Math.random()*colors.length);
  hexCode+=colors[idx];
}
return hexCode
}

//------------------------------ Array of Shapes----------------------------------
let shapes = [
  "triangle",
  "rhombus",
  "trapezoidal",
  "parallelogram",
  "pentagon",
  "hexagon",
  "heptagon",
  "star",
];
let i = 0;
let change_color = document.querySelector(".changeColor");
let background = document.getElementById("bg");
const change_shape = document.querySelector(".changeShape");
const shape = document.getElementById("shape");
const body = document.querySelector("body");

//---------------------Change-Color Button----------------------------
change_color.addEventListener("mousedown", () => {
  background.style.backgroundColor = '#'+generateCode();
  change_color.classList.add("button_style");
  if (i >= colors.length) i = 0;
});

change_color.addEventListener("mouseup", () => {
  change_color.classList.remove("button_style");
});

//---------------------Change-Shape Button----------------------------
let j = 0;
change_shape.addEventListener("mousedown", () => {
  shape.innerText = "";
  shape.setAttribute("class", `${shapes[j++]}`);
  change_shape.classList.add("button_style");
  if (j >= shapes.length) j = 0;
});
change_shape.addEventListener("mouseup", () => {
  change_shape.classList.remove("button_style");
});
// -----------------------Change BackGround Shape Color----------------------
let selectColor = document.getElementById("colorSelection");
selectColor.addEventListener("input", () => {
  background.style.backgroundColor = selectColor.value;
});
// -----------------------Change Shape Color----------------------
let selectShapeColor = document.getElementById("shapColorSelection");
selectShapeColor.addEventListener("input", () => {
  shape.style.backgroundColor = selectShapeColor.value;
});
// --------------------Text Input ----------------------------
let text = document.getElementById("text");
text.addEventListener("input", () => {
  shape.style.backgroundColor = "transparent";
  shape.innerText = text.value;
  shape.style.fontSize = "24px";
  shape.setAttribute("class", `shape`);
});
// ------------------Text Color Input-----------------------------------
let textColor = document.getElementById("textColor");
textColor.addEventListener("input", () => {
  shape.style.color = textColor.value;
});


// -------------------Change BackGround Linear Gradient Color--------------
let bodyColor1 = document.getElementById("body1");
let bodyColor2 = document.getElementById("body2");
bodyColor1.addEventListener("input", () => {
  body.style.background = `linear-gradient(${bodyColor1.value}, ${bodyColor2.value})`;
});
bodyColor2.addEventListener("input", () => {
  body.style.background = `linear-gradient(${bodyColor1.value}, ${bodyColor2.value})`;
});
