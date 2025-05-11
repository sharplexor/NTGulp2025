<div class="start-block-1 container">
   <h4>Настройки проекта:</h4>
   <p class="p-title">Файл scss / helpers // functions (функции)</p>
   <ul>
      <li>$maxViewportWidth: 1600; - <span>максимальная ширина рабочего контейнера</span></li>
      <li>$minViewportWidth: 360; - <span>минимальная ширина рабочего контейнера</span></li>
   </ul>
   <p class="p-title">Файл scss / helpers // media (медиа-запросы)</p>
   <ul>
      <li>$laptop: 1440.98; - <span>медиа ноутбук</span></li>
      <li>$tablet: 1023.98; - <span>медиа планшет</span></li>
      <li>$mobile: 767.98; - <span>медиа мобильный</span></li>
      <li>$mobile-s: 480.98; - <span>медиа мобильный минимальный</span></li>
   </ul>
   <p class="p-title">Файл scss / config // variables <span>(переменные)</span></p>
   <ul>
      <li>Настраиваем перечень необходимых переменных <span>(внутри как пример миксин медиа-запроса изменения ширины контейнера под ноутбук)</span></li>
   </ul>
   <p class="p-title">Файл scss / config // globals</p>
   <ul>
      <li>Настройка тегов проекта <span>(адаптация)</span></li>
   </ul>
   <p class="p-title">Файл scss / config // utils (универсальные классы)</p>
   <ul>
      <li>Настройка подборки универсальных классов <span>(при использовании переменных)</span></li>
   </ul>
</div>
<style>
   .p-title {
      font-weight: 700;
   }

   li span {
      font-style: italic;
      color: var(--color-grey);
   }
</style>