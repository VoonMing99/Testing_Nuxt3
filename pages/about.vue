<script setup>

const { data : testingAPI } = await useFetch('/api/TestingAPI?name=Event Handle API.', {
    method: 'post',
    body: { text: "This sentence is extended from post data"}
})

const { data } = await useFetch('/api/currency/MYR')

</script>

<template>
    <div>
        <h2>About</h2>
        <mousetrack v-slot="{ x, y }">
  	        Mouse coordinate is at: {{ x }}, {{ y }}
        </mousetrack>
        <!--<p>{{ data.message }}</p>-->
        <p>{{ testingAPI }}</p>
        <p>The exchange rate for USD to MYR which fetch from API: {{ data }}</p>
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