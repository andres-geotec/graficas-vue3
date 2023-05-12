<script setup>
import SisdaiGraficas from '@/componentes/SisdaiGraficas.vue'
import SisdaiBarras from '@/componentes/SisdaiBarras.vue'
import { ref } from 'vue'
import datos from '@/assets/data/datos-barras-basico.json'
import variables from '@/assets/data/variables-barras-basico.json'

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

    <SisdaiGraficas
      :margenes="{
        arriba: Number(margenes),
        abajo: Number(margenes),
        derecha: Number(margenes),
        izquierda: Number(margenes),
      }"
      :propiedad="Number(margenes)"
    >
      <SisdaiBarras
        :datos="datos"
        :variables="variables"
      />
    </SisdaiGraficas>

    <hr />

    <SisdaiGraficas> 50"></SisdaiGraficas>
  </div>
</template>
