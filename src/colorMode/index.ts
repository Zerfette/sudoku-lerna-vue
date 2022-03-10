import { ColorMode } from './types'
import { computed, ref, Ref, watchEffect } from 'vue'

const colorMode = ref(ColorMode.Dark)
const assertions = computed(() => ({
  isDarkMode: colorMode.value === ColorMode.Dark,
  isLightMode: colorMode.value === ColorMode.Light
}))

const toggleColorMode = (): ColorMode =>
  (colorMode.value =
    colorMode.value === ColorMode.Dark ? ColorMode.Light : ColorMode.Dark)

const colorModeValue = <T>(lightModeValue: T, darkModeValue: T): Ref<T> => {
  const colorValue = ref(darkModeValue) as Ref<T>
  const updateValue = () => {
    colorValue.value = assertions.value.isDarkMode
      ? darkModeValue
      : lightModeValue
  }
  watchEffect(updateValue)

  return colorValue
}

export { colorMode, ColorMode, colorModeValue, assertions, toggleColorMode }
