import { shallowMount } from "@vue/test-utils";
import { describe, test } from "vitest";
import SisdaiGraficas from "@/componentes/SisdaiGraficas.vue";

describe('SisdaiGraficas', () => {
  test('primeras pruebas', () => {
    const wrapper = shallowMount(SisdaiGraficas)

    expect(wrapper.get('h1').text()).toBe('Hola soy el contenedor de gráficas')
  })
})