<template>
  <label class="textbox">
    <!-- Textbox icon -->
    <i :class="`textbox-icon ${icon}`"></i>

    <!-- Actual input field when only one line -->
    <input v-if="lines == 1" class="textbox-input" :required="required" :readonly="readonly" :name="name" :placeholder="placeholder" :type="type" />

    <!-- Textarea if more than one -->
    <textarea v-if="lines > 1" class="textbox-input" :required="required" :readonly="readonly" :name="name" :placeholder="placeholder" :rows="lines"></textarea>
  </label>
</template>

<script>
export default {
  props: {
    icon: String,
    name: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    lines: { type: Number, default: 1 },
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
  }
}
</script>