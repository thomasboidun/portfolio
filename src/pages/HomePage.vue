<template>
  <DefaultLayout>
    <section id="about" class="w-full h-content">
      <div class="container h-full p-4">
        <h2>About me</h2>
        <p>Section under construction...</p>
      </div>
    </section>
    <section id="skills" class="w-full h-content">
      <div class="container h-full p-4">
        <h2>My skills</h2>
        <p>Section under construction...</p>
      </div>
    </section>
    <section id="studies" class="w-full h-content">
      <div class="container h-full p-4">
        <h2>My studies</h2>
        <p>Section under construction...</p>
      </div>
    </section>
    <section id="contact" class="w-full h-content">
      <div class="container h-full p-4">
        <h2>Contact me</h2>
        <p>Section under construction...</p>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';

export default {
  name: 'HomePage',
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
h2 {
  @apply text-2xl font-semibold text-gray-700 mb-8;
}
</style>
