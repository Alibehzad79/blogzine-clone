function alertActive() {
    const alertSuggestion = document.querySelector('#alertSuggestion');
    const closeAlertSuggestion = document.querySelector('#closeAlertSuggestion');
    closeAlertSuggestion.addEventListener('click', () => {
        {
            alertSuggestion.classList.remove('active');
        }
    })

}

alertActive();

function toggleFontSize() {
    const minimize = document.querySelector('#minimize');
    const normal = document.querySelector('#normal');
    const maximize = document.querySelector('#maximize');

    minimize.addEventListener('click', () => {
        document.querySelector('*').style = 'font-size: 13px';
        minimize.classList.add('active')
        normal.classList.remove('active')
        maximize.classList.remove('active')
    })
    normal.addEventListener('click', () => {
        document.querySelector('*').style = 'font-size: 15px';
        minimize.classList.remove('active')
        normal.classList.add('active')
        maximize.classList.remove('active')
    })
    maximize.addEventListener('click', () => {
        document.querySelector('*').style = 'font-size: 18px';
        minimize.classList.remove('active')
        normal.classList.remove('active')
        maximize.classList.add('active')
    })
}

toggleFontSize();


function toggleTheme() {
    let moon = document.querySelector('#moon');
    let sun = document.querySelector('#sun');
    moon.addEventListener('click', () => {
        moon.classList.remove('active');
        sun.classList.add('active');
        document.body.classList.remove('active')

    })
    sun.addEventListener('click', () => {
        moon.classList.add('active');
        sun.classList.remove('active');
        document.body.classList.add('active')
    })
}

toggleTheme();

function toggleSearch() {
    const search = document.querySelector('#search');
    const searchBox = document.querySelector('#search-box');
    search.addEventListener('click', () => {
        searchBox.classList.toggle('active')

    })
}

toggleSearch();

function toggleOffcanvas() {
    const offcanvasMenu = document.querySelector('#offcanvasMenu');
    const offcanvasClose = document.querySelector('#offcanvasClose');
    const offcanvas = document.querySelector('#offcanvas');

    offcanvasMenu.addEventListener('click', () => {
        offcanvas.classList.toggle('active')
    })

    offcanvasClose.addEventListener('click', () => {
        if (offcanvas.classList.contains('active')){
            offcanvas.classList.remove('active')
        }
    })
}

toggleOffcanvas();