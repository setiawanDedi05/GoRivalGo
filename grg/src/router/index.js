import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Gor from '../views/gor.vue'
import Team from '../views/team.vue'
import HomeTeam from '../components/team/midContentTeam.vue'
import History from '../components/team/history.vue'
import Invitations from '../components/team/invitations.vue'
import Schedule from '../components/team/schedule.vue'
import Invite from '../components/team/invite.vue'
import Dashboard from '../components/gor/dashboard.vue'
import DataRental from '../components/gor/dataRental.vue'
import DataPertandingan from '../components/gor/dataPertandingan.vue'
import NotFound from '../views/notFound.vue'
import RegisterGor from '../components/gor/registerGor.vue'
import RegisterTeam from '../components/team/registerTeam.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/registerGor',
    name:'registerGor',
    component: RegisterGor
  },
  {
    path: '/registerTeam',
    name: 'registerTeam',
    component: RegisterTeam
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/gor',
    name: 'Gor',
    component: Gor,
    children: [
      {
        path: '/',
        component: Dashboard
      },
      {
        path: 'datarental',
        component: DataRental
      },
      {
        path: 'datapertandingan',
        component: DataPertandingan
      }
    ]
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    children: [
      {
        path: '/',
        component: HomeTeam
      },
      {
        path: '/history',
        component: History
      },
      {
        path: '/invitations',
        component: Invitations
      },
      {
        path: '/schedule',
        component: Schedule
      },
      {
        path: '/invite/:id',
        component: Invite
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('token'), '======')
  if (!localStorage.getItem('token') && to.name !== 'Login' && to.name !== 'Home' && to.name !== 'registerGor' && to.name !== 'registerTeam') next({ name: 'Home' })
  else if (to.name === 'Login' && localStorage.getItem('token')) {
    if (localStorage.getItem('teamId')) next({ path: '/team/' })
    else next({path: '/gor/'})
  }
  else if (to.name === 'Register' && localStorage.getItem('token')) {
    if (localStorage.getItem('teamId')) next({ path: '/team/' })
    else next({ path: '/gor/' })
  }
  else if (to.name === 'Home' && localStorage.getItem('token')) {
    if (localStorage.getItem('teamId')) next({ path: '/team/' })
    else next({ path: '/gor/' })
  } else if (!localStorage.getItem('gorId') && to.path == '/gor') {
    next({path: '/team/'})
  } else if (!localStorage.getItem('gorId') && to.path == '/gor/datapertandingan') {
    next({ path: '/team/' })
  } else if (!localStorage.getItem('gorId') && to.path == '/gor/datarental') {
    next({ path: '/team/' })
  } else if (!localStorage.getItem('teamId') && to.path == '/team') {
    next({ path: '/gor/' })
  } else if (!localStorage.getItem('teamId') && to.path == '/team/history') {
    next({ path: '/gor/' })
  } else if (!localStorage.getItem('teamId') && to.path == '/team/invitations') {
    next({ path: '/gor/' })
  } else if (!localStorage.getItem('teamId') && to.path == '/team/schedule') {
    next({ path: '/gor/' })
  }
  else next()
})

export default router
