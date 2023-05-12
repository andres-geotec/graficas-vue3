import { reactive, readonly, ref, watch } from 'vue'

const graficas = reactive({})

export default function () {
  const graficaEsxiste = _idGrafica =>
    Object.keys(graficas).includes(_idGrafica)

  function intanciarGrafica(_idGrafica) {
    if (!graficaEsxiste(_idGrafica)) graficas[_idGrafica] = reactive({})
  }

  function borrarGrafica(_idGrafica) {
    delete graficas[_idGrafica]
  }

  function vincular(_idGrafica) {
    const grafica = () => graficas[_idGrafica]

    const margenes = ref(grafica()?.margenes)
    // console.log('margenes inicial', margenes.value)
    function guardarMargenes(_margenes) {
      grafica().margenes = _margenes
      // console.log('guardarMargenes', grafica().margenes)
    }
    watch(
      () => grafica()?.margenes,
      n => (margenes.value = n)
    )

    const dimenciones = ref(grafica()?.dimenciones)
    function guardarDimenciones(_dimenciones) {
      grafica().dimenciones = _dimenciones
    }
    watch(
      () => grafica()?.dimenciones,
      n => (dimenciones.value = n)
    )

    return {
      grafica,
      guardarMargenes,
      margenes: readonly(margenes),
      guardarDimenciones,
      dimenciones: readonly(dimenciones),
    }
  }

  return {
    intanciarGrafica,
    borrarGrafica,
    vincular,
  }
}
