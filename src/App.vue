<template>
<div id="app">
  <hello-world subtitle="Teste de componente">
    <div class="slot">Slot</div>
  </hello-world>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss" scoped>
.slot {
  @apply text-red-500 text-2xl;
}
</style>