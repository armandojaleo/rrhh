import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {
  store
} from './components/store';

Vue.use(VueRouter)

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.use(require('vue-moment'));

import Welcome from './components/Welcome.vue';

import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import Profile from './components/Profile.vue';

import OfferList from './components/OfferList.vue';
import OfferView from './components/OfferView.vue';

import UserList from './components/UserList.vue';
import UserCreate from './components/UserCreate.vue';
import UserEdit from './components/UserEdit.vue';

import ContractList from './components/ContractList.vue';
import ContractCreate from './components/ContractCreate.vue';
import ContractEdit from './components/ContractEdit.vue';

import EmployeeList from './components/EmployeeList.vue';
import EmployeeCreate from './components/EmployeeCreate.vue';
import EmployeeEdit from './components/EmployeeEdit.vue';

import ResourceList from './components/ResourceList.vue';
import ResourceCreate from './components/ResourceCreate.vue';
import ResourceEdit from './components/ResourceEdit.vue';

import HolidayList from './components/HolidayList.vue';
import HolidayCreate from './components/HolidayCreate.vue';
import HolidayEdit from './components/HolidayEdit.vue';

import HourRegistryList from './components/HourRegistryList.vue';
import HourRegistryCreate from './components/HourRegistryCreate.vue';
import HourRegistryEdit from './components/HourRegistryEdit.vue';

const routes = [{
    name: 'Welcome',
    path: '/',
    component: Welcome,
    meta: {
      requiresAuth: false,
      adminAuth: false,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'SignIn',
    path: '/signin',
    component: SignIn,
    meta: {
      requiresAuth: false,
      adminAuth: false,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp,
    meta: {
      requiresAuth: false,
      adminAuth: false,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'OfferList',
    path: '/offers',
    component: OfferList,
    meta: {
      requiresAuth: false,
      adminAuth: false,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'OfferView',
    path: '/offers/:id',
    component: OfferView,
    meta: {
      requiresAuth: false,
      adminAuth: false,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: true
    }
  },
  {
    name: 'UserList',
    path: '/users',
    component: UserList,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'UserCreate',
    path: '/users/create',
    component: UserCreate,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'UserEdit',
    path: '/users/:id',
    component: UserEdit,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'ContractList',
    path: '/contracts',
    component: ContractList,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'ContractCreate',
    path: '/contracts/create',
    component: ContractCreate,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'ContractEdit',
    path: '/contracts/:id',
    component: ContractEdit,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: false,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'EmployeeList',
    path: '/employees',
    component: EmployeeList,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'EmployeeCreate',
    path: '/employees/create',
    component: EmployeeCreate,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'EmployeeEdit',
    path: '/employees/:id',
    component: EmployeeEdit,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: false,
      visitorAuth: false
    }
  },
  {
    name: 'ResourceList',
    path: '/resources',
    component: ResourceList,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'ResourceCreate',
    path: '/resources/create',
    component: ResourceCreate,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'ResourceEdit',
    path: '/resources/:id',
    component: ResourceEdit,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'HolidayList',
    path: '/holidays',
    component: HolidayList,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'HolidayCreate',
    path: '/holidays/create',
    component: HolidayCreate,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'HolidayEdit',
    path: '/holidays/:id',
    component: HolidayEdit,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },

  {
    name: 'HourRegistryList',
    path: '/hourregistries',
    component: HourRegistryList,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'HourRegistryCreate',
    path: '/hourregistries/create',
    component: HourRegistryCreate,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  },
  {
    name: 'HourRegistryEdit',
    path: '/hourregistries/:id',
    component: HourRegistryEdit,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      managerAuth: true,
      employeeAuth: true,
      visitorAuth: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = localStorage.authtoken
    if (!authUser) {
      next({
        name: 'SignIn'
      })
    }
    if (to.meta.visitorAuth) {
      const userData = JSON.parse(localStorage.userdata)
      if (userData.role === 'Visitor') {
        next()
      }
    }
    if (to.meta.employeeAuth) {
      const userData = JSON.parse(localStorage.userdata)
      if (userData.role === 'Employee') {
        next()
      }
    }
    if (to.meta.managerAuth) {
      const userData = JSON.parse(localStorage.userdata)
      if (userData.role === 'Manager') {
        next()
      }
    }
    if (to.meta.adminAuth) {
      const userData = JSON.parse(localStorage.userdata)
      if (userData.role === 'Admin') {
        next()
      }
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')