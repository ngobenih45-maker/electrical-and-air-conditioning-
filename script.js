// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    }
});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        if (menuBtn.innerHTML.includes("bars")) {
            menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}

// ===============================
// STICKY NAVBAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.style.background = "#06274b";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(0,0,0,.55)";
        header.style.boxShadow = "none";
    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
".card, .service-card, .gallery-card, .mission-card, .stat, .info-box"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".stat h2");

const speed = 100;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace(/\D/g, "");

        const data = +counter.getAttribute("data-count") || value;

        const time = data / speed;

        if (value < data) {

            counter.innerText = Math.ceil(value + time);

            setTimeout(animate, 30);

        } else {

            counter.innerText = data;

        }

    };

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(update,20);

}else{

counter.innerText = target + "+";

}

};

update();

});

// ===============================
// HERO TYPING EFFECT
// ===============================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const text = heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            heroTitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 35);

        }

    }

    typing();

}

// ===============================
// ACTIVE NAVIGATION
// ===============================

const currentLocation = location.href;

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(link => {

    if (link.href === currentLocation) {

        link.classList.add("active");

    }

});

// ===============================
// IMAGE HOVER EFFECT
// ===============================

const galleryCards = document.querySelectorAll(".gallery-card");

galleryCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// CONTACT FORM ALERT
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you for contacting Electro Tech Projects. We will get back to you shortly.");

        form.reset();

    });

}

// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPositionY = window.pageYOffset * 0.4 + "px";

    }

});
// =========================
// PARTICLE BACKGROUND
// =========================


particlesJS("particles-js",{

particles:{

number:{
value:60,
density:{
enable:true,
value_area:800
}
},

color:{
value:"#ffffff"
},

shape:{
type:"circle"
},

opacity:{
value:0.3
},

size:{
value:3,
random:true
},

line_linked:{
enable:true,
distance:150,
color:"#00bfff",
opacity:0.3,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:160
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});

}

// ===============================
// END
// ===============================
