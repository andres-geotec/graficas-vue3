<script setup>
import { onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'
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
  propiedad: { type: Number, default: 0 },
})

const { borrarGrafica, usarDimenciones } = usarGraficas(props.id)
const { guardarPropiedad, guardarMargenes, alto, guardarAlto } =
  usarDimenciones(props.id)

const { propiedad, margenes } = toRefs(props)
guardarPropiedad(propiedad.value)
watch(propiedad, guardarPropiedad)

guardarMargenes(margenes.value)
watch(margenes, guardarMargenes)

guardarAlto(0)

const contenedorSisdaiGraficas = ref(null)

const dimenciones = reactive({
  alto: undefined,
  ancho: 0,
})

onMounted(() => {
  dimenciones.ancho = contenedorSisdaiGraficas.value.clientWidth
  dimenciones.alto = dimenciones.ancho * 0.5
  guardarAlto(dimenciones.ancho * 0.5)

  // console.log(dimenciones.ancho, dimenciones.alto)
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
    <h1>Hola soy el contenedor de gráficas</h1>

    <svg
      :width="dimenciones.ancho"
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
      >
        <rect
          height="20"
          width="20"
          fill="#AB7C94"
        />
      </g>
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
