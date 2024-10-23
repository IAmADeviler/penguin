const paraIn = document.querySelector('#paraIn');
const home = document.querySelector('#home');

paraIn.addEventListener('click', (e)=>{
    e.preventDefault();
})

home.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = './index.html'
})