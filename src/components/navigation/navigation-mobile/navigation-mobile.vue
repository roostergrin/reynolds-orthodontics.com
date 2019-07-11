<template lang="pug" src="./navigation-mobile.pug"></template>

<script>
export default {
  data () {
    return {
      drawerOpen: false
    }
  },
  props: {
    props: {
      type: Object
    },
    links: {
      type: Array
    },
    fixed: {
      type: Boolean
    }
  },
  methods: {
    toggleDrawer () {
      this.drawerOpen = !this.drawerOpen
      this.drawerOpen ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    },
    closeDrawer () {
      this.drawerOpen = false
      document.body.classList.remove('body-stop')
    }
  }
}
</script>
