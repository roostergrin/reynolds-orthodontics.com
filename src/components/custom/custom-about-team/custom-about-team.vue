<template lang="pug" src="./custom-about-team.pug"></template>

<script>
export default {
  props: {
    content: {
      type: Object
    },
    tiles: {
      type: String,
      default: 'three',
      validator: function (str) {
        return ['two', 'three', 'four'].indexOf(str) !== -1
      }
    }
  }
}
</script>
