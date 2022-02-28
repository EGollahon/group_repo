const toggleButton = document.getElementsByClassName('toggleButton')[0];
const NavBarLinks = document.getElementsByClassName('NavBarLinks')[0];

toggleButton.addEventListener('click', ()=>{
    NavBarLinks.classList.toggle('active')
})

