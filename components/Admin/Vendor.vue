<template>
    <div class="product-container my-10">

        <div class="container">

            <div class="product-box w-full">

                <div class="product-minimal">

                    <div class="product-showcase">

                        <div class="flex justify-between">
                            <h2 class="title !text-3xl">Vendors</h2>
                            <nuxt-link to="/admin/add-vendor">
                                <button
                                    class="hover:bg-black hover:text-white p-2 rounded-lg mb-6 text-black duration-300 flex items-center"><ion-icon
                                        name="add-circle-outline" class="text-2xl mr-1"></ion-icon>Add Vendor
                                </button>
                            </nuxt-link>
                        </div>


                        <div class="">

                            <div class="">

                                <div class="showcase">

                                    <a href="#" class="showcase-img-box">
                                        <img src="~/assets/images/products/clothes-1.jpg"
                                            alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img">
                                    </a>

                                    <div class="showcase-content">

                                        <a href="#">
                                            <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                                        </a>

                                        <a href="#" class="showcase-category">Clothes</a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>

</template>