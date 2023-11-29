import { getDateFormats, getTimeFormats } from '@/utils/dates'

type Header<T> = {
  title: string
  format: (item: T) => string | number
}

const normalizeHeader = (title: string) => (title.includes(',') ? `"${title}"` : title)

export function downloadCsv<T extends any>(title: string, headers: Header<T>[], data: T[]) {
  const headersLength = headers.length

  const { length } = data
  const rows = new Array(length + 1)

  rows[0] = headers.map(({ title }) => normalizeHeader(title))
  for (let i = 0; i < length; i++) {
    const item = data[i]
    const row = new Array(headersLength)
    rows[i + 1] = row

    for (let j = 0; j < headersLength; j++) {
      const value = headers[j].format(item)
      row[j] = typeof value === 'string' ? `"${value}"` : value
    }
  }

  const csvContent = 'data:text/csv;charset=utf-8,' + rows.map((e) => e.join(',')).join('\n')
  const date = new Date()
  const { DD, MMM, YYYY } = getDateFormats(date)
  const { HH, mm, ss } = getTimeFormats(date)

  const a = document.createElement('a')
  // Using . instead of : in filename for compatability reasons
  a.download = `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].csv`
  a.href = encodeURI(csvContent)
  a.click()
  a.remove()
}
