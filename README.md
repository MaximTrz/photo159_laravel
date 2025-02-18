📸 Печать фото онлайн
Этот проект позволяет загружать фотографии, выбирать параметры печати и оформлять заказы онлайн.

🚀 Технологии
Front-end:
React
TypeScript
Back-end:
Laravel
🔧 Установка и запуск
1️⃣ Клонирование репозитория

git clone https://github.com/MaximTrz/photo159_laravel.git
cd photo-printing
2️⃣ Запуск Back-end (Laravel)

cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
3️⃣ Запуск Front-end (React)

cd frontend
npm install
npm start
🎯 Функционал
✔️ Загрузка фото
✔️ Выбор формата и типа бумаги
✔️ Оформление заказа