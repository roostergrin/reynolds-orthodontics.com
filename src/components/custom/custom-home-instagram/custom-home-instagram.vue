<template lang="pug" src="./custom-home-instagram.pug"></template>

<script>
export default {
  computed: {
    feed () {
      return this.$store.state.insta.slice(0, 4)
    }
  }
}
</script>
