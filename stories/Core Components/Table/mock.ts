export type Item = {
  id: number
  value: number
  volume: number
}

export const columns: SAN.Table.Column<Item>[] = [
  {
    title: 'Price',
    format: ({ value }) => '$' + value,
    sortAccessor: ({ value }) => value,
  },
  {
    title: 'Tokens',
    format: ({ volume }) => volume + ' VOL',
    sortAccessor: ({ volume }) => volume,
  },
]

function randomNum(min: number, max: number, step: number) {
  return min + Math.floor((Math.random() * (max - min + 1)) / step) * step
}

export function generateItems(count: number) {
  return Array<void>(count)
    .fill(undefined)
    .map<Item>((_, i) => ({
      id: i,
      value: randomNum(50, 2000, 50),
      volume: randomNum(10, 5000, 10),
    }))
}
