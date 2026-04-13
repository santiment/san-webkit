import { trackEvent } from '$lib/analytics/index.js'
import { createCtx } from '$lib/utils/index.js'

import { STEPS } from './steps.js'

type TScreen = 'intro' | 'question' | 'final'
type TAnswer = string | string[]

type TQuestionaryState = {
  screen: TScreen
  stepIndex: number
  answers: (TAnswer | null)[]
}

const SOURCE = 'questionary'

export const useQuestionaryCtx = createCtx('questionary_useQuestionaryCtx', () => {
  const state = $state<TQuestionaryState>({
    screen: 'intro',
    stepIndex: 0,
    answers: new Array(STEPS.length).fill(null),
  })

  function goNext() {
    if (state.stepIndex === STEPS.length - 1) {
      state.screen = 'final'
      trackEvent('form', { action: 'complete', source: SOURCE })
      return
    }

    state.stepIndex++
  }

  return {
    questionary: {
      get $$() {
        return state
      },

      get currentStep$() {
        return STEPS[state.stepIndex]
      },
      get currentAnswer$() {
        return state.answers[state.stepIndex]
      },
      get isFirst$() {
        return state.stepIndex === 0
      },
      get isLast$() {
        return state.stepIndex === STEPS.length - 1
      },
      get isAnswered$() {
        const answer = state.answers[state.stepIndex]
        return answer !== null && (Array.isArray(answer) ? answer.length > 0 : true)
      },

      totalSteps: STEPS.length,

      start() {
        state.screen = 'question'
        trackEvent('press', { action: 'start', source: SOURCE })
      },
      cancel() {
        trackEvent('press', { action: 'cancel', source: SOURCE, type: String(state.stepIndex + 1) })
        state.screen = 'intro'
        state.stepIndex = 0
        state.answers = new Array(STEPS.length).fill(null)
      },
      goNext,
      goPrev() {
        if (state.stepIndex === 0) {
          state.screen = 'intro'
          return
        }
        state.stepIndex--
      },
      selectRadio(option: string) {
        state.answers[state.stepIndex] = option
        trackEvent('select', { action: 'answer', type: 'radio', value: option, source: SOURCE })
        setTimeout(goNext, 250)
      },
      toggleMulti(option: string) {
        const current = (state.answers[state.stepIndex] as string[] | null) ?? []
        const isRemoving = current.includes(option)

        state.answers[state.stepIndex] = isRemoving
          ? current.filter((o) => o !== option)
          : [...current, option]

        trackEvent('select', {
          action: isRemoving ? 'deselect' : 'select',
          type: 'multi',
          value: option,
          source: SOURCE,
        })
      },
    },
  }
})
