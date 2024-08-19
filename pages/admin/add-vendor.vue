<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="relative flex flex-col m-5 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div class="flex flex-col justify-center p-8 md:p-14">
                <span class="mb-1 text-2xl font-semibold">Add New Vendor</span>
                <span class="w-full h-0.5 bg-black rounded-full mb-3"></span>
                <div class="py-4">
                    <span class="mb-2 text-md">Name</span>
                    <input type="text" name="name" id="name"
                        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500">
                </div>
                <div class="py-4">
                    <span class="mb-2 text-md">Product</span>
                    <input type="product" name="product" id="product"
                        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500">
                </div>
                <button
                    class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300 duration-300">Submit</button>
            </div>
        </div>
    </div>
</template>