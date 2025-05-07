import type { TSocialTrendsApiAlert } from '../schema.js'
import type { TAssetSlug } from '$lib/ctx/assets/api.js'
import type { Watchlist } from '../../watchlist/api.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'

import Form from './ui/index.svelte'
import { getApiTarget, getInitTrendTarget, parseApiTarget } from './utils.js'

type TAssetTarget = {
  slugs: TAssetSlug[]
  namesMap: Map<TAssetSlug, string>
  type: 'asset'
}

type TWordTarget = {
  words: string[]
  type: 'word'
}

type TWatchlistTarget = {
  id: Watchlist['id'] | null
  title: string
  type: 'watchlist'
}

export type TTrendState = {
  target: TAssetTarget | TWordTarget | TWatchlistTarget
}

// Declaring a type so it can be later used in Component's props
export type TBaseSchema = TStepBaseSchema<
  'select-trend',
  {
    initState: (apiAlert?: null | TSocialTrendsApiAlert) => TTrendState
  }
>

export const STEP_SELECT_TREND_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'select-trend',
  ui: {
    title: 'Select Social trend',
    label: 'Select Social trend',
    description: 'You can choose any social word, asset or watchlist',

    Form,
  },

  initState(apiAlert) {
    const { target, operation } = apiAlert?.settings || {}

    if (target && operation) {
      return { target: parseApiTarget(target) }
    }

    return {
      target: getInitTrendTarget('asset'),
    }
  },

  validate({ target }) {
    if (target.type === 'asset') return !!target.slugs.length
    if (target.type === 'word') return !!target.words.length

    return !!target.id
  },

  reduceToApi(apiAlert, state) {
    Object.assign(apiAlert.settings, { target: getApiTarget(state.target) })
    Object.assign(apiAlert.settings, { operation: getApiOperation(state) })

    return apiAlert
  },
})

function getApiOperation({ target }: TTrendState) {
  if (target.type === 'word') return 'trending_word'

  return 'trending_project'
}
