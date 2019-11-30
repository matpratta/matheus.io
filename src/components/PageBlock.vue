<template>
  <section class="page-block">
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PageBlock',
  props: {
    title: String
  }
}
</script>