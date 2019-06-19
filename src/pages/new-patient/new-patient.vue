<template lang="pug" src="./new-patient.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.pages['new-patient']
    }
  },
  components: {
  }
}
</script>
