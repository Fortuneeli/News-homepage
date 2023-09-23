const menuBtn =document.querySelector('.menu')
const closebtn =document.querySelector('.close-btn')
const backdrop =document.querySelector('.backdrop')
const body=document.querySelector('body')

menuBtn.addEventListener('click', (e) =>{
    document.body.classList.add('lock');
    backdrop.style.display='block';
    backdrop.classList.add('show');
})
closebtn.addEventListener('click', (e) =>{
    document.body.classList.remove('lock');
    backdrop.style.display='none';
    backdrop.classList.remove('show');
})