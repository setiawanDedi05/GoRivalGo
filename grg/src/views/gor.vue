<template>
<div class="bg-blue-300 grid grid-cols-5">
    <div class="col-span-5">
        <header class="bg-blue-300 shadow-sm w-full top-0 ">
            <div class="max-auto px-8 py-2 bg-blue-300">
                <div class="flex justify-between">
                    <div class="logo flex items-center space-x-4 mr-10">
                        <h1 class="text-white text-2xl">GRG</h1>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <Navbar></Navbar>
    <router-view class="bg-gray-200 col-span-4"></router-view>
</div>
</template>

<script>
import Navbar from '../components/sideNavbar.vue'
export default {
    name: 'Gor',
    components: {
        Navbar
    }
}
</script>

<style>

</style>