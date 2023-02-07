/*
const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide');

let index = 0;
let timer = 0;

function autoSlider() {
    timer = setTimeout(nextSlide, 2000);

}

const activeSlide = n => {
    for (slide2 of slides) {
        slide2.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        autoSlider();
    } else {
        index++;
        activeSlide(index);
        autoSlider();
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

autoSlider();
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
*/

//main dark mod 
const theme = document.getElementById("theme");
if (localStorage.getItem('style_theme') == "white") {
    theme.href = "css/style-light.css"
} else {
    theme.href = "css/style-dark.css";
}

const switchMode = document.getElementById("swichMode");
const switchMode2 = document.getElementById("swichMode2");

switchMode.onclick = function () {
    const theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/style-dark.css") {
        theme.href = "css/style-light.css";
        localStorage.setItem('style_theme', "white");
    }
    else {
        theme.href = "css/style-dark.css";
        localStorage.setItem('style_theme', "black");
    }

}
switchMode2.onclick = function () {
    const theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/style-dark.css") {
        theme.href = "css/style-light.css"
    }
    else {
        theme.href = "css/style-dark.css";
    }
}


//burger menu
const menu = document.querySelector('.burger__menu__body')
const menuBtn = document.querySelector('.burger__menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('menu__body')) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })

    menu.querySelectorAll('.burger__menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})



//! modal windows
let popupBg = document.querySelector('#popup-win-1'); // Фон попап окна
let popup = document.querySelector('#popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.btn-call'); // Кнопки для показа окна
let closePopupButton = document.querySelector('#close-call'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});