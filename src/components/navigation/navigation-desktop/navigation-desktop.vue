<template lang="pug" src="./navigation-desktop.pug"></template>

<script>
export default {
  data () {
    return {
      dropdownActive: false
    }
  },
  props: {
    props: {
      Type: Object
    },
    links: {
      Type: Array
    },
    fixed: {
      Type: Boolean
    }
  },
  methods: {
    handleSublink (i) {
      this.$store.dispatch('SET_TAB', i)
      this.dropdownActive = false
    }
  }
}
</script>
