<template lang="pug" src="./custom-about-office.pug"></template>

<script>
export default {
  data () {
    return {
      active: 0,
      width: false,
      current: 0,
      windowWidth: window.innerWidth
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  async mounted () {
    this.$nextTick(this.setWidth())
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    setWidth () {
      this.width = this.$refs.thumb[0].offsetWidth
    },
    slide (e) {
      if (e === 'prev') {
        if (this.active === 0 && this.windowWidth > 481) {
          this.active = this.content.slides.length - 5
          this.current = this.width * this.active
          this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
        } else if (this.active === 0 && this.windowWidth <= 480) {
          this.active = this.content.slides.length - 1
          this.current = this.width * this.active
          this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
        } else {
          this.active--
          this.current = this.current - this.width
          this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
        }
      }
      if (e === 'next') {
        if (this.active === (this.content.slides.length - 5) && this.windowWidth > 481) {
          this.active = 0
          this.current = 0
          this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
        } else if (this.active === (this.content.slides.length - 1) && this.windowWidth <= 480) {
          this.active = 0
          this.current = 0
          this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
        } else {
          this.active++
          this.current = this.width + this.current
          this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
        }
      }
    },
    moveToSlide (i) {
      this.active = i
      this.current = this.width * this.active
      this.$refs.track.style.webkitTransform = `translateX(-${this.current}px)`
    }
  }
}
</script>
