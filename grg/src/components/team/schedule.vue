<template>
<div class="col-span-3 m-5 p-2 border-r-2 border-blue-100 border-l-2 border-blue-100">
    <div class="mb-10 ml-5">
      <p class="ml-5">Schedule</p>
        <table class="border-collapse w-full">
            <thead>
                <tr>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nama Team</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Kota</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Tanggal</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Jam</th>
                </tr>
            </thead>
            <tbody v-for="schedule in historiesByTeam" :key="schedule.id">
                <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nama Team</span>
                        {{schedule.teamB.name}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Kota</span>
                        {{schedule.teamB.city}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Tanggal</span>
                        <span>{{schedule.dateMatch}}</span>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Jam</span>
                        <span>{{schedule.timeMatch}}:00</span>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'schedule',
    computed: {
        historiesByTeam(){
            const histories = this.$store.state.historiesByTeam.filter(el => el.status == 'accepted')
            console.log(histories, 'histories');
            return histories
        }
    },
    created(){
        this.$store.dispatch('getHistoriesByTeam', localStorage.getItem('teamId'))
    }
}
</script>

<style>

</style>