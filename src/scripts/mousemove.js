export const mouseMoveTranform = () => {
  const shoesItem = document.querySelector('.hero__upper-image');

  window.addEventListener('mousemove', function (e) {
    if (window.innerWidth > 992) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      shoesItem.style.transform =
        'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    }
  });
};
