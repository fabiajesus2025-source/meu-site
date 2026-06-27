/*======================================================
        PORTFÓLIO FABIA GOMES
======================================================*/

/*=========================================
            HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,5,5,.90)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,5,5,.65)";
        header.style.boxShadow = "none";

    }

});

/*=========================================
            SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(
    ".number-card,.empresa,.card,.projeto,.skills div,.sobre p"
);

function reveal() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/*=========================================
        CONTADORES
=========================================*/

const counters = document.querySelectorAll(".number-card h2");

let started = false;

function startCounters() {

    if (started) return;

    const numbers = document.querySelector(".numbers");

    if (!numbers) return;

    const top = numbers.getBoundingClientRect().top;

    if (top < window.innerHeight - 150) {

        started = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;
                    clearInterval(timer);

                }

                counter.innerText = current + "+";

            }, 25);

        });

    }

}

window.addEventListener("scroll", startCounters);

/*=========================================
            MENU ATIVO
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        EFEITO PARALLAX FOTO
=========================================*/

const photo = document.querySelector(".hexagon");

window.addEventListener("mousemove", (e) => {

    if (!photo) return;

    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;

    photo.style.transform =
        `translate(${x}px,${y}px)`;

});

/*=========================================
            BOTÃO TOPO
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topButton";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "30px";
topBtn.style.bottom = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "24px";
topBtn.style.background = "#8A2BE2";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 20px #8A2BE2";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/*=========================================
        DIGITAÇÃO
=========================================*/

const subtitle = document.querySelector(".hero h3");

if(subtitle){

const text = subtitle.innerText;

subtitle.innerHTML="";

let i=0;

function typing(){

    if(i<text.length){

        subtitle.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,45);

    }

}

typing();

}

/*=========================================
        PARTÍCULAS
=========================================*/

const canvas = document.createElement("canvas");

canvas.id="particles";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resize(){

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[];

for(let i=0;i<90;i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2,

        dx:(Math.random()-.5)*.4,

        dy:(Math.random()-.5)*.4

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fillStyle="rgba(138,43,226,.7)";

        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0)p.x=canvas.width;
        if(p.x>canvas.width)p.x=0;

        if(p.y<0)p.y=canvas.height;
        if(p.y>canvas.height)p.y=0;

    });

    requestAnimationFrame(animate);

}

animate();

canvas.style.position="fixed";
canvas.style.top="0";
canvas.style.left="0";
canvas.style.zIndex="-10";
canvas.style.pointerEvents="none";

/*=========================================
        LOADER
=========================================*/

window.onload=()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";
        document.body.style.opacity="1";

    },150);

};