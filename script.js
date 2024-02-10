let one = document.getElementById("first");
let two = document.getElementById("second");
let three = document.getElementById("third");
let four = document.getElementById("fourth");
let five = document.getElementById("fifth");



let intin = setInterval(() => {
let int = setInterval(()=> {
    num++;
    num1++;
    num2++;
    num3++;
    num4++;
    one.innerHTML = num;
    two.innerHTML = num1;
    three.innerHTML = num2;
    four.innerHTML = num3;
    five.innerHTML = num4;

    if(num >= Math.ceil(Math.random()*100+150)) {
        console.log(num);
        clearInterval(int);
    }
},20)
let num = 0;
let num1 = 155;
let num2 = 446;
let num3 = 1667;
let num4 = 2570;
},8000)


