<template>
  <div class="social-links">
    <!-- Telegram -->
    <a target="_blank" title="Contact me via Telegram" href="https://t.me/matt_pratta"><i class="fab fa-telegram-plane"></i></a>

    <!-- GitHub -->
    <a target="_blank" title="Find me at GitHub" href="https://github.com/matpratta"><i class="fab fa-github-alt"></i></a>

    <!-- Blog -->
    <a target="_blank" title="Read my blog" href="https://blog.matheus.io"><i class="btn">BLOG</i></a>

    <!-- LinkedIn -->
    <a target="_blank" title="Find me at Linkedin" href="https://www.linkedin.com/in/matheus-pratta/"><i class="fab fa-linkedin-in"></i></a>

    <!-- WhatsApp -->
    <a target="_blank" title="Contact me via WhatsApp" href="https://wa.me/5519983359825"><i class="fab fa-whatsapp"></i></a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    title: String
  }
}
</script>
