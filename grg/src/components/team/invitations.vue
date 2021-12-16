<template>
<div class="col-span-3 m-5 p-2 border-r-2 border-blue-100 border-l-2 border-blue-100">
    <div class="mb-10 ml-5">
      <p class="ml-5">Inbox</p>
        <table class="border-collapse w-full">
            <thead>
                <tr>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nama Team</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Kota</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Tanggal</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Waktu</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody v-for="invited in inbox" :key="invited.id">
                <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nama Team</span>
                        {{invited.teamA.name}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Kota</span>
                        {{invited.teamA.city}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Tanggal</span>
                        {{invited.dateMatch}}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Waktu</span>
                        {{invited.timeMatch}}:00
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                        <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold" v-if="invited.status=='Pending'">{{invited.status}}</span>
                        <span v-if="invited.status!='Pending'" :class="invited.status == 'accepted' ? 'uppercase rounded bg-green-400 py-1 px-3 text-xs font-bold' : 'uppercase rounded bg-red-400 py-1 px-3 text-xs font-bold'">{{invited.status}}</span>
                    </td>
                    <td v-if="invited.status != 'finish' && invited.status != 'accepted' && invited.status != 'rejected' " class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                        <button class="bg-red-400 text-gray-800 hover:bg-red-500 ml-6 py-1 px-2 rounded-md" @click="reject(invited.id)">Reject</button>
                        <button class=" bg-green-400 text-gray-800 hover:bg-green-500 ml-6 py-1 px-2 rounded-md" @click="accept(invited.id, invited.timeMatch)">Accept</button>
                    </td>
                    <td v-if="invited.status == 'finish' || invited.status == 'accepted' || invited.status == 'rejected'" class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Action</span>
                        <span>Disable</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name:'Inbox',
    computed: {
        inbox(){
            console.log(this.$store.state.inbox, "inbox");
            return this.$store.state.inbox
        }
    },
    methods: {
        reject(id){
            this.$store.dispatch('updateInvitation', {
                id, status: 'rejected', idTeam: localStorage.getItem('teamId')
            })
        },
        accept(id, timeMatch){
            this.$store.dispatch('updateInvitation', {
                id, status: 'accepted', idTeam: localStorage.getItem('teamId'), timeMatch
            })
        }
    },
    created(){
        this.$store.dispatch('getInbox', localStorage.getItem('teamId'))
    }

}
</script>

<style>

</style>