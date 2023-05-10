<script setup>
import { onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'

const props = defineProps({
  margenes: {
    type: Object,
    default: () => ({ arriba: 20, abajo: 20, derecha: 20, izquierda: 20 }),
  },
})

const { margenes } = toRefs(props)
watch(margenes, ({ arriba, abajo, derecha, izquierda }) => {
  console.log(arriba, abajo, derecha, izquierda)
})

const contenedorSisdaiGraficas = ref(null)

const dimenciones = reactive({
  alto: 0,
  ancho: 0,
})

onMounted(() => {
  // console.log(contenedorSisdaiGraficas.value.clientWidth)
  console.log(margenes.value)

  dimenciones.ancho = contenedorSisdaiGraficas.value.clientWidth
  dimenciones.alto = dimenciones.ancho * 0.5

  // console.log(dimenciones.ancho, dimenciones.alto)
})

onUnmounted(() => {})
</script>

<template>
  <div
    class="contenedor-sisdai-graficas"
    ref="contenedorSisdaiGraficas"
  >
    <h1>Hola soy el contenedor de gráficas</h1>

    <svg
      :width="dimenciones.ancho"
      :height="dimenciones.alto"
    >
      <slot />
    </svg>
  </div>
</template>

<style>
.contenedor-sisdai-graficas {
  width: 100%;
  border: solid 1px tomato;
}
</style>
