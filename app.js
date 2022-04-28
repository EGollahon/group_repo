const toggleButton = document.getElementsByClassName('toggleButton')[0];
const NavBarLinks = document.getElementsByClassName('NavBarLinks')[0];

function handle_form_submission() {
    alert('Submitted, Thank You!');
    return false;


    toggleButton.addEventListener('click', () => {
        NavBarLinks.classList.toggle('active')
    })
}
