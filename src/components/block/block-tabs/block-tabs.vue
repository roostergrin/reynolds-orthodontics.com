<template lang='pug' src='./block-tabs.pug'></template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      currModal: null
    }
  },
  methods: {
    openModal (i) {
      this.currModal = i
      document.body.classList.add('body-stop')
    },
    closeModal () {
      this.currModal = null
      document.body.classList.remove('body-stop')
    }
  }
}
</script>
