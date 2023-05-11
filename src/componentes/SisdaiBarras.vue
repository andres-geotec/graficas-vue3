<script setup>
import { onMounted, ref, watch } from 'vue'
import usarGraficas from '@/composables/usarGraficas'

defineProps({})

const barras = ref(null)

function obteniendoIdPadre() {
  return barras.value.parentElement.parentElement?.id
}

onMounted(() => {
  // console.log(obteniendoIdPadre())

  const { margenes } = usarGraficas().vincular(obteniendoIdPadre())

  watch(margenes, ({ arriba, abajo, derecha, izquierda }) => {
    console.log('barras', arriba, abajo, derecha, izquierda)
  })
})
</script>

<template>
  <g
    ref="barras"
    :transform="`translate(20,20)`"
  >
    <circle
      r="10"
      fill="#AB7C94"
    />
  </g>
</template>
