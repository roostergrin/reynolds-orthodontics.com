<template lang="pug" src="./home.pug"></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    FormContact
  }
}
</script>
