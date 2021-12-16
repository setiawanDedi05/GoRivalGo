<template>
  <div class="grid grid-cols-2 w-full pt-5">
  <div class="flex-1 m-5 relative h-32 rounded bg-green-200 shadow">
      <div class="bg-yellow-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
          <i class="fas fa-sign inline-block" style="font-size: 32px"></i>
      </div>

      <div class="float-right top-0 right-0 m-3">
          <div class="text-right text-sm">Total Kunjungan</div>
          <div class="text-right text-3xl">{{totalVisiting}}</div>
      </div>
  </div>

  <div class="flex-1 m-5 relative rounded bg-green-200 shadow h-32">
      <div class="bg-green-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
          <i class="fas fa-money-check-alt size-7x inline-block" style="font-size: 32px"></i>
      </div>

      <div class="float-right top-0 right-0 m-3">
          <div class="text-right text-sm">Total Pendapatan</div>
          <div class="text-right text-3xl">{{totalPendapatan}}</div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'dashboard',
    computed:{
        profileGor(){
            return this.$store.state.profileGor
        },
        totalPendapatan(){
            return this.totalVisiting * this.profileGor.rent_price
        },
        totalVisiting(){
            const visiting = this.visitation.filter(el => el.status == 'finish')
            return visiting.length
        },
        visitation(){
            return this.$store.state.visitation
        }
    },
    created(){
        this.$store.dispatch('getProfileGor', localStorage.getItem('gorId'))
        this.$store.dispatch('getDataVisitation', localStorage.getItem('gorId'))
    }
}
</script>

<style>

</style>