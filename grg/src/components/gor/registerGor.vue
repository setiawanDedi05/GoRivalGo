<template>
<div>
    <Navbar></Navbar>
  <div class="container max-w-full mx-auto md:py-24 px-6">
  <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <div class="text-center font-semibold text-black">
                        Daftar Gor
                    </div>
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Name</span>
                                <input v-model="data.namePlayer" placeholder="" type="text" class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Username</span>
                                <input v-model="data.username" placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Email</span>
                                <input v-model="data.email" placeholder="" type="email"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password</span>
                                <input v-model="data.password" placeholder="" type="password" x-model="password"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Tanggal Lahir</span>
                                <input v-model="data.date_of_birth" placeholder="" type="date"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Gender</span>
                            </div>
                            <div class="py-1">
                                <input type="radio" v-model="data.gender" class="form-radio" name="radio" value="laki-laki" />
                                <span class="px-1 text-sm text-gray-600">Laki-laki</span>
                            </div>
                            <div class="py-1">
                                <input type="radio" v-model="data.gender" class="form-radio" name="radio" value="Perempuan" />
                                <span class="px-1 text-sm text-gray-600">Perempuan</span>
                            </div>
                            <hr class="mt-5 mb-5">
                            Data Gor
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Nama Gor</span>
                                <input v-model="data.name" placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Kota</span>
                                <input v-model="data.city" placeholder="" type="text"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Harga Rental</span>
                                <input v-model="data.rent_price" placeholder="" type="number"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                            </div>
                            <button @click="daftarGor" class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                Register
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import Navbar from '../navbar.vue'
export default {
    name: 'daftarGor',
    data(){
        return {
            data: {
                username:'',
                password:'',
                email:'',
                namePlayer:'',
                name:'',
                date_of_birth:'',
                city:'',
                rent_price:'',
                time_available:'08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23',
                status:'active',
                gender:''
            }
        }
    },
    methods:{
        daftarGor(){
            this.$store.dispatch('daftarGor', this.data)
        }
    },
    components:{
        Navbar
    }
}
</script>

<style>

</style>