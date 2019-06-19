<template lang="pug" src="./navigation.pug"></template>

<script>
import Desktop from 'components/navigation/navigation-desktop/navigation-desktop'

export default {
  computed: {
    links () {
      return this.$router.options.routes.filter((link) => {
        return link.navigation
      })
    }
  },
  components: {
    Desktop
  }
}
</script>
