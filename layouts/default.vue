<script setup>

</script>

<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Testing </NuxtLink>
                <ul class="flex gap-4">
                    <li class="link"><NuxtLink to="/">Home </NuxtLink></li>
                    <li class="link"><NuxtLink to="/about">About </NuxtLink></li>
                    <li class="link"><NuxtLink to="/products/" class="btn">Products </NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
li.link:hover{
    background-color: red;
}

.router-link-exact-active{
    color: #12b488;
}
</style>