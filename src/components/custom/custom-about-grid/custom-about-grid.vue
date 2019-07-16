<template lang="pug" src="./custom-about-grid.pug"></template>

<script>
export default {
  data () {
    return {
      active: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: {
    content: {
      type: Object
    }
  },
  methods: {
    onScroll ({going, direction}) {
      if (going === 'in' && direction !== undefined) {
        this.active = true
      }
    }
  }
}
</script>
