<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <h1>{{ props.title }}</h1>
</template>

<style scoped>
h1 {
  margin-left: 12px;
  margin-right: auto;
  font-weight: bold !important;
}
</style>
