<template>
  <HelloWorld />
</template>

<script>
  import HelloWorld from './HelloWorld.vue';
  import vuetify from '../plugins/vuetify';
  export default {
    name: 'HelloWorldWrap',
      vuetify,
    components: {HelloWorld}
  }
</script>
<style>
  @import 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css';
</style>