<template>
  <div class="col-span-3 m-5 p-2 border-r-2 border-blue-100 border-l-2 border-blue-100">
    <div class="mb-10 ml-5">
      <p class="ml-5 mb-10">Proses undang</p>
      <div class="grid grid-cols-3">
        <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
            <img :src="profileTeam.imgUrl" class="w-16 md:w-32 bg-white -mt-10 rounded-md overflow-hidden">
            <div class="w-16 md:w-32  -mt-10 overflow-hidden">
                <div class="py-2 text-center font-bold bg-blue-400 uppercase tracking-wide text-white"><span class=" p-1">{{profileTeam.name}}</span></div>
            </div>
        </div>
        <div><img src="https://ik.imagekit.io/cujeun8cplg/png-transparent-vs-showdown-competition-ultimate-pk-thumbnail-removebg-preview_X9KSwHA5A.png?updatedAt=1635968496601"></div>
        <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
            <img :src="teamRival.imgUrl" class="w-16 md:w-32 bg-white -mt-10 rounded-md overflow-hidden">
            <div class="w-16 md:w-32  -mt-10 overflow-hidden">
                <div class="py-2 text-center font-bold bg-blue-400 uppercase tracking-wide text-white"><span class="bg-blue-400 p-1">{{teamRival.name}}</span></div>
            </div>
        </div>
        </div>
        <p>Silahkan Pilih Gor</p>
        <hr>
      <div class="grid grid-cols-2">
        <div class="w-full p-8 flex justify-center font-sans" v-for="gor in gors" :key="gor.id">
            <div class="rounded-sm shadow-2xl p-2">
                <div class="flex flex-col">
                    <img src="https://ik.imagekit.io/cujeun8cplg/128-1285307_fields-k-ultra-wide-football-pitch-transparent-background-removebg-preview_e8VFLuyK5.png?updatedAt=1634865901175" class="rounded-full" />
                    <h3 class="text-sm">{{gor.name}}</h3>
                </div>
            <div class="text-sm mt-2">
                <div class="rounded mt-1 p-2 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    Rp. {{gor.rent_price}}
                </div>
            <div class="p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Tanggal <input type="date" class="p-2 rounded-sm" v-model="dateChoose">
            </div>
            <div class="p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                <div class="text-grey-darker mt-2 ml-2 flex justify-between items-start">
                    <select class="p-2" v-model="jam" :disabled="!dateChoose">
                        <option>Pilih Jam</option>
                        <option v-for="hour in gor.time_available" :key="hour" :value="hour">{{hour}}:00</option>
                    </select>
                </div>
            </div>
            <button :disabled="!teamRival.id" class="mt-3 text-white rounded-sm bg-blue-400 hover:bg-blue-500 w-full p-2" @click="addInvitations(gor.id)">Pilih</button>
        </div>
        </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'Invite',
    data () {
        return {
            dateChoose: '',
            jam: 'Pilih Jam'
        }
    },
    watch : {
        dateChoose: function(to, from){
            if(to !== from ){
                if(new Date(to).getTime() < new Date().getTime()){
                    this.$swal.fire({
                        position: 'top-middle',
                        width: 300,
                        height: 300,
                        icon: 'error',
                        title: 'Tanggal Telah Lampau',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.dateChoose = ''
                }else{
                    this.$store.dispatch('getHistoriesByDate', this.dateChoose)
                }
            } 
            this.$store.dispatch('getHistoriesByDate', this.dateChoose)
            this.$store.dispatch('getGor')
        }
    },
    computed: {
        profileTeam(){
            return this.$store.state.profileTeam
        },
        teamRival(){
            return this.$store.state.teamRival
        },
        gors(){
            let gors = this.$store.state.gors.map(el => {
                console.log(typeof(el.time_available));
                if(typeof(el.time_available) === 'string') {
                    el.time_available = el.time_available.split(',')
                }
                return el    
            })
            
            gors = gors.map(el => {
                this.historiesByDate.forEach(el2 => {
                    el.time_available = el.time_available.filter(Element => !Element.includes(el2.timeMatch));
                })
                return el
            })
            console.log(this.historiesByDate, "[][][]");
            console.log(gors, '00000');
            return gors
        },
        historiesByDate(){
            return this.$store.state.historiesByDate
        }
    },
    methods: {
        addInvitations(id){
            this.$store.dispatch('addInvitations', {
                teamIdA: localStorage.getItem('id'),
                teamIdB: this.$route.params.id,
                gorId: id,
                dateMatch: this.dateChoose,
                timeMatch: this.jam,
                status: 'Pending'
            })
        }
    },
    created(){
        this.$store.dispatch('getTeamRival', this.$route.params.id)
        this.$store.dispatch('getGor')
    }
}
</script>

<style>

</style>