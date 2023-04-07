<script setup>
    definePageMeta({
        layout:'products'
    })

    //This line of code will fetch the data to our website
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    //Override global title by using useHead function
    useHead({
        title: 'Items',
        meta:[
            { name: 'description', content: 'Nuxt Tutorial'}
        ]
    })
</script>

<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :products="product"></ProductCard>
            </div>    
        </div>
    </div>
</template>

<style scoped>

</style> 