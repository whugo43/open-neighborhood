import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: ['residente', 'tipo_pago', 'valor','mes'],
    items:[
    {residente:'Hugo Wong', tipo_pago:'Efectivo',valor:150,mes:'Enero'},
    {residente:'Guillermo Bernal', tipo_pago:'Efectivo',valor:140,mes:'Febrero'},
    {residente:'Karen Bermudes', tipo_pago:'Efectivo',valor:130,mes:'Marzo'},
    {residente:'Eduardo Ortiz', tipo_pago:'Efectivo',valor:120,mes:'Abril'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
