<script setup>
  import Navigation from "~/components/Navigation.vue";

</script>

<template>
  <div class="wrapper">

      <div class="wrapper__content">
          <div class="wrapper__ov">
              <div class="ov-blue"></div>
              <div class="ov-pink"></div>
          </div>
          <div class="wrapper__container">
              <van-row gutter="20">
                  <van-col span="6">
                      <Navigation />
                  </van-col>
                  <van-col span="18">
                      <slot />
                  </van-col>
              </van-row>
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
      margin: auto 150px;
  }
  .wrapper__ov {
      height: 100%;
      animation: rotating infinite linear 15s;
      position: absolute;
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
      position: relative;
      z-index:1;
      overflow:hidden;
      background: #040404;
      height: 100vh;
  }

  .wrapper::before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;


      background-image: url(/img/3.webp);
      background-position: center;
      background-size: cover;
      opacity: .5;

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