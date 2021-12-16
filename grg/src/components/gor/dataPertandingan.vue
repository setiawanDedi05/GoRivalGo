<template>
  <div class="w-full bg-gray-200">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="pb-12">
            <h1 class="font-bold text-2xl font-heading text-gray-800">
                Data Pertandingan           
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="match in visitation" :key="match.id" class="w-full bg-blue-300 rounded-lg sahdow-lg p-5 flex flex-col justify-center items-center">
                <div class="grid grid-cols-7 items-center">
                    <div class="mb-8 col-span-3">
                        <span class="text-center uppercase">{{match.teamA.name}}</span>
                        <img class="object-center object-cover rounded-full h-36 w-36" :src="match.teamA.imgUrl" alt="photo">
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/cujeun8cplg/png-transparent-vs-showdown-competition-ultimate-pk-thumbnail-removebg-preview_X9KSwHA5A.png?updatedAt=1635968496601">
                    </div>
                    <div class="mb-8 col-span-3">
                        <span class="text-center uppercase">{{match.teamB.name}}</span>
                        <img class="object-center object-cover rounded-full h-36 w-36" :src="match.teamB.imgUrl" alt="photo">
                    </div>
                </div>
                <div class="border-t-2 w-full border-gray-300 py-2">
                    <div>
                        <p class="text-md font-bold mb-2"><i class="fas fa-table"></i> {{match.dateMatch}}</p>
                        <p class="text-md font-bold mb-2"><i class="far fa-clock"></i> {{match.timeMatch}}:00</p>
                    </div>
                    <div v-if="match.status == 'finish'">
                        <p class="text-md uppercase font-bold mb-2"><i class="fas fa-trophy"></i> {{match.winner.name}}</p>
                    </div>
                    <div v-if="match.status != 'finish'" class="text-center mt-5">
                            <select v-model="winnerId" class="w-64 p-2 mb-5 rounded-lg">
                                <option value="">[pilih pemenang]</option>
                                <option :value="match.teamIdA">{{match.teamA.name}}</option>
                                <option :value="match.teamIdB">{{match.teamB.name}}</option>
                            </select>
                        <button @click="updateTheWinner(match.id)" :disabled="match.dateMatch != tanggal && match.timeMatch != hours" :class="match.dateMatch == tanggal && match.timeMatch == hours ? 'w-64 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600' : 'w-64 bg-gray-500 text-white rounded-lg p-2 '">Update Pemenang</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'DataPertandingan',
    data(){
        return {
            tanggal : new Date().toISOString().split('T')[0],
            jam : String(new Date().getHours()),
            winnerId: ''
        }
    },
    computed: {
        hours(){
            if(this.jam.length === 1){
                return '0'+this.jam
            }
            return this.jam
        },
        visitation(){
            const rent = this.$store.state.visitation.filter(el => el.status != 'rejected')
            return rent
        }
    },
    methods:{
        updateTheWinner(id){
            this.$store.dispatch('updateTheWinner', {id: id, winnerId : this.winnerId})
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