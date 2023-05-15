<script setup>
import SisdaiGraficas from '@/componentes/SisdaiGraficas.vue'
import SisdaiBarras from '@/componentes/SisdaiBarras.vue'
import { ref } from 'vue'
import datos from '@/assets/data/datos-barras-basico.json'
import variables from '@/assets/data/variables-barras-basico.json'

const margen = ref(30)
</script>

<template>
  <div>
    <input
      id="margenes"
      type="range"
      v-model="margen"
    />
    <label for="margenes">margen: {{ margen }}</label>

    <hr />

    <SisdaiGraficas
      :margenes="{
        arriba: Number(margen),
        abajo: Number(margen),
        derecha: Number(margen),
        izquierda: Number(margen),
      }"
    >
      <SisdaiBarras
        :datos="datos"
        :variables="variables"
      />
    </SisdaiGraficas>

    <hr />

    <SisdaiGraficas>
      <SisdaiBarras
        :datos="datos"
        :variables="variables"
      />
    </SisdaiGraficas>
  </div>
</template>
