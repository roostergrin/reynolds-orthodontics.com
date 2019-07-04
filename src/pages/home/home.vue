<template lang="pug" src="./home.pug"></template>

<script>
import BlockTabs from 'block/block-tabs/block-tabs'
import CustomAppointment from 'custom/custom-home-appointment/custom-home-appointment'
import CustomInstagram from 'custom/custom-home-instagram/custom-home-instagram'
import CustomTestimonials from 'custom/custom-home-testimonials/custom-home-testimonials'
import CustomWelcome from 'custom/custom-home-welcome/custom-home-welcome'
import HeroComponent from 'components/hero/hero'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockTabs,
    CustomAppointment,
    CustomInstagram,
    CustomTestimonials,
    CustomWelcome,
    HeroComponent
  }
}
</script>
