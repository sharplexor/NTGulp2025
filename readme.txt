///// СБОРКА GULP + WEBPACK /////


/// ОПИСАНИЕ

Сборка выполнена под разворачивание OSPanel (OpenServer: https://ospanel.io) 
Технологии PHP(HTML) + CSS(SASS) + JS
Возможность сразу локально работать с запросами базы данных (MySQL)

- Модульная сборка Gulp
- Блочная система верстки (include)
- Автообновление сервера
- Отслеживание изменений
- Контроль версий
- Минификация файлов и оптимизация
- Возможность подключения JS решений NPM-пакетами
- Автопрефиксы (последние 5 версий браузеров)

/// УСТАНОВКА И НАСТРОЙКА OSPanel

   1. Скачать OSPanel (OpenServer: https://ospanel.io)
   2. Отправить папку сборки в директорию ....OSPanel\home\
   3. Название проекта (папки) должно быть идентично названию в файле (.osp\project.ini)

               [Название папки]
               public_dir   = {base_dir}/dist

   4. Включить OpenServer, выбрать необходимые модули для проекта (версия PHP, Nginx и прочее)
   5. В новой версии OSPanel интерфейс базы данных MySQL устанавливается отдельно (https://www.phpmyadmin.net/downloads/)
   6. Кинуть базу аналогично в папку ....OSPanel\home\ создать и настроить в ней (.osp\project.ini), подключить модуль MySQL
      6.1 Содержание (.osp\project.ini):
            [BaseName]
            public_dir   = {base_dir}
      6.2 В корневом каталоге PHPMyAdmin находим файл config.sample.inc.php и переименовываем в config.inc.php
      6.3 В самом файле config.inc.php делаем следующие правки:
            - в строку $cfg['blowfish_secret'] = ''; вписываем 32-битный код (можно сгенерировать), например $cfg['blowfish_secret'] = 'Z4wvCIqPNrAJm53xt{JdGnjKgSTl1eJb';
            - в строке $cfg['Servers'][$i]['host'] = 'localhost'; меняем имя хоста на имя версии модуля MySQL, например $cfg['Servers'][$i]['host'] = 'MySQL-8.4';
            - также можно изменить значение $cfg['Servers'][$i]['AllowNoPassword'] = false; на true (для авторизации без пароля)
      После перезапуска OSPanel можешь заходить на PHPMyAdmin по стандартному логину root


   В итоге получится следующая структура проекта:
   
   /home
      //Папка проекта
         ///.osp - project.ini
      //Папка базы данных
         ///.osp - project.ini


/// СТАРТ СБОРКИ

   1. Установить свежую версию node.js (https://nodejs.org/en)
   2. Установить пакеты через терминал редактора кода

   Команда для установки всех пакетов:
      npm i gulp gulp-sass sass gulp-file-include gulp-clean browser-sync gulp-sourcemaps gulp-plumber gulp-replace gulp-notify gulp-group-css-media-queries gulp-version-number webpack-stream style-loader css-loader gulp-babel @babel/core @babel/preset-env gulp-imagemin@7 gulp-changed@4 gulp-autoprefixer gulp-csso gulp-webp gulp-webp-html gulp-webp-css --save-dev

   Команда для установки поддержки глобальной консоли
      npm install --global gulp-cli

   3. В файле (gulp/tasks/server.js) прописать в переменной "proxy:" имя папки проекта
   4. Запуск сборщика осуществляется командой: npm run dev
