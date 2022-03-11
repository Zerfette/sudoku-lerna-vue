import { computed, onUnmounted, ref, Ref, watchEffect } from 'vue'
import { getMonoid as getArrayMonoid } from 'fp-ts/Array'
import { constant, pipe } from 'fp-ts/function'
import { IO } from 'fp-ts/IO'
import { concatAll } from 'fp-ts/Monoid'
import { MonoidSum } from 'fp-ts/number'
import {
  fold,
  getMonoid as getOptionMonoid,
  none,
  Option,
  some
} from 'fp-ts/Option'

const arrayOptionMonoid = pipe(getArrayMonoid<number>(), getOptionMonoid)

const useTimer = () => {
  const isRunning = ref(false)
  const elapsedTime = ref(0)
  let interval: number

  watchEffect(() => {
    if (isRunning.value) {
      interval = setInterval(
        () => (elapsedTime.value = elapsedTime.value + 0.1),
        100
      )
    } else {
      clearInterval(interval)
    }
  })

  onUnmounted(() => clearInterval(interval))

  return {
    isRunning,
    elapsedTime
  }
}

type Laps = Option<number[]>

export type Stopwatch = {
  elapsedTime: Ref<number>
  laps: Ref<Laps>
  addLap: IO<void>
  resetTimer: IO<void>
  startTimer: IO<void>
  stopTimer: IO<void>
  toggleTimer: IO<void>
  isRunning: Ref<boolean>
}

export const useStopwatch: IO<Stopwatch> = () => {
  const laps: Ref<Option<number[]>> = ref(none)
  const { isRunning, elapsedTime } = useTimer()

  const resetTimer = () => {
    isRunning.value = false
    elapsedTime.value = 0
    laps.value = none
  }

  const addLap = () => {
    const prevTotal = fold(constant(0), concatAll(MonoidSum))(laps.value)
    const currentLap = fold(
      constant(elapsedTime.value),
      constant(elapsedTime.value - prevTotal)
    )(laps.value)

    if (isRunning.value)
      laps.value = arrayOptionMonoid.concat(laps.value, some([currentLap]))
  }

  const startTimer = () => (isRunning.value = true)
  const stopTimer = () => (isRunning.value = false)
  const toggleTimer = () => (isRunning.value ? stopTimer() : startTimer())

  return {
    elapsedTime: computed(() => +elapsedTime.value.toFixed(1)),
    laps,
    addLap,
    resetTimer,
    startTimer,
    stopTimer,
    toggleTimer,
    isRunning
  }
}
