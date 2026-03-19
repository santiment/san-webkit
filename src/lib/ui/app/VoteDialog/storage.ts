import { getSavedBoolean, saveBoolean, deleteSavedValue } from '$lib/utils/localStorage/index.js'

const KEY = 'HEDGEWEEK_VOTE_DIALOG_CLOSED_2026'

export const saveDialogClosed = () => {
  saveBoolean(KEY, true)
}

export const getSavedDialogClosed = () => getSavedBoolean(KEY) ?? false

export const clearClosed = () => deleteSavedValue(KEY)
