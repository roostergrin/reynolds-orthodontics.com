<template lang="pug" src="./footer.pug"></template>

<script>
export default {
  computed: {
    content () {
      return this.$store.state.app.nav
    }
  },
  methods: {
    callGa: function () {
      this.$ga.event('send', 'event', "{ eventCategory: 'Phone Call Tracking', eventAction: 'Click to Call', eventLabel: '803-650-3061'}")
    }
  }
}
</script>
