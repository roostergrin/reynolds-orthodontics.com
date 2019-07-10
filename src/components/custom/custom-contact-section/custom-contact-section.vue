<template lang="pug" src="./custom-contact-section.pug"></template>

<script>
import mapStyles from './map.json'
import Icon from '@/assets/icons/marker-map.svg'

import FormContact from 'components/form/form-contact/form-contact'

export default {
  props: {
    content: {
      type: Object
    }
  },
  computed: {
    props () {
      return this.$store.state.app.nav
    }
  },
  async mounted () {
    this.createMap(this.content.position)
    this.addMarker(this.content.coords)
  },
  components: {
    FormContact
  },
  methods: {
    createMap (coords) {
      /* eslint-disable */
      this.$map = new google.maps.Map(this.$refs.mapContainer, {
        center: {
          lat: parseFloat(coords.lat),
          lng: parseFloat(coords.lng)
        },
        zoom: 14,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        styles: mapStyles
      })
    },
    addMarker (coords) {
      new google.maps.Marker({
        position: {
          lat: parseFloat(coords.lat),
          lng: parseFloat(coords.lng)
        },
        map: this.$map,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(Icon),
          scaledSize: new google.maps.Size(40, 40)
        }
      })
    }
    /* eslint-enable */
  }
}
</script>
