<template lang="pug" src="./home.pug"></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'
import TestCols from 'components/test-cols/test-cols'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    FormContact,
    TestCols
  }
}
</script>
