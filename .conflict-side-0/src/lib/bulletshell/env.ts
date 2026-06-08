import { BROWSER } from 'esm-env'

export const IS_BULLETSHELL_MODE = BROWSER ? false : Boolean(process.env.BULLETSHELL)
