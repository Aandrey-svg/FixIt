// Калькулятор стоимости ремонта
document.getElementById('calculate-btn').addEventListener('click', function() {
    const device = document.getElementById('device').value;
    const problem = document.getElementById('problem').value;
    
    // Цены для демо
    const prices = {
        phone: {
            screen: 3500,
            battery: 2500,
            port: 1500,
            water: 3000
        },
        laptop: {
            screen: 5500,
            battery: 4000,
            port: 2500,
            water: 4500
        },
        tablet: {
            screen: 4500,
            battery: 3000,
            port: 2000,
            water: 3500
        }
    };
    
    // Получаем цену
    const price = prices[device][problem];
    const minPrice = Math.round(price * 0.8);
    const maxPrice = Math.round(price * 1.2);
    
    // Форматируем цену
    const formattedPrice = `${minPrice.toLocaleString('ru-RU')} - ${maxPrice.toLocaleString('ru-RU')} ₽`;
    
    // Отображаем результат
    document.getElementById('calculator-result').innerHTML = `
        <h3>Примерная стоимость</h3>
        <div class="price">${formattedPrice}</div>
        <p>Точную стоимость назовет мастер после диагностики</p>
        <small style="color: #EF4444; display: block; margin-top: 10px;">*Демонстрационные цены</small>
    `;
});

// Обработка формы
document.getElementById('repair-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button');
    const originalText = submitButton.textContent;
    
    // Показываем анимацию отправки
    submitButton.textContent = 'Отправка...';
    submitButton.disabled = true;
    
    // Имитация отправки
    setTimeout(() => {
        // Показываем сообщение
        alert('Демо-режим: в реальном проекте данные были бы отправлены на сервер.\n\nСпасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
        
        // Восстанавливаем кнопку
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Очищаем форму
        this.reset();
    }, 1500);
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});