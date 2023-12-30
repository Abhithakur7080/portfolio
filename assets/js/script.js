// FILTER TABS
//projects and skills
const projectBtn = document.getElementById('projects')
const skillBtn = document.getElementById('skills')
const projectContent = document.getElementById('projects-content')
const skillContent = document.getElementById('skills-content')

    projectBtn.addEventListener('click', () => {
        projectContent.classList.add("filters_active")
        projectBtn.classList.add('filter-tab-active')
        skillBtn.classList.remove('filter-tab-active')
        skillContent.classList.remove("filters_active")
    })
    skillBtn.addEventListener('click', () => {
        skillContent.classList.add("filters_active")
        skillBtn.classList.add('filter-tab-active')
        projectBtn.classList.remove('filter-tab-active')
        projectContent.classList.remove("filters_active")
    })
    //certifications and educations
    const educationBtn = document.getElementById('educations')
    const certiBtn = document.getElementById('certi')
    const educationContent = document.getElementById('educations-content')
    const certiContent = document.getElementById('certi-content')
    
        educationBtn.addEventListener('click', () => {
            educationContent.classList.add("filters_active")
            educationBtn.classList.add('filter-tab-active')
            certiBtn.classList.remove('filter-tab-active')
            certiContent.classList.remove("filters_active")
        })
        certiBtn.addEventListener('click', () => {
            certiContent.classList.add("filters_active")
            certiBtn.classList.add('filter-tab-active')
            educationBtn.classList.remove('filter-tab-active')
            educationContent.classList.remove("filters_active")
        })
// CHANGE THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark_theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line';
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'ri-moon-line'?'add':'remove'](iconTheme)
}
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})