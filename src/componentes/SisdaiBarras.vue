<script setup>
import { onMounted, ref, watch } from 'vue'
import usarGraficas from '@/composables/usarGraficas'

defineProps({})

const barras = ref(null)

function obteniendoIdPadre() {
  return barras.value.parentElement.parentElement?.id
}

onMounted(() => {
  console.log(obteniendoIdPadre())

  const { propiedad } = usarGraficas().vincular(obteniendoIdPadre())

  console.log(propiedad.value)
  watch(propiedad, n => {
    console.log('barras', n)
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
