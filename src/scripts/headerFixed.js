
export const headerCalcHeight = () => {
    const headerItem = document.querySelector('.header')
    const windowWidth = window.innerWidth;
    const headerFixedItem = document.querySelector('.header__logo')
    const headerHeight = headerItem.offsetHeight;
    const pageScrollHeight = window.scrollY;

   window.addEventListener('onscroll', function(){
    if (windowWidth <= 992 && pageScrollHeight > 60){
        console.log(pageScrollHeight);
        headerFixedItem.classList.add('header__active')
    }
   })
       

}