import { getSavedBoolean, saveBoolean } from '@/utils/localStorage'

const KEY = 'QUESTIONNAIRE_STARTED'
export const checkIsQuestionnaireStarted = () => getSavedBoolean(KEY)
export const startQuestionnaire = () => saveBoolean(KEY, true)

const DIALOG_CLOSED_KEY = 'QUESTIONNAIRE_DIALOG_CLOSED'
export const saveDialogClose = () => saveBoolean(DIALOG_CLOSED_KEY, true)
