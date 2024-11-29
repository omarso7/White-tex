let arrows = document.querySelector("header .arrows");
let bar = document.querySelector("header .bar");
let li = document.querySelectorAll("header li a");
arrows.onclick = function () {
    if (bar.style.height == '280px') {
        bar.style.height = '0px';
        bar.style.padding = "0px";
    }
    else {
        bar.style.height = '280px';
        bar.style.padding = "25px 10px";
    }
    li.forEach(function (ele) {
        ele.onclick = function () {
            bar.style.height = "0px";
            bar.style.padding = "0px";
        }
    })
}

let h1 = document.querySelector('.interface h1');
let h1Text = 'هنا حيث تلقى افضل الاقمشة !';
let i = 0;


let x = setInterval(function() {
    h1.textContent += h1Text[i];
    i++;
    if (i > h1Text.length-1){
        clearInterval(x);
    }
}, 60);
h1.style.fontSize = '35px';
