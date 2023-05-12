import { computed, readonly } from 'vue'
import usarGraficas from './usarGraficas'

export default function (idGrafica) {
  const { grafica } = usarGraficas().vincular(idGrafica)

  const alto = computed(() => grafica()?.alto)
  function guardarAlto(_alto) {
    grafica().alto = _alto
  }

  const margenes = computed({
    set: _margenes => (grafica().margenes = _margenes),
    get: () => grafica()?.margenes,
  })

  const propiedad = computed(() => grafica()?.propiedad)
  function guardarPropiedad(_propiedad) {
    grafica().propiedad = _propiedad
  }

  return {
    alto,
    guardarAlto,
    margenes: readonly(margenes),
    guardarMargenes: _margenes => (margenes.value = _margenes),
    propiedad,
    guardarPropiedad,
  }
}
