(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let c;c=setInterval((()=>{let e=(()=>{let e=(new Date("24 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),l=e.hours<10?"0"+e.hours:e.hours,r=e.minutes<10?"0"+e.minutes:e.minutes,s=e.seconds<10?"0"+e.seconds:e.seconds;e.timeRemaining>0?(t.textContent=l,n.textContent=r,o.textContent=s):(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(c))}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");let c,l=0;const r=()=>{l++,c=requestAnimationFrame(r),l<47&&(o.style.left=15*l+"px")};t.forEach((t=>{t.addEventListener("click",(()=>{document.body.clientWidth>768?(o.style.left="0px",e.style.display="block",c=requestAnimationFrame(r)):e.style.display="block"}))})),n.addEventListener("click",(()=>{l=0,cancelAnimationFrame(c),e.style.display="none"}))})(),(()=>{const e=document.querySelector("menu").querySelectorAll("ul>li>a"),t=document.querySelector("main a"),n=document.getElementById("service-block");t.addEventListener("click",(e=>{e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))})()})();