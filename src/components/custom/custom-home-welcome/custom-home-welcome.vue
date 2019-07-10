<template lang="pug" src="./custom-home-welcome.pug"></template>

<script>

export default {
  data () {
    return {
      active: false,
      windowHeight: window.innerHeight,
      intersectionOptions: {
        root: null,
        rootMargin: '0px',
        threshold: [0.4]
      }
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  async mounted () {
    console.log(this.windowHeight)
  },
  methods: {
    $_onScroll ({going, direction}) {
      if (going === 'in' && direction === 'top') {
        this.active = true
      }
    }
  }
}
</script>
