<template>
  <main id="app">
    <!-- Desktop Grid: Left side -->
    <div class="grid-left">
      <!-- Theme Switch -->
      <light-theme-switch />

      <!-- Main Heading -->
      <page-block class="extra-spacing">
        <img src="./assets/me.jpg" alt="Hi, this is me!" />
        <span class="opening">Hello, my name is</span>
        <h1>Matheus Pratta</h1>
        <h2>I'm a Web Developer based in Nova Odessa, Brazil</h2>

        <hr />

        <!-- Social Links -->
        <social-links></social-links>
      </page-block>

      <!-- Stats: Languages -->
      <page-block title="Languages" class="accent-01">
        <progress-bar :title="skill" :progress="score" v-for="(score, skill) in skills.languages" v-bind:key="skill" />
      </page-block>

      <!-- Stats: Tools & Frameworks -->
      <page-block title="Tools &amp; Frameworks" class="accent-02">
        <progress-bar :title="skill" :progress="score" v-for="(score, skill) in skills.tools" v-bind:key="skill" />
      </page-block>

      <!-- Stats: Knowledge Areas -->
      <page-block title="Knowledge Areas" class="accent-03">
        <progress-bar :title="skill" :progress="score" v-for="(score, skill) in skills.areas" v-bind:key="skill" />
      </page-block>

      <!-- Stats: Other Skills -->
      <page-block title="Other Skills" class="accent-04">
        <progress-bar :title="skill" :progress="score" v-for="(score, skill) in skills.other" v-bind:key="skill" />
      </page-block>
    </div>

    <!-- Desktop Grid: Right side -->
    <div class="grid-right">
      <!-- Timeline: Work Experience -->
      <page-block title="Work Experience">
        <timeline>
          <!-- Timeline entry template -->
          <timeline-entry :class="{ current: entry.current }" v-for="(entry, i) in timeline" v-bind:key="i">
            <h4 class="experience-company">{{ entry.title }}</h4>
            <strong class="experience-position">{{ entry.subtitle }}</strong>
            <span class="experience-time">{{ entry.period }}</span>
            <div class="experience-description" v-if="entry.description">
              <p v-for="(paragraph, i) in entry.description" v-bind:key="i">{{ paragraph }}</p>
            </div>
          </timeline-entry>
        </timeline>
      </page-block>
    </div>

    <!-- Desktop Grid: Bottom part -->
    <div class="grid-bottom">
      <!-- Contact Section -->
      <page-block title="Contact Me">
        <div class="extra-spacing">
          <!-- Social Links -->
          <social-links></social-links>
        </div>

        <!-- Helper text -->
        <p>You can get in touch with me via the social links above or through the contact form below:</p>

        <!-- Contact Form -->
        <improved-form :class="{ submitted: formSubmitted }" action="/api/contact.js" method="post" @submit-response="handleSubmitResponse">
          <text-box name="name" placeholder="Name" icon="far fa-smile" />
          <text-box name="email" placeholder="Email" icon="far fa-envelope" type="email" />
          <text-box name="subject" placeholder="Subject" icon="far fa-sticky-note" />
          <text-box name="message" placeholder="Message" icon="far fa-comment-dots" :lines="5" />
          <button type="submit">Send</button>
        </improved-form>

        <!-- Confirmation message -->
        <p v-if="formSubmitted">Your message was received! Soon I will be in touch with you back!</p>
      </page-block>
    </div>
  </main>
</template>

<script>
import PageBlock from './components/PageBlock.vue'
import SocialLinks from './components/SocialLinks.vue'
import ProgressBar from './components/ProgressBar.vue'
import Timeline from './components/Timeline.vue'
import TimelineEntry from './components/TimelineEntry.vue'
import TextBox from './components/TextBox.vue'
import LightThemeSwitch from './components/LightThemeSwitch.vue'
import ImprovedForm from './components/ImprovedForm.vue'

export default {
  name: 'app',
  data () {
    return {
      resume: require('./assets/resume.json'),
      formSubmitted: false
    }
  },
  mounted () {
    // Send GA pageview
    this.$ga.page('/')
  },
  computed: {
    timeline () { return this.resume.timeline.reverse() },
    skills () { return this.resume.skills }
  },
  components: {
    PageBlock,
    SocialLinks,
    ProgressBar,
    Timeline,
    TimelineEntry,
    TextBox,
    LightThemeSwitch,
    ImprovedForm,
  },
  methods: {
    handleSubmitResponse ({ success, response, error }) {
      // Did our response succeeded?
      if (success) {
        // Update our interface
        this.formSubmitted = true

        // Send to GA
        this.$ga.event('Contact Form', 'message', 'Submitted the contact form', 1.00)
      } else {
        // Show an error message
        alert('Sorry, could not send your message now. Please try again later.')
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main';
</style>
