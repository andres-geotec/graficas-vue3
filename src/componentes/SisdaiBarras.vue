<script setup>
import { onMounted, ref } from 'vue'

const barras = ref(null)

function obteniendoIdPadre() {
  return barras.value.parentElement.parentElement?.id
}

onMounted(() => {
  console.log(obteniendoIdPadre())
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
