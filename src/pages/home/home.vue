<template lang="pug" src="./home.pug"></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'
import CustomSection from 'components/custom/custom-section/custom-section'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    FormContact,
    CustomSection
  }
}
</script>
