<template>
  <main id="app">
    <!-- Main Heading -->
    <page-block class="extra-spacing">
      <img src="./assets/me.jpg" alt="Hi, this is me!" />
      <span class="opening">Hello, my name is</span>
      <h1>Matheus Pratta</h1>
      <h2>I'm a Web Developer based in Nova Odessa, Brazil</h2>
    </page-block>

    <!-- Social Links -->
    <page-block>
      <social-links></social-links>
    </page-block>

    <!-- Stats: Languages -->
    <page-block title="Languages" class="accent-01">
      <progress-bar title="JavaScript" :progress="0.8" />
      <progress-bar title="JavaScript" :progress="0.6" />
      <progress-bar title="JavaScript" :progress="0.5" />
      <progress-bar title="JavaScript" :progress="0.3" />
      <progress-bar title="JavaScript" :progress="0.2" />
    </page-block>

    <!-- Stats: Tools & Frameworks -->
    <page-block title="Tools &amp; Frameworks" class="accent-02">
      <progress-bar title="JavaScript" :progress="0.8" />
      <progress-bar title="JavaScript" :progress="0.6" />
      <progress-bar title="JavaScript" :progress="0.5" />
      <progress-bar title="JavaScript" :progress="0.3" />
      <progress-bar title="JavaScript" :progress="0.2" />
    </page-block>

    <!-- Stats: Knowledge Areas -->
    <page-block title="Knowledge Areas" class="accent-03">
      <progress-bar title="JavaScript" :progress="0.8" />
      <progress-bar title="JavaScript" :progress="0.6" />
      <progress-bar title="JavaScript" :progress="0.5" />
      <progress-bar title="JavaScript" :progress="0.3" />
      <progress-bar title="JavaScript" :progress="0.2" />
    </page-block>

    <!-- Stats: Other Skills -->
    <page-block title="Other Skills" class="accent-04">
      <progress-bar title="JavaScript" :progress="0.8" />
      <progress-bar title="JavaScript" :progress="0.6" />
      <progress-bar title="JavaScript" :progress="0.5" />
      <progress-bar title="JavaScript" :progress="0.3" />
      <progress-bar title="JavaScript" :progress="0.2" />
    </page-block>
  </main>
</template>

<script>
import PageBlock from './components/PageBlock.vue'
import SocialLinks from './components/SocialLinks.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  name: 'app',
  components: {
    PageBlock,
    SocialLinks,
    ProgressBar,
  }
}
</script>

<style lang="scss">
@import './scss/main';
</style>
