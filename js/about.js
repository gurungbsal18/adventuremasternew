let teamAdmin = document.querySelector('.team-admin');
let teamPorter = document.querySelector('.team-porter');
let teamGuide = document.querySelector('.team-guide');
let teamAdminBtn = document.querySelector('.team-admin-btn')
let teamGuideBtn = document.querySelector('.team-guide-btn')
let teamPorterBtn = document.querySelector('.team-porter-btn')

teamAdminBtn.addEventListener('click', () => {
    teamAdmin.style.display = "block";
    teamPorter.style.display = "none";
    teamGuide.style.display = "none";
    teamAdminBtn.classList.remove('btn-outline-dark')
    teamAdminBtn.classList.add('btn-dark')
    teamGuideBtn.classList.remove('btn-dark');
    teamGuideBtn.classList.add('btn-outline-dark')
    teamPorterBtn.classList.remove('btn-dark');
    teamPorterBtn.classList.add('btn-outline-dark');
})

document.querySelector('.team-guide-btn').addEventListener('click', () => {
    teamAdmin.style.display = "none";
    teamPorter.style.display = "none";
    teamGuide.style.display = "block";
    teamGuideBtn.classList.remove('btn-outline-dark')
    teamGuideBtn.classList.add('btn-dark')
    teamAdminBtn.classList.remove('btn-dark')
    teamAdminBtn.classList.add('btn-outline-dark')
    teamPorterBtn.classList.remove('btn-dark')
    teamPorterBtn.classList.add('btn-outline-dark')
})


document.querySelector('.team-porter-btn').addEventListener('click', () => {
    teamAdmin.style.display = "none";
    teamPorter.style.display = "block";
    teamGuide.style.display = "none";
    teamPorterBtn.classList.remove('btn-outline-dark')
    teamPorterBtn.classList.add('btn-dark')
    teamAdminBtn.classList.remove('btn-dark')
    teamAdminBtn.classList.add('btn-outline-dark')
    teamAdminBtn.classList.remove('btn-dark')
    teamGuideBtn.classList.remove('btn-dark')
    teamGuideBtn.classList.add('btn-outline-dark')
})