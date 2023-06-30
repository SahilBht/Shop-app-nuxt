<template>
    <div>
        <div class=" grid grid-cols-4 gap-6">
            <div v-for="p in products">
                <ProductCard :product="p"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    //fetch products from api
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
       title: 'ShopApp | Merch',
       meta: [
        {name: 'description', content: 'Nuxt 3 Merch'}
       ]
    })

</script>

<style scoped>

</style>