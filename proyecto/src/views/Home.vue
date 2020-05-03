<template>
  <div class="home">
  
    <img alt="Vue logo" src="../assets/logo.png">
    <Tabla_Residente/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabla_Residente from '@/components/Tabla_Residente.vue'

export default {
  name: 'Home',
  components: {
    Tabla_Residente
  }
}
</script>
