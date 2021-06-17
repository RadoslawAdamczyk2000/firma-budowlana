const btnSold = document.getElementById('btn__sold');
const btnDuring = document.getElementById('btn__during');
const tabSold = document.getElementById('sold');
const tabDuring = document.getElementById('during');
tabSold.style.display="none";
btnSold.addEventListener('click' , ()=> {
    btnSold.classList.add('active');
    tabSold.classList.add('fade_animation');
    btnDuring.classList.remove('active');
    tabDuring.style.display="none";
    tabSold.style.display="grid";
})
btnDuring.addEventListener('click' , ()=> {
    btnDuring.classList.add('active');
    btnSold.classList.remove('active');
    tabDuring.classList.add('fade_animation');
    tabSold.style.display="none";
    tabDuring.style.display="grid";
})



