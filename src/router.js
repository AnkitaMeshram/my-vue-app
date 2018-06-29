import Vue from 'vue'
import Router from 'vue-router'
import Overview from './components/Overview/overview.vue'
import Account from './components/Account/account.vue'
import Investment from './components/Investments/investment.vue'
import Info from './components/Info/info.vue'
import Loan from './components/Loans/loan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/investment',
      name: 'investment',
      component: Investment
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan
    }
  ]
})