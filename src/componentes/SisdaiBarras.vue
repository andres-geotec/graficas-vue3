<script setup>
import { onMounted, ref, toRefs, watch } from 'vue'
import usarGraficas from '@/composables/usarGraficas'
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
// watch(margenesPadre, ({ arriba, abajo, derecha, izquierda }) => {
//   console.log('barras', arriba, abajo, derecha, izquierda)
// })

onMounted(() => {
  // console.log(barras.value.parentElement)

  const { margenes } = usarGraficas().vincular(obteniendoIdPadre())
  watch(margenes, n => (margenesPadre.value = n))

  const { propiedad } = usarDimenciones(obteniendoIdPadre())

  watch(propiedad, n => {
    console.log('barras propiedad', n)
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
