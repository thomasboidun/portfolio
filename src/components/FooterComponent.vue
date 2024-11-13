<template>
  <footer class="z-50 bg-slate-900 p-4 text-slate-100">
    <p class="text-center text-xs">
      Developed by myself using<br class="sm:hidden" />
      <a href="https://vuejs.org/" target="_blank">Vue.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and <a href="https://www.markdownguide.org/" target="_blank">Markdown</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  mounted() {
    this.updateFooterHeight();
    window.addEventListener('resize', this.updateFooterHeight);
  },
  methods: {
    updateFooterHeight() {
      const footer = document.querySelector('footer');
      document.documentElement.style.setProperty('--footer-height', footer.getBoundingClientRect().height + 'px');
    },
  },
};
</script>

<style scoped></style>
