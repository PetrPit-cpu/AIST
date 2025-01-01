document.addEventListener('DOMContentLoaded', () => {
    const listItem = document.querySelector('#social__item-enclosure'); // Находим элемент <li>

    if (listItem) { // Проверяем, что элемент существует
        // Создаем элемент для иконки
        const icon = document.createElement('img');
        icon.src = '/img/iconTG.png'; // Указываем путь к изображению
        icon.alt = 'Иконка'; // Альтернативный текст для иконки
        icon.style.width = '50px'; // Ширина иконки
        icon.style.height = '50px'; // Высота иконки
        icon.style.position = 'absolute'; // Позиционируем иконку абсолютно
        icon.style.top = '10px'; // Отступ от верхнего края
        icon.style.left = '10px'; // Отступ от левого края
        icon.style.zIndex = '9999'; // Располагаем выше остальных элементов
        icon.style.pointerEvents = 'none'; // Делаем иконку некликабельной

        // Добавляем иконку в элемент <li>
        listItem.appendChild(icon);
    } else {
        console.error('Элемент <li class="social__item-enclosure" id="social__item-enclosure"> не найден.');
    }
});