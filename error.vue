<script setup>
    defineProps(['error'])

    function ReturnMain(){
        clearError({ redirect:'/'})
    }
</script>

<template>
    <div class="mt-7 mx-auto text-center">
        <p class="mt-7 text-8xl font-bold">Error {{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Sorry</p>
        <p class="mt-7">{{ error.message }}</p>
        <button @click="ReturnMain" class="btn mt-2">Return</button>
    </div>
</template>



<style scoped>

</style>