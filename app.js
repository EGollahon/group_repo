const toggleButton = document.getElementsByClassName('toggleButton')[0];
const NavBarLinks = document.getElementsByClassName('NavBarLinks')[0];

toggleButton.addEventListener('click', ()=>{
    NavBarLinks.classList.toggle('active')
})

function handle_form_submission() {
    alert('Submitted, Thank You!');
    return false;
}