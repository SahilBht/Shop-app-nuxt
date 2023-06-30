<template>
    <div>
        <h2>Nigga's About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo labore nulla quis aperiam? Aut, quibusdam ab repellat cum dolorem esse.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo labore nulla quis aperiam? Aut, quibusdam ab repellat cum dolorem esse.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/junky?name=Sahil', {
        method: 'post',
        body: { age: 21}
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 30px;
        font-size: 40px;
    }
    p {
        margin: 20px 0;
    }
</style>