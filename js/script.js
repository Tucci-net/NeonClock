// Get link/button/toggle
// Get the <body>
const lightDark = document.querySelector('a');
const body = document.querySelector('body');
let tl1 = gsap.timeline();

// Manually add 'dark' class
lightDark.addEventListener('click',()=> {
body.classList.toggle('dark');
tl1.from("main", {
  opacity: 0,
  ease: "bounce.inOut",
  duration: 1.5

});
});

