<script setup>
import { onMounted, ref, toRefs, watch } from 'vue'
import usarDimenciones from '@/composables/usarDimenciones'

const props = defineProps({
  datos: {
    type: Array,
    require: true,
  },
  variables: {
    type: Array,
    require: true,
    validator(value) {
      // debe tener: id, nombre_subcategoria, color

      const validado = value.some(({ id, nombre_subcategoria, color }) => {
        return (
          id !== undefined ||
          nombre_subcategoria !== undefined ||
          color !== undefined
        )
      })

      if (!validado) {
        console.error('El objeto no cumple con las especificaciones')
      }

      return validado
    },
  },
  clave_categorias: {
    type: String,
    default: 'categoria',
  },
})

const { datos } = toRefs(props)

console.log(datos.value)

const barras = ref(null)

function obteniendoIdPadre() {
  return barras.value.parentElement.parentElement?.id
}

const margenesPadre = ref({})

onMounted(() => {
  const { margenes, alto } = usarDimenciones(obteniendoIdPadre())

  margenesPadre.value = margenes.value
  watch(margenes, n => {
    margenesPadre.value = n
    // console.log('barras margenes', n)
  })

  watch(alto, n => {
    console.log('barras alto', n)
  })
})
</script>

<template>
  <g
    ref="barras"
    :transform="`translate(${margenesPadre?.izquierda || 0},${
      margenesPadre?.arriba || 0
    })`"
  >
    <circle
      r="10"
      fill="#AB7C94"
    />
  </g>
</template>
