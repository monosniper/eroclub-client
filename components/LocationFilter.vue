<script setup>
  defineProps(['locations'])
  import {useMainStore} from "~/store";
  const store = useMainStore()

  function onChange(event) {
    store.setLocation(event.target.value)
  }
</script>

<template>
  <div class="wrap">
    <select @change="onChange($event)">
      <option selected :value="location" v-for="location in locations">{{location}}</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: center;
}
  select {
    width: 200px;
    cursor: pointer;
    background: #1e1e1e;
    border-radius: 10px;
    padding: 10px 20px;
    border: none;
    margin-bottom: 40px;
    outline: none;
  }
</style>