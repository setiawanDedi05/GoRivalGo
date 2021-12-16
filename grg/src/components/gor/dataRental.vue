<template>
  <div class="col-span-3 m-5 p-2 border-r-2 border-blue-100 border-l-2 border-blue-100">
    <div class="mb-10 ml-5">
        <div class="pb-12">
            <h1 class="font-bold text-2xl font-heading text-gray-800">
                Data Rental
            </h1>
        </div>
        <table class="border-collapse w-full">
            <thead>
                <tr>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Team Home</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Team Away</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Tanggal</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Waktu</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Pemenang</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                </tr>
            </thead>
            <tbody v-for="rent in visitation" :key="rent.id">
                <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Team Home</span>
                        {{rent.teamA.name}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Team Away</span>
                        {{rent.teamB.name}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Tanggal</span>
                        {{rent.dateMatch}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Waktu</span>
                        {{rent.timeMatch}}:00
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Team Home</span>
                        {{rent.teamA.name}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                        <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold" v-if="rent.status=='Pending'">{{rent.status}}</span>
                        <span v-if="rent.status!='Pending'" :class="rent.status == 'accepted' ? 'uppercase rounded bg-green-400 py-1 px-3 text-xs font-bold' : 'uppercase rounded bg-red-400 py-1 px-3 text-xs font-bold'">{{rent.status}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'Data Rent',
    computed: {
        visitation(){
            const rent = this.$store.state.visitation.filter(el => el.status != 'rejected')
            return rent
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