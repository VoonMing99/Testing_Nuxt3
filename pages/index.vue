<script setup>
import {ref, computed} from 'vue'
const runtimeConfig = useRuntimeConfig()

const count = ref(0)
const inputCar = ref('')
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const items = ref([{id:1, car: "Toyota"}, {id: 2, car: "Honda"}])

const Booleans = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

function increment(){
  count.value++
}

function addCar(){
  items.value.push({car: inputCar.value})
  inputCar.value=''
}
</script>

<template>
  <div>
    <h2>Hello There!</h2>

    <button @click="increment">{{ count }}</button>

    <ul class="car" v-for="(item, index) in items" :key="item.id">
      <li>
        Id:{{ index }}:{{ item.car.split('').reverse().join('') }}
      </li>
    </ul>
    <form @submit.prevent="addCar">
      <input v-model="inputCar"/>
      <button>Add Car</button>
    </form>
    <ul v-for="item in items" :key="item.id">
      <li>
        {{ item.car }}
      </li>
    </ul>
    <p>{{ Booleans }}</p>
  </div>
</template>

<style scoped>
ul.car{
  text-decoration:underline;
}
</style>
