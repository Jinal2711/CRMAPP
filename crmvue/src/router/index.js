import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navigation from '@/components/Navigation'

import CreateProduct from '@/components/Products/CreateProduct'

import ViewProduct from '@/components/Products/ViewProduct'

import ViewFamily from '@/components/Family/viewFamily'
import CreateFamily from '@/components/Family/createFamily'

import ViewUnits from '@/components/Units/viewUnits'
import CreateUnit from '@/components/Units/createUnit'

import ViewTax from '@/components/TaxRate/viewTaxRate'
import CreateTax from '@/components/TaxRate/createTax'

import AddClient from '@/components/Clients/addClient'
import ViewClient from '@/components/Clients/viewClient'

import SignUp from '@/components/Login/signUp'
import Login from '@/components/Login/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/createProduct',
      name: 'create-product',
      component: CreateProduct
    },
    {
      path: '/editProduct/:id',
      name: 'edit-product',
      component: CreateProduct
    },
    {
      path: '/viewProduct',
      name: 'view-product',
      component: ViewProduct
    },
    {
      path: '/viewFamily',
      name: 'view-family',
      component: ViewFamily
    },
    {
      path: '/createFamily',
      name: 'create-family',
      component: CreateFamily
    },
    {
      path: '/editFamily/:id',
      name: 'edit-family',
      component: CreateFamily
    },
    {
      path: '/viewUnits',
      name: 'view-units',
      component: ViewUnits
    },
    {
      path: '/createUnit',
      name: 'create-unit',
      component: CreateUnit
    },
    {
      path: '/editUnit/:id',
      name: 'edit-unit',
      component: CreateUnit
    },
    {
      path: '/viewTaxRate',
      name: 'view-tax',
      component: ViewTax
    },
    {
      path: '/createTaxRate',
      name: 'create-tax',
      component: CreateTax
    },
    {
      path: '/editTax/:id',
      name: 'edit-tax',
      component: CreateTax
    },
    {
      path: '/addClient',
      name: 'add-client',
      component: AddClient
    },
    {
      path: '/editClient/:id',
      name: 'edit-client',
      component: AddClient
    },
    {
      path: '/viewClient',
      name: 'view-client',
      component: ViewClient
    },
    {
      path: '/signUp',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
