<template lang="pug" src="./navigation.pug"></template>

<script>
import Desktop from 'components/navigation/navigation-desktop/navigation-desktop'

export default {
  data () {
    return {
      windowHeight: window.pageYOffset
    }
  },
  computed: {
    links () {
      return this.$router.options.routes.filter((link) => {
        return link.navigation
      })
    },
    fixed () {
      return this.windowHeight > 553
    },
    props () {
      return this.$store.state.app.nav
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.windowHeight = window.pageYOffset
    })
  },
  components: {
    Desktop
  }
}
</script>
