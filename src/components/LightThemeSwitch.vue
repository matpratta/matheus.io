<template>
  <div class="light-theme-switch" title="Toggle dark/light theme">
    <button class="toggle-switch" :class="{ enabled: isUsingLightTheme }" @click="isUsingLightTheme = !isUsingLightTheme"></button>
  </div>
</template>

<script>
export default {
  computed: {
    isUsingLightTheme: {
      cache: false,
      get () {
        return ~document.body.className.indexOf('light-theme')
      },
      set (value) {
        // Prevents appending infinite class names lol
        if (this.isUsingLightTheme == value) return

        // Reduce our value to a boolean
        value = !!value

        if (value) {
          // Enabling light theme
          document.body.className = (document.body.className + ' light-theme').trim()
        } else {
          // Disabling light theme
          document.body.className = document.body.className.replace('light-theme', '').trim()
        }

        // Save user preferences
        localStorage.setItem('light-theme', value)

        // Force update the UI
        this.$forceUpdate()
      }
    }
  },
  mounted () {
    // Detect if our user already set a theme before
    if (localStorage && null != localStorage.getItem('light-theme')) {
      this.isUsingLightTheme = JSON.parse(localStorage.getItem('light-theme'))
    }

    // Detect if our user prefer a dark or light theme
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // Enable light theme
      this.isUsingLightTheme = true
    }
  }
}
</script>

<style lang="scss">
.light-theme-switch {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 2em;

  font-size: 0.75em;
}
</style>