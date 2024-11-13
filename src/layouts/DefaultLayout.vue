<template>
  <HeaderComponent />

  <main class="overflow-y-scroll min-h-content h-content max-h-content">
    <CoverComponent />
    <slot />
  </main>

  <FooterComponent />
</template>

<script>
import CoverComponent from '../components/CoverComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
    CoverComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Cacher la barre de défilement sur les navigateurs Webkit (Chrome, Safari) */
main::-webkit-scrollbar {
  display: none;
}

/* Cacher la barre de défilement sur Firefox */
main {
  scrollbar-width: none;
}
</style>
