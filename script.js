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

// カードを少し動かす
document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/50;
const y=(window.innerHeight/2-e.clientY)/50;

document.querySelector(".container").style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});
