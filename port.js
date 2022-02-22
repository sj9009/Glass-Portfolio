// ..........Hamburger.............
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// ..........Active Section ..............
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },200);
    }
});

// ..........About Switch..............
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active"))
    {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// ..........Project pop up..............
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// ..........Hide Project pop up on out..............
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

$(function(){
    $(".text-slider").typed({            
        strings:["A Software Developer ","A UI / UX Designer " ,"A Product Enthusiast "],
        typeSpeed: 20,
        backSpeed: 10,
        loop: true,
    });
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

var element = document.getElementsByClassName('skill-item');
checkbox.addEventListener('change', () => {
    for (var i = 0; i < element.length; i++) {
        if(checkbox.checked==true) {
            element[i].style.backgroundColor="var(--dar-black)";
        }
        else{
            element[i].style.backgroundColor="var(--white-alpha-25)";
        }
}});

var elem = document.getElementsByClassName('btn');
checkbox.addEventListener('change', () => {
    for (var i = 0; i < elem.length; i++) {
        elem[i].classList.toggle('dark-btn');
    }
});

var elemq = document.getElementsByClassName('btn');
checkbox.addEventListener('change', () => {
    for (var i = 0; i < elemq.length; i++) {
        elemq[i].classList.toggle('dark-btn:hover');
    }
});

var image = document.getElementById('logo');
checkbox.addEventListener('change', () => {
    if (image.src.match("images/logo-light.png")) {
        image.src = "images/logo-dark.png";
    }
    else {
        image.src = "images/logo-light.png";
    }
});