<template lang="pug" src="./custom-about-doctor.pug"></template>

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
    handleClick (i) {
      this.show = i
    }
  }
}
</script>
