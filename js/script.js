let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = ()=>{
    navbar.classList.remove('active');
}

// search form

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = ()=>{
    searchForm.classList.remove('active');
}






window.onscroll=()=>{
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
        
    } else {
        document.querySelector('.header').classList.remove('active');
        
    }
};

window.onload=()=>{
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
        
    }else{
        document.querySelector('.header').classList.remove('active');
        
    }
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  var swiper = new Swiper(".product-slide", {
    loop: true,
    grabCursor: true,
    cssMode: true,    
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".review-slide", {
    loop: true,
    grabCursor: true,
    cssMode: true,    
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  }); 

  var swiper = new Swiper(".blogs-slide", {
    loop: true,
    grabCursor: true,
    cssMode: true,    
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 4,
      },
    },
  }); 

  var swiper = new Swiper(".partners-slider", {
    loop: true,
    grabCursor: true,
    cssMode: true,    
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
