<b> 📸 Печать фото онлайн </b> <br>
Этот проект позволяет загружать фотографии, выбирать параметры печати и оформлять заказы онлайн.
<br>
<b> 🚀 Технологии </b> <br> 
Front-end: <br>
React<br>
TypeScript<br>
Back-end:<br>
Laravel<br>
<b>🔧 Установка и запуск </b> <br>
1️⃣ Клонирование репозитория<br>

git clone https://github.com/MaximTrz/photo159_laravel.git<br>
cd photo-printing<br>
<b> 2️⃣ Запуск Back-end (Laravel) </b> <br>

cd backend<br>
composer install<br>
cp .env.example .env<br>
php artisan key:generate<br>
php artisan migrate --seed<br>
php artisan serve<br>
<b> 3️⃣ Запуск Front-end (React) </b> <br>
Код фронтенда находится в папке resources/js.<br>
cd frontend<br>
npm install<br>
npm start<br>
<b>🎯 Функционал </b> <br>
✔️ Загрузка фото<br>
✔️ Выбор формата и типа бумаги<br>
✔️ Оформление заказа<br>