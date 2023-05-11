import { reactive, ref, watch } from 'vue'

export default function () {
  const dimenciones = reactive({
    alto: 0,
    ancho: 0,
  })

  const margenes = ref()

  watch(margenes, ({ arriba, abajo, derecha, izquierda }) => {
    console.log('composable', arriba, abajo, derecha, izquierda)
  })

  return {
    dimenciones,
    margenes,
  }
}
