<template lang="pug" src="./custom-treatments-tech.pug"></template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    items () {
      return this.content.items || []
    },
    columns () {
      return Number(this.content.columns) === 4 ? 4 : 3
    }
  }
}
</script>
