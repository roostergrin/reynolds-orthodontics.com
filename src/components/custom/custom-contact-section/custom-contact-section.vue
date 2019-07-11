<template lang="pug" src="./custom-contact-section.pug"></template>

<script>
import mapStyles from './map.json'
import Icon from '@/assets/icons/marker-map.svg'

import FormContact from 'components/form/form-contact/form-contact'

export default {
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
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

      if (this.windowWidth <= 768) {
        this.$map.setCenter({lat: 34.956645, lng: -80.8780306})
      }

      if (this.windowWidth < 460) {
        this.$map.setCenter({lat: 34.956645, lng: -80.8580306})
      }

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
