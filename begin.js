
let dropDown = document.getElementById("drop");
let dropMenu = document.getElementById("dropMenu");
let sideMenu = document.getElementById("sideMenu");


// drop dropDown menu

dropDown.addEventListener("click",function(){
    if(dropMenu.style.display === "none"){
        dropMenu.style.display = "block";
    }
    else{
        dropMenu.style.display = "none";
    }
})


// navbar

let nav = document.getElementById("nav");
let closeNav = document.getElementById("closeNav");
let shadowContent = document.getElementById("shadowContent");

sideMenu.addEventListener("click",function(){
    nav.style.left = "0";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";
    document.body.style.height = "100%";
    shadowContent.style.cssText = "visibility: visible;opacity: 1;"
})
closeNav.addEventListener("click",function(){
    document.body.style.position = "initial";
    document.body.style.width = "initial";
    document.body.style.overflowY = "initial";
    document.body.style.height = "initial";
    nav.style.left = "-280px";
    shadowContent.style.cssText = "visibility: hidden;opacity: 0;"
})

// start increase numbers

let myGoal = document.getElementById("but");
let nums = document.querySelectorAll("h3.numero");
let begining = false;



window.onscroll = function(){
    if(window.scrollY >= myGoal.offsetTop - 300){
        
        if(!begining){
            nums.forEach((num) => AnimationNumbers(num));
        }
        begining = true;
    }
}

function AnimationNumbers(e){
        let lastCount = e.dataset.last;
        let myInterval = setInterval(() => {
            e.textContent++;
            if(e.textContent == lastCount){
                clearInterval(myInterval)
            }
    },1000 / lastCount);
}


// from ELZERO WEB SCHOOL


// this code is for slider

let imgs = document.querySelectorAll(".slider-advices .main-img");
let words = document.querySelectorAll(".slider-advices .para-word");
let btnRight = document.getElementById("right-device");
let btnLeft = document.getElementById("left-device");
let btnR = document.getElementById("right");
let btnL = document.getElementById("left");
let count = 0;
let counter = 0;



btnRight.addEventListener("click",function(){
    // word
    words[counter].classList.remove("active");
    if(counter < words.length - 1){
        counter++;
    }
    else{
        counter = 0;
    }
    words[counter].classList.add("active");

    // imgs
    imgs[count].classList.remove("active");
    if(count < imgs.length - 1){
        count++;
    }
    else{
        count = 0;
    }
    imgs[count].classList.add("active");
})

btnLeft.addEventListener("click",function(){
    // word
    words[counter].classList.remove("active");
    if(counter > 0){
        counter--;
    }
    else{
        counter = words.length - 1;
    }
    words[counter].classList.add("active");

    // imgs
    imgs[count].classList.remove("active");
    if(count > 0){
        count--;
    }
    else if(count <= 0){
        count = imgs.length - 1;
    }
    imgs[count].classList.add("active");
});

btnL.addEventListener("click",function(){
    // word
    words[counter].classList.remove("active");
    if(counter > 0){
        counter--;
    }
    else{
        counter = words.length - 1;
    }
    words[counter].classList.add("active");

    // imgs
    imgs[count].classList.remove("active");
    if(count > 0){
        count--;
    }
    else if(count <= 0){
        count = imgs.length - 1;
    }
    imgs[count].classList.add("active");
});

btnR.addEventListener("click",function(){
    // word
    words[counter].classList.remove("active");
    if(counter < words.length - 1){
        counter++;
    }
    else{
        counter = 0;
    }
    words[counter].classList.add("active");

    // imgs
    imgs[count].classList.remove("active");
    if(count < imgs.length - 1){
        count++;
    }
    else{
        count = 0;
    }
    imgs[count].classList.add("active");
})


// start faq
let qts = document.querySelectorAll(".faq .question");
let answer = document.querySelectorAll(".faq .answer");

qts.forEach(function(qs){
    qs.addEventListener("click",function(cur){
        let iconDown = qs.lastElementChild;
        iconDown.classList.toggle("fa-chevron-up")
        let theAnswer = qs.nextElementSibling;
        theAnswer.classList.toggle("active");
    })
})

// start coundown

let min = document.getElementById("min");
let sec = document.getElementById("sec");
let hour = document.getElementById("hour");
let day = document.getElementById("day");


let futurDate = new Date("June 20, 2022 08:00:00").getTime();

let countDate = setInterval(() => {
    let dateToday = new Date().getTime()
    let dateVar = futurDate - dateToday;    

    let valueDays = Math.floor(dateVar / (1000 * 60 * 60 * 24));
    let valueHours = Math.floor((dateVar % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let valueMin = Math.floor((dateVar % (1000 * 60 * 60)) / (1000 * 60));
    let valueSec = Math.floor((dateVar % (1000 * 60)) / 1000);


    min.innerHTML = valueMin < 10 ? `0${valueMin}`:valueMin;
    sec.innerHTML = valueSec < 10 ? `0${valueSec}`:valueSec;
    day.innerHTML = valueDays;
    hour.innerHTML = valueHours < 10 ? `0${valueHours}`:valueHours;

    if(dateVar < 0){
        clearInterval(countDate);
    }
},1000);

// form elzero web school, thank you a lot
