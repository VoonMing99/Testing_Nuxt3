<script setup>
import {ref, computed} from 'vue'
const runtimeConfig = useRuntimeConfig()

const count = ref(1)
const inputCar = ref('')
const check = ref(true)
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const items = ref([{id:1, car: "Toyota", done: true}, {id: 2, car: "Honda", done:false}])

const Booleans = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

function addCar(){
  items.value.push({car: inputCar.value})
  inputCar.value=''
}

function increment(){
  count.value++
}

function removeCar(item){
    items.value = items.value.filter((t)=> t !== item)
}

const double = computed(() => count.value * 2)
</script>

<template>
  <div>
    <h2>Hello There! Click the <b>Green</b> button below!</h2>
    <button @click="increment" class="countButton">{{ count }}</button>
    <span>:</span>
    <span class="notButton">{{ double }}</span>
    <h2 class="overline">Array below is looping out the object data</h2>
    <!--
    <ul class="car" v-for="(item, index) in items" :key="item.id">
      <li>
        Id:{{ index }}:{{ item.car.split('').reverse().join('') }}
      </li>
    </ul>
    -->
    <form @submit.prevent="addCar">
      <input v-model="inputCar" class="borderColor"/>
      <button class="countButton">Add Car</button>
    </form>
    <ul v-for="item in items" :key="item.id">
      <li>
        <input type="checkbox" v-model="item.done" />
        <span class="ml-2" :class="{linethrough : item.done}">{{ item.car }}</span>
        <button class="space countButton" @click="removeCar(item)">Remove</button>
      </li>
    </ul>
    <p>{{ Booleans }}</p>
  </div>
</template>

<style scoped>
ul.car{
  text-decoration:underline;
}

span.linethrough{
    text-decoration: line-through;
}

button.space{
    margin-left: 1rem;
}

input.borderColor{
    border: 3px solid #555;
}

h2.overline{
    text-decoration: overline;
}
</style>
