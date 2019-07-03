<template lang="pug" src="./custom-home-testimonials.pug"></template>

<script>
export default {
  data () {
    return {
      show: 0
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  async mounted () {
    setInterval(() => {
      if (this.show === (this.content.slides.length - 1)) {
        this.show = 0
      } else {
        this.show++
      }
    }, 8000)
  },
  methods: {
    goToSlide (i) {
      this.show = i
    }
  }
}
</script>
