const homeIn = document.querySelector('#homeIn');
const para = document.querySelector('#para');
const photos = document.querySelector('.photosPen');
const photos2 = document.querySelector('.photosPen2');
const photos3 = document.querySelector('.photosPen3');
const photos4 = document.querySelector('.photosPen4');
const photos5 = document.querySelector('.photosPen5');
const photos6 = document.querySelector('.photosPen6');
const popup = document.querySelector('.popup');

homeIn.addEventListener('click', (e)=>{
    e.preventDefault();
})

para.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = './something.html';
})

photos.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.left = '0';
    popup.style.bottom = '0';
    popup.style.opacity = 1;
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 0;
        document.querySelector("HEADER").style.opacity = 1;
        document.querySelector("MAIN").style.opacity = 1;
        popup.style.left = '1000vh';
    }, 5000);
})
photos2.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.left = '0';
    popup.style.bottom = '0';
    popup.style.opacity = 1;
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 0;
        document.querySelector("HEADER").style.opacity = 1;
        document.querySelector("MAIN").style.opacity = 1;
        popup.style.left = '1000vh';
    }, 5000);
})
photos3.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.left = '0';
    popup.style.bottom = '0';
    popup.style.opacity = 1;
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 0;
        document.querySelector("HEADER").style.opacity = 1;
        document.querySelector("MAIN").style.opacity = 1;
        popup.style.left = '1000vh';
    }, 5000);
})
photos4.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.left = '0';
    popup.style.bottom = '0';
    popup.style.opacity = 1;
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 0;
        document.querySelector("HEADER").style.opacity = 1;
        document.querySelector("MAIN").style.opacity = 1;
        popup.style.left = '1000vh';
    }, 5000);
})
photos5.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.left = '0';
    popup.style.bottom = '0';
    popup.style.opacity = 1;
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 0;
        document.querySelector("HEADER").style.opacity = 1;
        document.querySelector("MAIN").style.opacity = 1;
        popup.style.left = '1000vh';
    }, 5000);
})
photos6.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.left = '0';
    popup.style.bottom = '0';
    popup.style.opacity = 1;
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    setTimeout(() => {
        popup.style.opacity = 0;
        document.querySelector("HEADER").style.opacity = 1;
        document.querySelector("MAIN").style.opacity = 1;
        popup.style.left = '1000vh';
    }, 5000);
})
