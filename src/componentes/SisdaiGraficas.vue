<script setup>
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { idAleatorio } from '@/utils'
import usarGraficas from '@/composables/usarGraficas'

const props = defineProps({
  id: {
    type: String,
    default: () => idAleatorio(),
  },
  margenes: {
    type: Object,
    default: () => ({ arriba: 20, abajo: 20, derecha: 20, izquierda: 20 }),
  },
})

const { borrarGrafica, usarDimenciones } = usarGraficas(props.id)
const { guardarMargenes, alto, guardarAlto, ancho, guardarAncho } =
  usarDimenciones(props.id)

const { margenes } = toRefs(props)

guardarMargenes(margenes.value)
watch(margenes, guardarMargenes)

guardarAlto(0)
guardarAncho(0)

const contenedorSisdaiGraficas = ref(null)

onMounted(() => {
  guardarAncho(contenedorSisdaiGraficas.value.clientWidth)
  guardarAlto(ancho.value * 0.5)
})

onUnmounted(() => {
  borrarGrafica()
})
</script>

<template>
  <div
    :id="id"
    class="contenedor-sisdai-graficas"
    ref="contenedorSisdaiGraficas"
  >
    <h1>Hola soy el contenedor de gráficas {{ id }}</h1>

    <svg
      :width="ancho"
      :height="alto"
    >
      <g class="eje-x-arriba" />
      <g class="eje-y-derecha" />
      <slot />
      <g
        class="eje-x-abajo"
        :transform="`translate(${margenes.izquierda}, ${
          alto - margenes.abajo
        })`"
      />
      <g class="eje-y-izquierda" />
    </svg>
  </div>
</template>

<style>
.contenedor-sisdai-graficas {
  width: 100%;
  border: solid 1px tomato;
}
</style>
