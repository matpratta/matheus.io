<template>
  <div class="progress-bar">
    <!-- Progress bar title -->
    <h4 v-if="title">{{ title }}</h4>

    <!-- Progress bar -->
    <div class="progress-bar-container" :style="{ '--progress': progress }"></div>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    title: String,
    progress: Number
  }
}
</script>