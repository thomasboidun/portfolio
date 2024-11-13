<template>
  <header class="sticky left-0 top-0 z-50 bg-slate-900 text-slate-100">
    <nav id="navbar" class="container flex items-center gap-4 p-4">
      <div class="mr-auto">
        <a href="#" title="Home">
          <img src="/code.png" alt="" class="invert" />
        </a>
      </div>
      <ul class="flex list-none gap-4">
        <li v-for="(navLink, index) in navigationLinks" :key="index">
          <a :href="navLink.href" :title="navLink.title">
            <span class="nav-link-icon"><i :class="navLink.icon"></i></span>
            <span class="nav-link-label hidden md:inline-block">&nbsp;{{ navLink.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import navigationLinks from '../data/navigation-links';
import ScrollService from '../services/ScrollService';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      navigationLinks,
    };
  },
  mounted() {
    this.updateHeaderHeight();
    window.addEventListener('resize', this.updateHeaderHeight);

    document.querySelector('header nav a[title="Home"]').addEventListener('click', ScrollService.scrollToTop);
  },
  methods: {
    updateHeaderHeight() {
      const header = document.querySelector('header');
      document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px');
    },
  },
};
</script>

<style scoped>
#navbar ul li:not(:last-child)::after {
  content: '|';
  margin-left: 1rem;
  @apply text-slate-500;
}
</style>
