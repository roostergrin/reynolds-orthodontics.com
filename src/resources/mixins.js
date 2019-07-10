export const onScroll = {
  data () {
    return {
      active: false
    }
  },
  methods: {
    $_onScroll ({going}) {
      if (going === 'in') {
        this.active = true
      }
    }
  }
}
