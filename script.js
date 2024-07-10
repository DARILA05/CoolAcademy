document.addEventListener('DOMContentLoaded', function() {
    // Изменение темы
    let themeBtn = document.getElementById('theme-btn');
    themeBtn.addEventListener('click', function() {
        if(document.body.className == 'backrooms') {
            document.body.className = 'black';
        } else {
            document.body.className = 'backrooms';
        }

        updateThemeButtonText();
    });

    // При изменении темы меняем текст для кнопки
    function updateThemeButtonText() {
        if (document.body.className == 'backrooms') {
            themeBtn.textContent = "Сменить на тёмную тему";
        } else {
            themeBtn.textContent = "Сменить на светлую тему";
        }
    };

    // Открытие каталога
    let catalogBtn = document.getElementById('btn-cal');
    let overlay = document.getElementById('overlay');
    
    // Когда нажимаем на кнопку, открываем/закрываем каталог, а также отключаем скролл
    catalogBtn.addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open-cal');
        document.querySelector('.header').classList.toggle('open-overlay');
        document.body.classList.toggle('close-scroll');
    });
    // Когда нажимаем на фон, закрываем каталог, а также включаем скролл
    overlay.addEventListener('click', function() {
        document.querySelector('.header').classList.remove('open-cal');
        document.querySelector('.header').classList.remove('open-overlay');
        document.body.classList.remove('close-scroll');
    })
})