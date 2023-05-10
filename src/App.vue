<script setup>
import SisdaiGraficas from '@/componentes/SisdaiGraficas.vue'
import SisdaiBarras from '@/componentes/SisdaiBarras.vue'
import { ref } from 'vue'

const margenes = ref(20)
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
        arriba: margenes,
        abajo: margenes,
        derecha: margenes,
        izquierda: margenes,
      }"
    >
      <SisdaiBarras />
    </SisdaiGraficas>

    <hr />

    <SisdaiGraficas>
      <SisdaiBarras />
    </SisdaiGraficas>
  </div>
</template>
