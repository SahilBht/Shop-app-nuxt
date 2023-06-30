<template>
    <div class="card text-center">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" class="auto my-7">
            </div>
            <div class="text-left mx-8 p-7">
                <H2 class="text-4xl my-7">{{ product.title }}</H2>
                <p class="text-xl my-7">Price: ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Details:</h3>
                <p class="mb-7"> {{ product.description }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>