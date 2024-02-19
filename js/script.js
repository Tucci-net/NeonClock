// Get link/button/toggle
// Get the <body>
const lightDark = document.querySelector('a');
const body = document.querySelector('body');


// Manually add 'dark' class
lightDark.addEventListener('click',()=> {
body.classList.toggle('dark');

});