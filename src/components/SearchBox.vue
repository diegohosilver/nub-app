<script setup>
import { watch, ref } from 'vue'
import debounce from 'lodash.debounce'
import SearchIcon from './icons/SearchIcon.vue'

const search = ref(null)

const emit = defineEmits(['search'])

watch(
  search,
  debounce(() => {
    emit('search', search.value)
  }, 1000)
)
</script>

<template>
  <div class="search-box">
    <div class="search-box-icon">
      <SearchIcon />
    </div>
    <input type="text" placeholder="Search for a city" v-model="search" />
  </div>
</template>

<style lang="scss" scoped>
input {
  border: none;
  background: none;
  height: 40px;
  width: 100%;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    outline: 0;
  }
}
.search-box {
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  border-radius: 12px;
  height: 48px;
  box-shadow: 0px 4px 8px 0px #637d8757;
  margin: 16px 12px;

  &-icon {
    margin-left: 16px;
    margin-right: 12px;
  }
}
</style>
