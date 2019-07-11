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
      type: Object
    },
    links: {
      type: Array
    },
    fixed: {
      type: Boolean
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
