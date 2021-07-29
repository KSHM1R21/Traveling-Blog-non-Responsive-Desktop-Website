alert(
    "This is my beginer lvl project. Website is not Responsive. and image slider/carousel is made by me no jquery is used"
);

// Main-Box Variables Selection
var box = document.querySelector(".wraper");

// navigators Variable Selection
var btn1 = document.getElementById("btn1", "img-btn1");
var btn2 = document.getElementById("btn2", "img-btn2");
var btn3 = document.getElementById("btn3", "img-btn3");

var img_btn1 = document.getElementById("img-btn1");
var img_btn2 = document.getElementById("img-btn2");
var img_btn3 = document.getElementById("img-btn3");

//? Navigation__Buttons

btn1.onclick = function () {
    box.style.transform = "translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
};

btn2.onclick = function () {
    box.style.transform = "translateX(-100%)";
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
};

btn3.onclick = function () {
    box.style.transform = "translateX(-200%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
};

//? Img_Navigation_Buttons

img_btn1.onclick = function () {
    box.style.transform = "translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
};

img_btn2.onclick = function () {
    box.style.transform = "translateX(-100%)";
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
};

img_btn3.onclick = function () {
    box.style.transform = "translateX(-200%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
};
