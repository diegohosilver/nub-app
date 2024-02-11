<template>
  <div class="weather-loading">
    <h2 class="weather-loading--location"></h2>

    <h1 class="weather-loading--temperature"></h1>

    <h2 class="weather-loading--status"></h2>

    <div class="weather-loading--limits">
      <div></div>

      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather-loading {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--location {
    width: 200px;
    height: 34px;
  }

  &--temperature {
    width: 50px;
    height: 44px;
  }

  &--status {
    width: 150px;
    height: 34px;
  }

  &--limits {
    display: flex;
    justify-content: space-between;
    width: 150px;

    div {
      width: 40px;
      height: 24px;
      background-color: #ddd;
      animation: pulse-bg 1s infinite;
    }
  }
}

h1,
h2 {
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}
</style>
