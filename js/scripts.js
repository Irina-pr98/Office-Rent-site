document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    const header = document.querySelector("header");

    //Проверяем, чтобы класс show не был добавлен автоматически
    navMenu.classList.remove("show");

    // Переключение отображения навигационного меню при нажатии на гамбургер
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });

    // Изменение фона header при прокрутке страницы
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(78, 78, 78, 0.9)";
        } else {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        
        }
    });
});