<script setup>

</script>

<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products/" class="font-bold">Products</NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot/>
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li class="link"><NuxtLink to="/">Home </NuxtLink></li>
                <li class="link"><NuxtLink to="/about">About </NuxtLink></li>
                <li class="link"><NuxtLink to="/products/" class="btn">Products </NuxtLink></li>
                <li class="link"><NuxtLink to="/products/error">ErrorProduct</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
li.link{
    display:inline;
}

li.link:hover{
    background-color: red;
}

.router-link-exact-active{
    color: #0061f3;
}
</style>