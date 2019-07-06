////// Previous Code with core Javascript

// setTimeout(start, 5000);

// var i = 1;
// var num = document.getElementsByClassName("counter");

// function start() {
//     setInterval(increase, 1000);
// }
// function increase() {
//     if(i < 100) {
//         i++;
//         num.innerText = i;
//     }
// }

////// New Code with JQuery
var i = 0;
setInterval(() => {
    console.log(i);
    i++;
    $(".counter").text(i);
}, 1000);