<template>
<nav class="relative select-none bg-blue-900 lg:flex lg:items-stretch w-full">
  <div class="flex flex-no-shrink items-stretch h-12">
    <div class="pl-4 flex items-center">
        <router-link to='/' class="flex-no-grow flex-no-shrink relative px-2 leading-normal text-white no-underline flex items-center">
        <!--Icon from: http://www.potlabicons.com/ -->
            <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            class="float-left"
            fill="none"
            >
            <circle
                cx="12.735"
                cy="12"
                r="7"
                stroke="#ffffff"
                stroke-width="1.5"
            />
            <circle cx="9.735" cy="10.277" r="1" fill="#ffffff" />
            <circle cx="15.735" cy="10.277" r="1" fill="#ffffff" />
            <path
                stroke="#ffffff"
                stroke-linecap="round"
                d="M15.735 14.147l-.049.04a4.631 4.631 0 01-5.951-.04"
                style="animation: happy 3s infinite linear"
                stroke-dasharray="100"
            />
            </svg>
            Go Rival Go
            </router-link>
      </div>
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <router-link to='/login' class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'Login' &&  !account.token ">Masuk</router-link>
      <router-link to="/registerTeam" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'registerTeam' && $route.name != 'registerGor' && !account.token">Daftar Team</router-link>
      <router-link to="/registerGor" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'registerTeam' && $route.name != 'registerGor' && !account.token">Daftar Gor</router-link>
      <router-link to='/team' class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'registerTeam' && $route.name != 'registerGor' && $route.name != 'Home' && $route.name != 'Login'">Home</router-link>
      <router-link to='/history' class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'registerTeam' && $route.name != 'registerGor' && $route.name != 'Home' && $route.name != 'Login'">Riwayat</router-link>
      <router-link to='/schedule' class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'registerTeam' && $route.name != 'registerGor' && $route.name != 'Home' && $route.name != 'Login'">Jadwal</router-link>
      <router-link to='/invitations' class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if="$route.name != 'registerTeam' && $route.name != 'registerGor' && $route.name != 'Home' && $route.name != 'Login'">Invitation</router-link>
      <button @click="logout" class="flex-no-grow  w-full flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-blue-400" v-if=" $route.name != 'registerTeam' && $route.name != 'registerGor' && $route.name != 'Home' && $route.name != 'Login'">Logout</button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        account(){
            return this.$store.state.account
        }
    },
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
        this.$router.push({name : 'Home'})
      }
    }
}
</script>

<style>

</style>