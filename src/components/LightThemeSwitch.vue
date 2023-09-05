<template>
  <div class="light-theme-switch" title="Toggle dark/light theme">
    <button class="toggle-switch" :class="{ enabled: isUsingDarkTheme }" @click="isUsingDarkTheme = !isUsingDarkTheme"></button>
  </div>
</template>

<script>
export default {
  computed: {
    isUsingDarkTheme: {
      cache: false,
      get () {
        return ~document.body.className.indexOf('dark-theme')
      },
      set (value) {
        // Prevents appending infinite class names lol
        if (this.isUsingDarkTheme == value) return

        // Reduce our value to a boolean
        value = !!value

        if (value) {
          // Enabling light theme
          document.body.className = (document.body.className + ' dark-theme').trim()
        } else {
          // Disabling light theme
          document.body.className = document.body.className.replace('dark-theme', '').trim()
        }

        // Save user preferences
        localStorage.setItem('dark-theme', value)

        // Force update the UI
        this.$forceUpdate()
      }
    }
  },
  mounted () {
    // Detect if our user already set a theme before
    if (localStorage && null != localStorage.getItem('dark-theme')) {
      this.isUsingDarkTheme = JSON.parse(localStorage.getItem('dark-theme'))
    }

    // Detect if our user prefer a dark or light theme
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Enable light theme
      this.isUsingDarkTheme = true
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