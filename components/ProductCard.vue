<template>
    <div class="card text-center">
      <img :src="`${products.image}`" class="thumb" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ products.title }}</p>
      <NuxtLink :to="`/products/${products.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
    const { p } = defineProps(['products'])
  </script>
  
  <style scoped>
    .thumb {
      max-height: 120px;
      max-width: 70%;
      margin: 0 auto;
    }
  </style>