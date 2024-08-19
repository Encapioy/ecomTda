<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="relative flex flex-col m-5 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div class="flex flex-col justify-center p-8 md:p-14">
                <span class="mb-3 text-4xl font-bold">Welcome back</span>
                <span class="font-light text-gray-400 mb-8">
                    Welcome back! Please enter your details
                </span>
                <div class="py-4">
                    <span class="mb-2 text-md">Email</span>
                    <input type="text" name="email" id="email" class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500">
                </div>
                <div class="py-4">
                    <span class="mb-2 text-md">Password</span>
                    <input type="password" name="password" id="password"
                        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500">
                </div>
                <div class="flex justify-between w-full py-4">
                    <span class="font-bold text-md">Forgot password</span>
                </div>
                <button class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300 duration-300">Sign in</button>
            </div>
            <!-- <div class="relative">
                <img src="" alt="" class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover">
                <div class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                    <span class="text-white text-xl">We've benn using untitle to kick" <br>start every new project and can't <br>imagine working without it.</span>
                </div>
            </div> -->
        </div>
    </div>
</template>