const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const linksContainer = document.querySelector(".navigation-links-container");
const icon = menuBtn.querySelector("i");
const faqBtn = document.getElementsByClassName("faq-btn");

menuBtn.addEventListener("click", () => {
  if (
    linksContainer.style.display === "" ||
    linksContainer.style.display === "none"
  ) {
    linksContainer.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-close");
    document.body.style.overflow = "hidden";
  } else {
    linksContainer.style.display = "none";
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-close");
    document.body.style.overflow = "auto";
  }
});

// handle change of header color 
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll >= 60){
    $('header').addClass("white");
  }else{
    $('header').removeClass("white");
  }
});

// reveal or hide faq
for(let i = 0; i < faqBtn.length; i++){
  faqBtn[i].addEventListener("click", () => {
    console.log("😤");
    let paragraph = event.target.nextElementSibling;
    console.log("😤 😓");
    
    if(paragraph.style.display === "block"){
      paragraph.style.display = "none";
    }else{
      paragraph.style.display = "block";
    }
  });
}