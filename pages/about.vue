<template>
    <div>
        <h1>About Shop-app</h1>
        <p>Shop-app is a dynamic and user-friendly e-commerce application that aims to provide a seamless shopping experience. With a focus on simplicity and efficiency, our platform allows users to browse a wide range of products, add them to their cart, and proceed to checkout effortlessly.Shop-app is a dynamic and user-friendly e-commerce application that aims to provide a seamless shopping experience. With a focus on simplicity and efficiency, our platform allows users to browse a wide range of products, add them to their cart, and proceed to checkout effortlessly.Shop-app is a dynamic and user-friendly e-commerce application that aims to provide a seamless shopping experience. With a focus on simplicity and efficiency, our platform allows users to browse a wide range of products, add them to their cart, and proceed to checkout effortlessly.</p>
        <br><br>
        <h3>Our Mission</h3>
        <p>At Shop-app, our mission is to revolutionize the way people shop online by offering a highly intuitive and visually appealing interface. We believe that online shopping should be accessible to everyone, and our goal is to create a platform that is easy to navigate, enjoyable to use, and delivers a delightful shopping experience.At Shop-app, our mission is to revolutionize the way people shop online by offering a highly intuitive and visually appealing interface. We believe that online shopping should be accessible to everyone, and our goal is to create a platform that is easy to navigate, enjoyable to use, and delivers a delightful shopping experience.</p>
        <br><br>
        <h3>How It Works</h3>
        <p>Shop-app leverages the power of the FakeStoreAPI, a simulated e-commerce API, to fetch and display product data. The integration of HTML, CSS, Vue.js, and Nuxt.js enables us to create a responsive and dynamic user interface that adapts to various screen sizes and devices.

        By providing an extensive product catalog, organized into different categories, users can effortlessly explore and find the items they need. Our intelligent search and filtering functionalities further enhance the browsing experience, allowing users to discover products based on their preferences.

        Once users have found the desired products, they can easily add them to their cart and proceed to the checkout process. Shop-app ensures a secure and streamlined transaction process, providing a smooth journey from product selection to purchase completion.</p>
        <br><br>
        <h3>Get Involved</h3>
        <p>We are constantly working to improve and enhance the Shop-app experience. If you have any feedback, suggestions, or ideas for new features, we would love to hear from you. Feel free to reach out to us via the contact information provided on our website or by creating an issue on our GitHub repository.

        Join us on this exciting journey as we strive to redefine online shopping and create an e-commerce platform that puts user satisfaction at the forefront. Shop-app welcomes you to a world of convenience, quality, and delightful shopping experiences.</p>
        <br>
        <br>
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
    h1 {
        margin-bottom: 30px;
        font-size: 60px;
    }
    h3 {
        margin-bottom: 30px;
        font-size: 30px;
    }
    p {
        margin: 20px 0;
    }
</style>