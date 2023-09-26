<script setup lang="ts">

</script>

<template>
  <div>
      <NuxtLink to="/" class="logo">
          <img src="/img/logo.svg" alt="Logo">
          <div class="logo__title">eroclub is not only for dalbaebs</div>
      </NuxtLink>
      <div class="normalizer"></div>
  </div>
</template>

<style scoped>
.logo {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;

    &__title {
        color: #EF08D8;
        font-size: 16px;
        font-family: Comfortaa, sans-serif;
    }

    img {
        margin-bottom: .3rem;
        width: 250px;
    }
}
  .normalizer {
      padding-top: 15rem;
  }
</style>