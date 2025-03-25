<template lang="pug" src="./block-top-phone.pug"></template>

<script>

export default {
  methods: {
    callGa: function () {
      this.$ga.event('send', 'event', "{ eventCategory: 'Phone Call Tracking', eventAction: 'Click to Call', eventLabel: '803-650-3061'}")
    }
  }
}
</script>
