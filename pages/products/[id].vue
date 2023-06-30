<template>
    <div>
        <!-- <head>
            <title>ShopApp | {{ product.title }}</title>
            <meta name="description" :content="product.description" />
        </head> -->
        <ProductDetails :product="product"></ProductDetails>
    </div>
</template>

<script setup>
    
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const { data: product } = await useFetch(uri)

    if(!product.value){
        throw createError({statusCode: 420, statusMessage: 'Product Ni milra *wink*', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })

    // useHead({
    //     title: "ShopApp | " + product.title,
    //     meta: [
    //         {name: "description", content: product.description}
    //     ]
    // })
    
</script>

<style scoped>

</style>