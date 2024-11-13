<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
:root {
  --header-height: 0px;
  --footer-height: 0px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: 'Kode Mono', monospace;
}

main {
  scroll-behavior: smooth;
}

.wip {
  background-image: url('https://cdn.dribbble.com/users/285475/screenshots/2672719/media/e24f9bbf89a1c1043057aa0482e3721a.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f2f2f2;
}
</style>
