import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css',],
})
export class HomeBannerComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    register();
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true
      },
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white;
          background-position: center;
          background-size: 40px;
          background-repeat: no-repeat;
          padding: 8px 16px;
          border-radius: 100%;
          border: 2px solid black;
          color: red;
        }

        .swiper-button-prev {
          background-image: url("/box-arrow-in-left.svg");
        }

        .swiper-button-next {
          background-image: url("/box-arrow-in-right.svg");
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: "";
        }

        .swiper-pagination-bullet{
          width: 40px;
          height: 40px;
          background-color: red;
        }
      `,
      ],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

    });
  }

  ngOnInit(): void {
  }


}
