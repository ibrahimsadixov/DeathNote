window.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.homeText h1');
    const h2 = document.querySelector('.homeText h2');
    const h3 = document.querySelector('.homeText h3');
  
    function adjustStickyPosition() {
      const h1Height = h1.offsetHeight;
      const h2Height = h2.offsetHeight;
      const topValue = 100 + h1Height ; 
  
      h2.style.top = topValue + 'px';
      h3.style.top = h2Height + topValue + 'px';
    }
  
    window.addEventListener('resize', adjustStickyPosition);
    adjustStickyPosition();
  });
  