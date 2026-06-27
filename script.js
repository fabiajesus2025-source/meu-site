/* =====================================================
   FABIA GOMES | SCRIPT PREMIUM
===================================================== */

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-mobile");
const themeBtn = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle i");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section[id]");
const typingText = document.querySelector(".typing-text");

/* HEADER AO ROLAR */
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.boxShadow = "0 20px 60px rgba(0,0,0,.45)";
  } else {
    header.style.boxShadow = "0 20px 60px rgba(0,0,0,.28)";
  }
});

/* MENU MOBILE */
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

/* MODO CLARO / ESCURO */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

/* MENU ATIVO */
function activeMenu() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeMenu);

/* EFEITO DIGITAÇÃO */
const phrases = [
  "Desenvolvedora Python",
  "Inteligência Artificial",
  "Ciência de Dados",
  "SQL | Power BI | Cloud",
  "Automação de Processos"
];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentPhrase = phrases[phraseIndex];

  if (!deleting) {
    typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(typeEffect, 1400);
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 75);
}

typeEffect();

/* REVEAL AO SCROLL */
const revealElements = document.querySelectorAll(
  ".number-card, .sobre-text, .sobre-card, .empresa, .skill, .card, .projeto, .contato p, .social a"
);

revealElements.forEach(el => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  const trigger = window.innerHeight * 0.86;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* CONTADORES */
const counters = document.querySelectorAll(".number-card h2");
let counterStarted = false;

function animateCounters() {
  if (counterStarted || counters.length === 0) return;

  const numbersSection = document.querySelector(".numbers");
  const top = numbersSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 120) {
    counterStarted = true;

    counters.forEach(counter => {
      const original = counter.textContent.trim();
      const target = parseInt(original);
      const suffix = original.includes("%") ? "%" : "+";

      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 70));

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        counter.textContent = current + suffix;
      }, 24);
    });
  }
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);

/* LUZ ACOMPANHANDO O MOUSE */
const mouseLight = document.createElement("div");
mouseLight.classList.add("mouse-light");
document.body.appendChild(mouseLight);

window.addEventListener("mousemove", e => {
  mouseLight.style.left = `${e.clientX}px`;
  mouseLight.style.top = `${e.clientY}px`;
});

/* EFEITO 3D NOS PROJETOS */
const projects = document.querySelectorAll(".projeto");

projects.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `translateY(-14px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  });
});

/* FOTO COM MOVIMENTO SUAVE */
const photo = document.querySelector(".hexagon");

window.addEventListener("mousemove", e => {
  if (!photo) return;

  const x = (window.innerWidth / 2 - e.clientX) / 90;
  const y = (window.innerHeight / 2 - e.clientY) / 90;

  photo.style.transform = `translate(${x}px, ${y}px)`;
});

/* BOTÃO VOLTAR AO TOPO */
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.classList.add("top-button");
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.left = "26px";
topButton.style.bottom = "28px";
topButton.style.width = "56px";
topButton.style.height = "56px";
topButton.style.borderRadius = "50%";
topButton.style.border = "1px solid rgba(255,255,255,.15)";
topButton.style.background = "linear-gradient(135deg, #8a2be2, #39ff14)";
topButton.style.color = "#050505";
topButton.style.fontSize = "26px";
topButton.style.fontWeight = "800";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "998";
topButton.style.boxShadow = "0 0 28px rgba(138,43,226,.45)";
topButton.style.transition = ".35s";

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 500 ? "block" : "none";
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* FECHAR MENU AO CLICAR FORA */
document.addEventListener("click", e => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  }
});