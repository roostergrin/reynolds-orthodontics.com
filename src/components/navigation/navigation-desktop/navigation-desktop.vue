<template lang="pug" src="./navigation-desktop.pug"></template>

<script>

import BlockExam from 'block/block-exam/block-exam'

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
    },
    callGa: function () {
      this.$ga.event('send', 'event', "{ eventCategory: 'Phone Call Tracking', eventAction: 'Click to Call', eventLabel: '803-650-3061'}")
    }
  },
  components: {
    BlockExam
  }
}
</script>
