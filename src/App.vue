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
    </div>

    <!-- Desktop Grid: Right side -->
    <div class="grid-right">
      <!-- Timeline: Work Experience -->
      <page-block title="Work Experience">
        <timeline>
          <!-- Timeline entry (current work) template -->
          <timeline-entry class="current">
            <h4 class="experience-company">Tecnoblog</h4>
            <strong class="experience-position">Web Developer</strong>
            <span class="experience-time">Jul. 2019 - Today</span>
            <div class="experience-description">
              <p>Responsible for maintenance and optimization of the websites Tecnoblog and Meio Bit, while also developing new tools and features, both for internal and public usage, creating new pages, implementing Google DFP and Prebid, and integrating with other tools, platforms and websites.</p>
            </div>
          </timeline-entry>

          <!-- Timeline entry (past work) template -->
          <timeline-entry>
            <h4 class="experience-company">Tecnoblog</h4>
            <strong class="experience-position">Web Developer</strong>
            <span class="experience-time">Jul. 2019 - Today</span>
            <div class="experience-description">
              <p>Responsible for maintenance and optimization of the websites Tecnoblog and Meio Bit, while also developing new tools and features, both for internal and public usage, creating new pages, implementing Google DFP and Prebid, and integrating with other tools, platforms and websites.</p>
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
        <form action="/contact" method="post">
          <text-box name="name" placeholder="Name" icon="far fa-smile" />
          <text-box name="email" placeholder="Email" icon="far fa-envelope" type="email" />
          <text-box name="subject" placeholder="Subject" icon="far fa-sticky-note" />
          <text-box name="message" placeholder="Message" icon="far fa-comment-dots" :lines="5" />
          <button type="submit">Send</button>
        </form>
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

export default {
  name: 'app',
  components: {
    PageBlock,
    SocialLinks,
    ProgressBar,
    Timeline,
    TimelineEntry,
    TextBox,
    LightThemeSwitch,
  }
}
</script>

<style lang="scss">
@import './scss/main';
</style>
