<template lang="pug" src="./accessibility.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'

export default {
  computed: {
    props () {
      return this.$store.state.pages.accessibility
    }
  },
  components: {
    HeroComponent
  },
  data () {
    return {
      companyName: 'Reynolds Orthodontics', // Fill this in
      domain: "<a href='https://reynolds-orthodontics.com'>reynolds-orthodontics.com</a>", // Fill this in
      email: "<a href='mailto:info@reynolds-ortho.com'>info@reynolds-ortho.com</a>", // Fill this in
      phone: "<a href='tel:18036503061'>(803) 650-3061</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
