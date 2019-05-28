<template lang='pug' src='./app-icon.pug'></template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  computed: {
    svg () {
      return require(`@/assets/icons/${this.name}.svg`)
    }
  }
}
</script>
