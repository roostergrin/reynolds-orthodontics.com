<template lang="pug" src="./custom-home-reviews.pug"></template>

<script>
export default {
  props: {
    content: {
      type: Object
    }
  },
  data () {
    return {
      swiperOption1: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      }
    }
  }
}
</script>
