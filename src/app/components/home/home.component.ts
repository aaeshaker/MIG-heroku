import { Component, OnInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.mainSlider();
      this.mediaSlider();
    }, 500);

  }

  mainSlider() {

    var swiper = new Swiper(".main-slider", {
      pagination: {
        el: ".swiper-pagination",
      },
      speed: 2000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      loop: true
    });

  }

  mediaSlider() {

    var swiper = new Swiper(".media-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1025px
        1025: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });

  }


}
