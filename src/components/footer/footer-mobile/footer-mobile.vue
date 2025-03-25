<template lang="pug" src="./footer-mobile.pug"></template>

<script>

export default {
  data () {
    return {
      isPopupVisible: false
    }
  },
  computed: {
    content () {
      return this.$store.state.app.nav
    }
  },
  methods: {
    showModal1 () {
      let element = document.querySelector('.footer-mobile__popup')
      if (element.style.display === '' || element.style.display === 'none') {
        element.style.display = 'block'
      } else {
        element.style.display = 'none'
      }
    }
  }
}
</script>
