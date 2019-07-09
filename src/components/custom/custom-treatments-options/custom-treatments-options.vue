<template lang="pug" src="./custom-treatments-options.pug"></template>

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
  methods: {
    goToTab (i) {
      this.show = i
    }
  }
}
</script>
