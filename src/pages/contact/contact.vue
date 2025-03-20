<template lang="pug" src="./contact.pug"></template>

<script>
import ContactSection from 'custom/custom-contact-section/custom-contact-section'
import HeroComponent from 'components/hero/hero'
import CustomContactLocation from 'custom/custom-contact-location/custom-contact-location'

export default {
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  },
  components: {
    ContactSection,
    HeroComponent,
    CustomContactLocation
  }
}
</script>
