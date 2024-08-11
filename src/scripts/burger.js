export const burgerOpen = () => {
  const burgerMenu = document.querySelector('[data-burger]');
  const burgerList = document.querySelector('[data-menu-burger]');
  const burgerOverlay = document.querySelector('[data-overlay]');

  if (burgerMenu.classList.contains('burger-active')) {
    burgerMenu.classList.remove('burger-active');
    burgerList.classList.remove('burger-open');
    burgerOverlay.classList.remove('overlay-visible');
    document.body.classList.remove('scroll-hidden')
  }
  document.body.addEventListener('click', (e) =>{
    
    if(e.target == burgerOverlay){
      burgerMenu.classList.remove('burger-active');
      burgerList.classList.remove('burger-open');
      document.body.classList.remove('scroll-hidden')
      burgerOverlay.classList.remove('overlay-visible');
    }
  })
  burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('burger-active');
    burgerList.classList.toggle('burger-open');
    burgerOverlay.classList.toggle('overlay-visible');
    document.body.classList.toggle('scroll-hidden')
    
  });
  
};
