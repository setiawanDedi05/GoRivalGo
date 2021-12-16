import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000/'
export default new Vuex.Store({
  state: {
    account: {},
    profileTeam: {},
    profileGor: {},
    histories: [],
    teams: [],
    teamRival: {},
    gors: [],
    historiesByDate: [],
    historiesByTeam: [],
    inbox: [],
    news: [],
    visitation: []
  },
  mutations: {
    SET_ACCOUNT(state, payload) {
      state.account = payload
    },
    SET_PROFILETEAM(state, payload) {
      state.profileTeam = payload
    },
    SET_PROFILEGOR(state, payload) {
      state.profileGor = payload
    },
    SET_HISTORIES(state, payload) {
      state.histories = payload
    },
    SET_TEAMS(state, payload) {
      state.teams = payload
    },
    SET_TEAMRIVAL(state, payload) {
      state.teamRival = payload
    },
    SET_GORS(state, payload) {
      state.gors = payload
    },
    SET_HISTORIESBYDATE(state, payload) {
      state.historiesByDate = payload
    },
    SET_HISTORIESBYTEAM(state, payload) {
      state.historiesByTeam = payload
    },
    SET_INBOX(state, payload) {
      state.inbox = payload
    },
    SET_NEWS(state, payload) {
      state.news = payload
    },
    SET_VISITATION(state, payload) {
      state.visitation = payload
    }
  },
  actions: {
    login({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/players/signin',
        data: {
          username: payload.username,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Vue.swal.fire({
            position: 'top-middle',
            width: 300,
            height: 300,
            icon: 'success',
            title: 'Success Login',
            showConfirmButton: false,
            timer: 1500
          })
          commit('SET_ACCOUNT', data)
          localStorage.setItem('token', data.token)
          if (data.gorId) {
            localStorage.setItem('gorId', data.gorId)
          }
          if (data.teamId) {
            localStorage.setItem('teamId', data.teamId)
          }
          localStorage.setItem('role', data.role)
          localStorage.setItem('id', data.id)
          localStorage.setItem('username', data.username)
          console.log(data);
          if (data.teamId) {
            router.push('/team')
          } else if (data.gorId) {
            router.push('/gor')
          }
        }).catch((err) => {
          console.log(err)
        });
    },
    getProfile({ commit }, id) {
      axios({
        method: "GET",
        url: `teams/${id}`,
      })
        .then(({ data }) => {
          console.log("berhasil");
          commit('SET_PROFILETEAM', data.result)
        })
        .catch((err) => console.log(err));
    },
    getHistories({ commit }, id) {
      axios({
        method: "GET",
        url: `/teams/histories/${id}`,
      })
        .then(({ data }) => {
          commit('SET_HISTORIES', data.result)
        })
        .catch((err) => console.log(err));
    },
    getTeams({commit}) {
      axios({
        method: "GET",
        url: "teams",
      })
        .then(({ data }) => {
          commit('SET_TEAMS', data.result)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTeamRival({ commit }, id) {
      axios({
        method: 'GET',
        url:`/teams/${id}`
      })
        .then(({ data }) => {
          commit('SET_TEAMRIVAL', data.result)
          router.push(`/invite/${id}`)
        }).catch((err) => {
          console.log(err);
        });
    },
    getGor({ commit }) {
      axios({
        method: 'GET',
        url:'/gors'
      })
        .then(({data}) => {
          commit('SET_GORS', data.result)
        }).catch((err) => {
          console.log(err);
        });
    },
    getHistoriesByDate({ commit }, date) {
      axios({
        method: 'GET',
        url: `/invitations/${date}`
      })
        .then(({data}) => {
          commit('SET_HISTORIESBYDATE', data.result)
        }).catch((err) => {
          console.log(err);
        });
    },
    getHistoriesByTeam({ commit }, id) {
      console.log(id, "masuk");
      axios({
        method: 'GET',
        url: `/invitations/${id}/schedule`
      })
      .then(({ data }) => {
          console.log(data, "masuk");
          commit('SET_HISTORIESBYTEAM', data.result)
        }).catch((err) => {
          console.log(err);
        });
    },
    getInbox({ commit }, id) {
      axios({
        method: 'GET',
        url: `/invitations/${id}/inbox`
      })
        .then(({ data }) => {
          console.log(data, "masuk");
          commit('SET_INBOX', data.result)
        }).catch((err) => {
          console.log(err);
        });
    },
    addInvitations({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/invitations',
        data: payload
      })
        .then(({ data }) => {
          Vue.swal.fire({
            position: 'top-middle',
            width: 300,
            height: 300,
            icon: 'success',
            title: 'Success Invite',
            showConfirmButton: false,
            timer: 1500
          })
          this.dispatch('getHistories', payload.teamIdA)
          router.push('/team')
        }).catch((err) => {
          console.log(err);
        });
    },
    updateInvitation({ commit }, payload) {
      console.log(payload);
      axios({
        method: 'PATCH',
        url: `/invitations/${payload.id}`,
        data: {
          status: payload.status,
          timeMatch: payload.timeMatch
        }
      })
        .then(({ data }) => {
          Vue.swal.fire({
            position: 'top-middle',
            width: 300,
            height: 300,
            icon: 'success',
            title: 'Success Update Invitation',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(data);
          this.dispatch('getInbox', payload.idTeam)
          // router.push('/schedule')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getNews({ commit }) {
      axios({
        method: "GET",
        url: "/news",
      })
        .then(({ data }) => {
          commit('SET_NEWS', data.news.response)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataVisitation({ commit }, id) {
      axios({
        method: 'GET',
        url:`/invitations/visitation/${id}`
      })
        .then(({data}) => {
          console.log(data.result)
          commit('SET_VISITATION', data.result)
        }).catch((err) => {
          console.log(err);
        });
    },
    getProfileGor({ commit }, id) {
      axios({
        method: 'GET',
        url:`/gors/${id}`
      })
        .then(({ data }) => {
          console.log(data);
          commit('SET_PROFILEGOR', data.result)
        }).catch((err) => {
          console.log(err);
        });
    },
    updateTheWinner({commit}, payload) {
      axios({
        method: 'PATCH',
        url: `/invitations/${payload.id}/theWinner`,
        data: {
          winnerId : payload.winnerId
        }
      })
        .then(({ data }) => {
          Vue.swal.fire({
            position: 'top-middle',
            width: 300,
            height: 300,
            icon: 'success',
            title: 'Success Update The Winner',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(data)
        }).catch((err) => {
          console.log(err);
        });
    },
    daftarGor({ commit }, payload) {
      console.log(payload);
      axios({
        method: 'POST',
        url: '/gors',
        data: payload
      })
        .then(({ data }) => {
          Vue.swal.fire({
            position: 'top-middle',
            width: 300,
            height: 300,
            icon: 'success',
            title: 'Success Register Gor',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/login')
          console.log(data)
        }).catch((err) => {
          console.log(err);
        });
    },
    daftarTeam({ commit }, payload) {
      const newData = new FormData();
      newData.append("imgUrl", payload.imgUrl);
      newData.append("name", payload.name);
      newData.append("gender", payload.gender);
      newData.append("namePlayer", payload.namePlayer);
      newData.append("city", payload.city);
      newData.append("username", payload.username);
      newData.append("email", payload.email);
      newData.append("password", payload.password);
      newData.append("date_of_birth", payload.date_of_birth);
      console.log(newData);
      axios({
        method: 'POST',
        url: '/teams',
        data: newData
      })
        .then(({ data }) => {
          Vue.swal.fire({
            position: 'top-middle',
            width: 300,
            height: 300,
            icon: 'success',
            title: 'Success Register Team',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/login')
        }).catch((err) => {
          console.log(err);
        });
    }
  },
  modules: {
  }
})
