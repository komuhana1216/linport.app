// ボタンを順番に表示
document.querySelectorAll(".btn").forEach((btn,index)=>{

btn.style.opacity=0;
btn.style.transform="translateY(25px)";

setTimeout(()=>{

btn.style.transition=".7s";

btn.style.opacity=1;
btn.style.transform="translateY(0px)";

},index*180);

});

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

const particles=[];

for(let i=0;i<90;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

vx:(Math.random()-.5)*0.4,
vy:(Math.random()-.5)*0.4,

r:Math.random()*2+1

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="#4d7fff";

ctx.fill();

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0)p.x=canvas.width;
if(p.x>canvas.width)p.x=0;

if(p.y<0)p.y=canvas.height;
if(p.y>canvas.height)p.y=0;

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=innerWidth;
canvas.height=innerHeight;

});

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".btn");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.dataset.filter;

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "flex";

            } else if (card.classList.contains(filter)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const slider = document.querySelector(".slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;
let autoSlide;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}

function prevSlide(){

    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    showSlide(current);

}

// 自動再生
function startAutoSlide(){

    autoSlide = setInterval(nextSlide, 5000);

}

// 停止
function stopAutoSlide(){

    clearInterval(autoSlide);

}

// 最初に開始
startAutoSlide();

// ホバー中は停止
slider.addEventListener("mouseenter", stopAutoSlide);

slider.addEventListener("mouseleave", startAutoSlide);

// 矢印
next.onclick = () =>{

    nextSlide();

}

prev.onclick = () =>{

    prevSlide();

}

// ドット
dots.forEach((dot,index)=>{

    dot.onclick = ()=>{

        current = index;

        showSlide(current);

    }

});
