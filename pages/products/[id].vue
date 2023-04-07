<script setup>
    const { id } = useRoute().params
    const uri = "https://fakestoreapi.com/products/" + id

    const { data: product } = await useFetch(uri, {key:id})

    if(!product.value){
        throw createError({ statusCode: 404, statusMessage: 'Item Not Found', fatal: true})
    }

    definePageMeta({
        layout:'products'
    })
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <!-- Directly override the global title over here -->
        <Head>
            <Title>{{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        
        <ProductItemCard :products="product"></ProductItemCard>
    </div>
</template>

<style scoped>

</style>