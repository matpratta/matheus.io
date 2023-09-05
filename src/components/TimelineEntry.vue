<template>
  <div class="timeline-entry">
    <h4 class="experience-position">{{ entry.position }}</h4>
    <strong class="experience-company">{{ entry.company }}</strong>
    <span class="experience-time">{{ entry.period }}</span>
    <div class="experience-description" v-if="entry.description">
      <p v-for="(paragraph, i) in entry.description" v-bind:key="i">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: Object,
  }
}
</script>