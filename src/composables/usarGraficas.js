import { reactive } from 'vue'
// import usarDimenciones from './usarDimenciones'

const graficas = reactive({})

export default function (idGrafica) {
  const graficaEsxiste = _idGrafica =>
    Object.keys(graficas).includes(_idGrafica)

  function intanciarGrafica() {
    if (!graficaEsxiste()) graficas[idGrafica] = {}
  }
  intanciarGrafica()

  function borrarGrafica(_idGrafica) {
    delete graficas[_idGrafica]
  }

  return {
    graficas,
    borrarGrafica,
  }
}
