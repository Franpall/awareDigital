<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <header>
    <h1>Aware Digital</h1>
  </header>
</template>

<style scoped>
header{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #0e4da0;
  font-family: 'Jost', 'serif';
  font-size: 15px;
  overflow: hidden;
}
</style>
