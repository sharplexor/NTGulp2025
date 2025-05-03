// Импорт плагинов
import browsersync from "browser-sync"; // Локальный сервер
import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Всплывающие уведомления

// Экспортируем объекты плагинов
export const plugins = {
   browsersync: browsersync,
   plumber: plumber,
   replace: replace,
   notify: notify,
};
