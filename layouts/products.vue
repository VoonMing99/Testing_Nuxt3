<script setup>

</script>

<template>
    <div>
        <header>
            <nav>
                <h1>Products Page Extra Layout</h1>
            </nav>
        </header>

        <div>
            <slot/>
        </div>

        <footer>
            <li class="link"><NuxtLink to="/">Home </NuxtLink></li>
            <li class="link"><NuxtLink to="/about">About </NuxtLink></li>
            <li class="link"><NuxtLink to="/products/">Products </NuxtLink></li>
            <li class="link"><NuxtLink to="/products/{id}">Products/id </NuxtLink></li>
        </footer>
    </div>
</template>

<style scoped>
li.link{
    text-decoration:overline; 
    display:inline;
}

li.link:hover{
    background-color: red;
}

.router-link-exact-active{
    color: #12b488;
}
</style>