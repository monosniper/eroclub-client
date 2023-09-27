<script setup>
    import {useMainStore} from "~/store";
    const store = useMainStore()
</script>

<template>
  <div class="wrapper">
      <div class="wrapper__bg" :style="`background-image: url(/img/${store.bg}.webp)`"></div>

      <div class="wrapper__content">
          <div class="wrapper__ov">
              <div class="ov-blue"></div>
              <div class="ov-pink"></div>
          </div>
          <div class="wrapper__container">
              <slot />
          </div>
      </div>
  </div>
</template>

<style scoped>
  .wrapper__content {
      z-index: 2;
      position: relative;
      height: 100%;
  }
  .wrapper__container {
      height: 100%;
      margin: 0 auto;
      width: 900px;
      max-width: calc(100% - 30px);
      padding: 0 15px;
  }
  .wrapper__ov {
      height: 100%;
      animation: rotating infinite linear 15s;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
  }
  .ov-blue {
      position: absolute;
      bottom: 300px;
      width: 1px;
      height: 1px;
      left: 300px;
      box-shadow: 0 0px 400px 150px rgba(31, 146, 252, 0.5);
      background: #000;
  }
  .ov-pink {
      position: absolute;
      top: 300px;
      width: 1px;
      height: 1px;
      right: 300px;
      box-shadow: 0 0px 400px 150px rgba(207, 0, 241, 0.5);
      background: #000;
  }

  .wrapper {
      overflow: hidden;
  }

  .wrapper__bg {
      transition: all 0.4s;
      background: #040404;
      height: 100vh;
      z-index: 1;
      position: fixed;
      content: '';
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      background-position: center;
      background-size: cover;
  }

  @keyframes rotating {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }
</style>