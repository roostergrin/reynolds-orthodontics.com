<template lang="pug" src="./form-contact.pug"></template>

<script>
import api from 'api'
import axios from 'axios'

export default {
  data () {
    return {
      firstName: '',
      patientdob: '',
      parentName: '',
      email: '',
      phoneNumber: '',
      overallExperience: '',
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
        firstName: this.firstName,
        patientdob: this.patientdob,
        parentName: this.parentName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        overallExperience: this.overallExperience,
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
      this.patientdob = ''
      this.parentName = ''
      this.email = ''
      this.phoneNumber = ''
      this.overallExperience = ''
      // this.age = ''
      this.message = ''
    },
    focused (name) {
      this.active = name
    }
  }
}
</script>
