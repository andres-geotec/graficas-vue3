import { reactive, ref, watch } from 'vue'
// import usarDimenciones from './usarDimenciones'

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

    const propiedad = ref(grafica()?.propiedad)
    // console.log('propiedad inicial', propiedad.value)

    function guardarPopiedad(_propiedad) {
      grafica().propiedad = _propiedad
      // console.log('guardarPopiedad', grafica().propiedad)
    }
    watch(
      () => grafica()?.propiedad,
      n => {
        propiedad.value = n
      }
    )

    return {
      grafica,
      propiedad: propiedad,
      // propiedad: readonly(grafica().propiedad),
      guardarPopiedad,
    }
  }

  return {
    intanciarGrafica,
    borrarGrafica,
    vincular,
  }
}
