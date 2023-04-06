<script setup>
import mousetrack from './components/mousetrack.vue'
</script>

<template>
    <div>
        <h2>About</h2>
        <p>Testing Paragrah</p>
        <p>Another Paragrah</p>
        <mousetrack v-slot="{ x, y }">
  	        Mouse is at: {{ x }}, {{ y }}
        </mousetrack>
    </div>
</template>


<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}

p{
    margin: 20px 0;
}
</style>