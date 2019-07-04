<template lang="pug" src="./form-main.pug"></template>

<script>
import api from 'api'
import axios from 'axios'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      active: ''
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(res => {
          if (res) {
            this.onSubmit()
          }
        })
        .catch(e => { console.log(e) })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        name: this.firstName + ' ' + this.lastName,
        email: this.email,
        phone: this.phone,
        age: this.age
      })
        .then(res => {
          this.active = ''
          this.clearForm()
          this.$router.push('/thank-you')
        })
        .catch(e => { console.log(e) })
    },
    clearForm () {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      this.age = ''
    },
    focused (name) {
      this.active = name
    }
  }
}
</script>
