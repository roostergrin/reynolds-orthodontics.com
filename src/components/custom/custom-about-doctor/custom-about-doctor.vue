<template lang="pug" src="./custom-about-doctor.pug"></template>

<script>
export default {
  data () {
    return {
      show: 0,
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
    handleClick (i) {
      this.show = i
    },
    onScroll ({going}) {
      if (going === 'in') {
        this.active = true
      }
    }
  }
}
</script>
