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
    const navbarMenuBtn = document.querySelector('#navbarMenuBtn');
    const offcanvasClose = document.querySelector('#offcanvasClose');
    const offcanvasNavbarClose = document.querySelector('#offcanvasNavbarClose');
    const offcanvas = document.querySelector('#offcanvas');
    const offcanvasNavbar = document.querySelector('#offcanvasNavbar');



    offcanvasMenu.addEventListener('click', () => {
        offcanvas.classList.toggle('active')
    })
    navbarMenuBtn.addEventListener('click', () => {
        offcanvasNavbar.classList.toggle('active')
    })

    offcanvasClose.addEventListener('click', () => {
        if (offcanvas.classList.contains('active')) {
            offcanvas.classList.remove('active')
        }
    })
    offcanvasNavbarClose.addEventListener('click', () => {
        if (offcanvasNavbar.classList.contains('active')) {
            offcanvasNavbar.classList.remove('active')
        }
    })
}

toggleOffcanvas();

function toggleTrending() {
    const next = document.querySelector('#next');
    const perv = document.querySelector('#perv');
    let trendingContent = document.querySelectorAll('.trending-content');
    let counter = 0;
    next.addEventListener('click', () => {
        counter += 1
        if (counter == trendingContent.length) {
            trendingContent[counter - 1].classList.remove('active')
            counter = 0;
            trendingContent[counter].classList.add('active')
        } else {
            trendingContent[counter - 1].classList.remove('active')
            trendingContent[counter].classList.add('active')
        }
    })
    perv.addEventListener('click', () => {
        if (counter == 0) {
            trendingContent[counter].classList.remove('active')
            counter = trendingContent.length - 1;
            trendingContent[counter].classList.add('active')
        } else {
            trendingContent[counter].classList.remove('active')
            counter -= 1;
            trendingContent[counter].classList.add('active')
        }
    })

    setInterval(() => {
        counter += 1;
        if (counter == trendingContent.length) {
            trendingContent[counter - 1].classList.remove('active')
            counter = 0
            trendingContent[counter].classList.add('active')
        } else {
            trendingContent[counter - 1].classList.remove('active')
            trendingContent[counter].classList.add('active')
        }
        if (counter >= trendingContent.length) {
            trendingContent[counter].classList.remove('active')
            counter = 0
            trendingContent[counter].classList.add('active')
        }
    }, 5000)

}

toggleTrending();

function toggleOffcanvasNavbarItem() {
    let navbarList = document.querySelectorAll('.list-item');
    navbarList.forEach(item => {
        item.querySelector('a').addEventListener('click', () => {
            let smList = document.querySelectorAll('.sm-list');
            smList.forEach(listItem => {
                if (listItem != item.querySelector('.sm-list')) {
                    listItem.classList.remove('active')
                    item.classList.remove('active')
                }
            })
            item.querySelector('.sm-list').classList.toggle('active');
        })
    })
}

toggleOffcanvasNavbarItem();

function navStiky() {
    const navbar = document.querySelector('#navbar');
    const goToTop = document.querySelector('.go-to-top');
    const goToTopOffset = 1000;
    const stiky = navbar.offsetTop;
    if (window.scrollY > stiky) {
        navbar.classList.add('stiky')
    } else {
        navbar.classList.remove('stiky')
    }

    if (window.scrollY > goToTopOffset) {
        goToTop.classList.add('active')
    } else {
        goToTop.classList.remove('active')
    }
}
navStiky();

function goToTopFunction() {
    window.scrollTo(0, 0)
}

goToTopFunction();