<script setup>
import SisdaiGraficas from '@/componentes/SisdaiGraficas.vue'
import SisdaiBarras from '@/componentes/SisdaiBarras.vue'
import { ref } from 'vue'

const margenes = ref(30)
</script>

<template>
  <div>
    <input
      id="margenes"
      type="range"
      v-model="margenes"
    />
    <label for="margenes">{{ margenes }}</label>

    <hr />
    <!-- :margenes="{
        arriba: margenes,
        abajo: margenes,
        derecha: margenes,
        izquierda: margenes,
      }" -->

    <SisdaiGraficas :propiedad="Number(margenes)">
      <SisdaiBarras />
    </SisdaiGraficas>

    <hr />

    <SisdaiGraficas></SisdaiGraficas>
  </div>
</template>
