<template lang="pug" src="./about.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'
import CustomDoctor from 'custom/custom-about-doctor/custom-about-doctor'
import CustomGrid from 'custom/custom-about-grid/custom-about-grid'
import CustomOffice from 'custom/custom-about-office/custom-about-office'
import CustomTeam from 'custom/custom-about-team/custom-about-team'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    CustomDoctor,
    CustomGrid,
    CustomOffice,
    CustomTeam,
    HeroComponent
  }
}
</script>
