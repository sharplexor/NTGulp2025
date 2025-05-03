// Импорт плагинов
import browsersync from "browser-sync"; // Локальный сервер
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Всплывающие уведомления

// Экспортируем объекты плагинов
export const plugins = {
   browsersync: browsersync,
   plumber: plumber,
   notify: notify,
};
