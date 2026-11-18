function circle() {
document.getElementById("index").innerHTML =
"<div style='background:red;width:200px;height:200px;border-radius:50%'></div>";
}

function rectangle() {
document.getElementById("index").innerHTML =
"<div style='background:red;width:300px;height:150px'></div>";
}

function triangle() {
document.getElementById("index").innerHTML =
"<div style='background:red;width:200px;height:200px;clip-path:polygon(50% 0,0 100%,100% 100%)'></div>";
}