burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click',()=>
{rightNav.classList.toggle('v-class-resp');
navList.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp'); })
document.querySelector('#follow').addEventListener(
    'click',()=>
    {window.open("https://instagram.com/baibhav._.creates?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",'_blank');}
);
document.querySelector('#connect').addEventListener(
    'click',()=>
    {window.open("https://in.linkedin.com/in/baibhab-nayak-151177283",'_blank');}
);