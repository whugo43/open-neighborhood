<template>
  <b-container md-6>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </b-container>
</template>

<script>
    import{mapState} from 'vuex';
    export default {
        name: 'Tabla_Residente',
        computed:{
            ...mapState(['fields']),
            ...mapState(['items'])
            
      
        }
    }
  
</script>
