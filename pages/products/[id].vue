<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout:'products'
    })
</script>

<template>
    <div>
        <p>Product Details For {{ id }}</p>
        <p>Testing page for getting the page route with the ID</p>
    </div>
</template>

<style scoped>

</style>