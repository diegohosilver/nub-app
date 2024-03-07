<script setup>
import TopLogo from './TopLogo.vue'
import ModeSwitcher from './ModeSwitcher.vue'
</script>

<template>
  <div class="header-block">
    <TopLogo :title="'NubApp'" />
    <ModeSwitcher />
  </div>
</template>

<style scoped>
.header-block {
  display: flex;
  align-items: center;
}
</style>
