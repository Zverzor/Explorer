"use srtict"

// Бургер меню, копия от Фрилансер по жизни

const iconMenu = document.querySelector('.menu-header__icon');
if (iconMenu) {
   const menuList = document.querySelector('.menu-header__body');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuList.classList.toggle('_active');
   });

}