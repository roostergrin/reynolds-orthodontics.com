<template lang="pug" src="./form-contact.pug"></template>

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
      // age: '',
      message: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false,
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
        // age: this.age,
        message: this.message
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            window.location.href = 'https://reynolds-orthodontics.com/thank-you'
          }, 400)
          setTimeout(() => {
            this.errors.clear()
          }, 1100)
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    },
    clearForm () {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      // this.age = ''
      this.message = ''
    },
    focused (name) {
      this.active = name
    }
  }
}
</script>
