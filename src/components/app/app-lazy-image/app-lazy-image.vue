<template lang='pug' src='./app-lazy-image.pug'></template>

<script>
export default {
  props: {
    src: {
      // sets a default error img
      type: String,
      default: '@/assets/error.png'
    },
    alt: {
      // only necessary if the image is more than decorative
      type: String,
      default: document.location.hostname + ' image for section.'
    }
  },
  data () {
    return {
      currentImg: null,
      compSrc: '@/assets/error.png',
      loaded: false,
      altText: this.alt,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0]
      }
    }
  },
  mounted () {
    // sets compressed image before scrolls into view
    this.setCompressed()
    // waits for parent to be loaded to avoid loading in before the page has conente and loads in early
    this.loaded = true
  },
  methods: {
    setCompressed () {
      // set to small image naming convention
      this.compSrc = this.src.split(/\.(?=[^.]+$)/).join('-compressed.')
      this.currentImg = this.compSrc
    },
    trigger ({ going, direction }) {
      if (going === 'in') {
        // once waypoint is triggered the full image load is triggered
        this.currentImg = this.src
      }
    }
  }
}
</script>
