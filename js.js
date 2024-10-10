// Cache DOM elements
const showMenuBtn = document.querySelector(".btn_show_menu");

const mainMenu = document.querySelector(".main-menu");

const photo = document.getElementById("Photo");

const clicksBtn = document.querySelector("#clicks");

const box = document.querySelector(".box_ms");

 
const box2 = document.querySelector("#box2");

const btn = document.querySelector("#btn-box2");

const layer = document.querySelector(".main__container");

// Add event listener to show menu button

showMenuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  const isclose = showMenuBtn.getAttribute("data-is-open") === "false";
  mainMenu.style.display = isclose ? 'block' : 'none';
  showMenuBtn.setAttribute("data-is-open", isclose ? "true" : "false");
}
// Add event listeners to photo

//                    filter of blur picture

// photo.addEventListener("mouseenter", () => {
//   photo.style.filter = "blur(0.27rem)";
// });

// photo.addEventListener("mouseleave", () => {
//   photo.style.filter = "none";
// });

// Efact of movment of photo
layer.addEventListener("mousemove", function(e) {
  const ivalueX = e.pageX * -1 / 30;
  const ivalueY = e.pageY * -1 / 30;
  const cvalueX = e.pageX * -1 / 40;
  const cvalueY = e.pageY * -1 / 60;
  
  // Combine the two transform styles into one
  photo.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0) translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
  });
//  after of done page added

photo.addEventListener("contextmenu", (e) => {
  e.preventDefault();
})

// Add event listener to clicks button
clicksBtn.addEventListener("click", toggleBox);
function toggleBox() {
  const isClicked = box.getAttribute("click") === "true";

  box.classList.remove("box_ms", !isClicked);
  box.classList.toggle("show", !isClicked);
  box.classList.toggle("hide", isClicked);
  box.setAttribute("click", isClicked ? "false" : "true");
  box.style.webkitBackdropFilter = isClicked ? "" : "2rem";

}

box.addEventListener("mousemove",function(e){
  const ivalueX = e.pageX * -1 / 30;
  const ivalueY = e.pageY * -1 / 30;
  const cvalueX = e.pageX * -1 / 40;
  const cvalueY = e.pageY * -1 / 60;
  box.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0) translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
})

box2.addEventListener("mousemove",function(e){
  const ivalueX = e.pageX * -1 / 30;
  const ivalueY = e.pageY * -1 / 30;
  const cvalueX = e.pageX * -1 / 40;
  const cvalueY = e.pageY * -1 / 60;
  box2.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0) translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
})


let timerid =null
btn.addEventListener("click", toggleBox2);

function toggleBox2() {

  const isClicked = box2.getAttribute("click") === "true";

  box2.classList.remove("box_ms", !isClicked);
  box2.classList.toggle("show", !isClicked);
  box2.classList.toggle("hide", isClicked);
  box2.setAttribute("click", isClicked ? "false" : "true");
  box2.style.webkitBackdropFilter = isClicked ? "" : "2rem";

}

window.setTimeout(function(){
  document.querySelector('.skill-progress').addClass("go");
}, 1000);

