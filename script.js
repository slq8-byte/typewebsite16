document.addEventListener('DOMContentLoaded', function() {
    const containers = ['ab-container', 'sizes', 'bodytext']; 

    containers.forEach(id => {
        const container = document.getElementById(id);

        if (container) {
            function changeFont() {
                if (container.className === "regular") {
                    container.className = 'bold';
                } else {
                    container.className = 'regular';
                }
            }

            container.addEventListener('click', changeFont);
            container.style.cursor = 'pointer'; 
        }
    });


    const dropdownButton = document.getElementById('dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('show'); 
        });

        window.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }
});

(function () {
  const images = [
    'images/nyimages.png',  
    'images/latimes.png',   
    'images/wp.png'         
  ];

  
  images.forEach(src => {
    const i = new Image();
    i.src = src;
  });

  const img = document.getElementById('nytimes');
  if (!img) {
    
    return;
  }

  
  
  const findIndexForSrc = (src) => images.findIndex(s => s === src);
  const initialIndex = findIndexForSrc(img.getAttribute('src')) >= 0
    ? findIndexForSrc(img.getAttribute('src'))
    : 0;

  img.dataset.cycleIndex = String(initialIndex);

  
  img.style.cursor = 'pointer';

  
  function advanceImage() {
    let idx = parseInt(img.dataset.cycleIndex || '0', 10);
    idx = (idx + 1) % images.length;
    img.dataset.cycleIndex = String(idx);
    img.src = images[idx];
  }

  
  window.changeTheImage = advanceImage;

  
  img.addEventListener('click', advanceImage);
})();