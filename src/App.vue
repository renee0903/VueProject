<template>
  <headerLayout />
  <navbar />
  <router-view></router-view>
  <footerLayout />
</template>

<script>
import headerLayout from '@/components/header-layout.vue';
import navbar from '@/components/navbar.vue';
import footerLayout from '@/components/footer-layout.vue';

export default {
  name: 'App',
  components: {
    headerLayout,
    navbar,
    footerLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
