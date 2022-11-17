import type { LoginType } from './general'
import type { EventData } from '../index'

import { deleteSavedValue, getSavedJson, saveJson } from '@/utils/localStorage'
import { track } from '../index'

export function TrackCategory(category: string) {
  const data = (data?: EventData) => ({ ...data, category })

  return (event: string, properties?: EventData) => track.event(event, data(properties))
}

const LOGIN_METHOD = 'LOGIN_METHOD'
export function saveLoginMethod(method: LoginType) {
  return saveJson(LOGIN_METHOD, { method, timestamp: Date.now() })
}
export function getSaveLoginMethod() {
  const value = getSavedJson(LOGIN_METHOD)
  deleteSavedValue(LOGIN_METHOD)
  return value
}
