let btnPlus = document.querySelector(".plus");
let countBox=document.querySelector(".counter");
i=1;
btnPlus.addEventListener("click",function(){
    countBox.innerText=i;
    i++;
});
let btnMinus = document.querySelector(".minus");
btnMinus.addEventListener("click",function(){
    if(i > 1) {
        i--;
        countBox.innerText=i-1;
    };
});