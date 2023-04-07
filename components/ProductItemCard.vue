<template>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="`${products.image}`" class="mx-auto my-7" />
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ products.title }}</h2>
          <h2 class="text-xl my-7"><b class="text-2xl">Price:</b> {{ products.price }}</h2>
          <h3 class="font-bold border-b-2 mb-3 pb-2">Product description:</h3>
          <p class="mb-7">{{ products.description }}</p>
          <div>
            <button @click="count--" class="countbtn mb-3 mr-2">-</button><span>{{count}}</span><button @click="count++" class="countbtn ml-2">+</button >
          </div>
          <button class="btn text-2xl flex">
            <i class="material-symbols-outlined mr-2 mt-1">add</i>
            <span>Purchase</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const { p } = defineProps(['products'])
    const count = ref(0)
  </script>
  
  <style scoped>
    img{
      max-width: 400px;
    }

    .card{
      width:421%
    }
  </style>