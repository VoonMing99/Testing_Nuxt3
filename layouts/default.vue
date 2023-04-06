<script setup>

</script>

<template>
    <div>
        <header>
            <nav>
                <li class="link"><NuxtLink to="/">Home </NuxtLink></li>
                <li class="link"><NuxtLink to="/about">About </NuxtLink></li>
                <li class="link"><NuxtLink to="/products/">Products </NuxtLink></li>
            </nav>
        </header>

        <div>
            <slot/>
        </div>
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