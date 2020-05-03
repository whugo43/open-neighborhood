<template>
  <div class="home">
    <b-row class="m-3" ></b-row>

    <b-container class="d-flex justify-content-center">
      <h2>Residentes Deudores</h2>
    </b-container>
  

    <b-container class="text-left">
      <b-row class="m-3" ></b-row>
      <b-row class="mb-3" v-for="item of items" :key="item.id" style="border: solid 1px #ebe013; "> 
        <b-col  cols="1 md-1 sm-1">
          <div class="text-right">
            <b-avatar rounded="lg"></b-avatar>
          </div>
        </b-col>

        <b-col cols="10 md-10 sm-10">
          <b-container fluid>{{item.residente}}</b-container>
          <b-container fluid>Deuda: {{item.valor}}</b-container>  
        </b-col>
          
        <b-col  cols="1 md-1 sm-1">
          <b-button  variant = "primary" > Cobrar </b-button > 
        </b-col>
        
      </b-row>
    </b-container>
  </div>

</template>


<script>
     import{mapState} from 'vuex';
    export default {
        name: 'Cobrar',
       
        computed:{
          ...mapState(['items'])     
        }
    }
</script>

