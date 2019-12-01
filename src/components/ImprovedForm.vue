<template>
  <form class="improved-form" :class="{ executing: isExecuting }" ref="form" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
import Axios from 'axios'

export default {
  data () {
    return {
      isExecuting: false
    }
  },
  props: {
    method: { type: String, default: 'post' },
    action: { type: String }
  },
  methods: {
    async handleSubmit (e) {
      // Prevents form submit at all
      e.preventDefault()

      // Get form values
      const formData = new FormData(this.$refs.form)

      // Convert into a key-value object
      let formDataObject = {}
      for (let pair of formData.entries()) {
        formDataObject[pair[0]] = pair[1]
      }

      // Get the current method
      let method = this.method.toLowerCase()

      // Emit events to UI
      this.$emit('submit-call', { data: formDataObject })

      // Internal state
      this.isExecuting = true

      // Run Axios request
      let methodFunction = Axios[method]

      try {
        // Grabs the response
        let response = await methodFunction(this.action, formDataObject)

        // Emits the response
        this.$emit('submit-response', { success: true, response: response })
      } catch (e) {
        // Returns the error
        this.$emit('submit-response', { success: false, error: e })
      }

      // Finished execution
      this.isExecuting = false
    }
  }
}
</script>