export const ONE_SECOND_IN_MS = 1000
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60
export const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * 24
export const ONE_WEEK_IN_MS = ONE_DAY_IN_MS * 7
export const ONE_MONTH_IN_MS = 2505600000 // Estimate
export const ONE_YEAR_IN_MS = 31536000000 // Estimate

/**
 *
 * @param target - target date in ISO format
 * @param start - timestamp of the start date
 * @returns positive number of days if target date is in the future, negative number if target date is in the past
 */
export const calculateDaysTo = (target: string, start = Date.now()): number =>
  Math.ceil((Date.parse(target) - start) / ONE_DAY_IN_MS)
