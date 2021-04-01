<template>
  <div id="app">
    <v-form></v-form>
  </div>
</template>

<script>
import VForm from '@/components/VForm'

export default {
  name: 'App',
  components: {
    VForm
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
  margin-top: 60px;
}
</style>
