<template>
  <div class="flex flex-col font-sans divide-y divide-blue-500">
      <!-- home -->
      <div id="home" class="container mx-auto p-8 mb-16">
          <main class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
              <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 class="uppercase text-xl text-blue-900 font-bold leading-none tracking-wide mb-2">Kamu cari lawan team Futsal?</h2>
                  <h1 class="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Gunakan Aplikasi <span class="text-blue-900">GRG</span> untuk mencari lawan yang pas untukmu!</h1>
                  <p class="text-gray-600 leading-relaxed mb-12">teman bertambah dan skill pun meningkat!.</p>
              </div>
              <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                <img
                    class="w-full md:w-4/5 z-50"
                    src="https://ik.imagekit.io/cujeun8cplg/png-clipart-football-player-kicking-ball-futsal-indoor-football-graphy-kick-concept-sports-sport-sports-equipment-removebg-preview_xv3MZ3QAlXO.png?updatedAt=1634748388067"
                    />
              </div>
          </main>
      </div>
      <!-- daftar team -->
      <div id="team" class="container mx-auto px-8">
          <main class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
              <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                <img
                    class="w-full md:w-4/5 z-50 "
                    src="https://ik.imagekit.io/cujeun8cplg/0056a4a011d9d09-removebg-preview_Ns-dR8eFWGn.png?updatedAt=1634749784127"
                    />
              </div>
              <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 class="uppercase text-xl text-blue-900 font-bold leading-none tracking-wide mb-2">Pendaftara Team</h2>
                  <h1 class="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Ayo Kembangkan Skill dengan kami!</h1>
                  <router-link to="/register" class="bg-blue-900 hover:bg-blue-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Daftar</router-link>
              </div>
          </main>
      </div>
      <!-- daftar gor -->
      <div id="gor" class="container mx-auto p-8 mb-5">
          <main class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
              <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 class="uppercase text-xl text-blue-900 font-bold leading-none tracking-wide mb-2">Pendaftaran Gor</h2>
                  <h1 class="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">Tingkatkan Usaha Gor Mu bersama Kami!</h1>
                  <button @click="registerGor" class="bg-blue-900 hover:bg-blue-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full">Daftar!</button>
              </div>
              <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                <img
                    class="w-full md:w-4/5 z-50"
                    src="https://ik.imagekit.io/cujeun8cplg/128-1285307_fields-k-ultra-wide-football-pitch-transparent-background-removebg-preview_iCtfIf3ZZ.png?updatedAt=1634750089982"
                    />
              </div>
          </main>
      </div>
  </div>
</template>

<script>
export default {
    name: 'landingPage',
    methods:{
        registerGor(){
            this.$router.push('/registerGor')
        }
    }
}
</script>

<style>

</style>