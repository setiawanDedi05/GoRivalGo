<template>
<div>
<aside class="col-span-4 bg-blue-300 h-screen w-60">
  <div class="mt-5 flex flex-col">
      <router-link to='/gor/' class="text-gray-600 text-left bg-blue-300 hover:bg-gray-200 w-full p-2 my-2 ">
        Home
      </router-link>
    
      <router-link to='/gor/datarental' class="text-gray-600 text-left  bg-blue-300 hover:bg-gray-200 w-full p-2 my-2 ">
        Data Rental
      </router-link>

      <router-link to='/gor/datapertandingan' class="text-gray-600 text-left bg-blue-300 hover:bg-gray-200 w-full p-2 my-2 ">
        Data Pertandingan
      </router-link>

      <button @click="logout" class="text-gray-600 text-left bg-blue-300 hover:bg-gray-200 w-full p-2 my-2 ">
        Logout
      </button>
  </div>
</aside>
</div>
</template>

<script>
export default {
  name: 'sideNavbar',
  methods:{
    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('gorId')
        localStorage.removeItem('teamId')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        localStorage.removeItem('id')
        const data = {
          token:'',
          gorId:'',
          teamId:'',
          username:'',
          role:'',
          id:''
        }
        this.$store.commit('SET_ACCOUNT', data)
        this.$swal.fire({
                        position: 'top-middle',
                        width: 300,
                        height: 300,
                        icon: 'success',
                        title: 'Success Logout',
                        showConfirmButton: false,
                        timer: 1500
                    })
        this.$router.push('/')
      }
  }
}
</script>

<style>

</style>