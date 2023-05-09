import { shallowMount } from "@vue/test-utils";
import { describe, test } from "vitest";
import SisdaiBarras from "@/componentes/SisdaiBarras.vue";

describe('SisdaiBarras', () => {
  test('primeras pruebas', () => {
    const wrapper = shallowMount(SisdaiBarras)

    expect(wrapper.get('h2').text()).toBe('Hola soy una gráfica de barras')
  })
})