export type Item = {
  id: number
  title: string
  value: number
  volume: number
}

function randomNum(min: number, max: number, step: number) {
  return min + Math.floor((Math.random() * (max - min + 1)) / step) * step
}

export function generateItems(count: number) {
  return Array<void>(count)
    .fill(undefined)
    .map<Item>((_, i) => ({
      id: i,
      title: (Math.random() + 1).toString(36).substring(7),
      value: randomNum(50, 2000, 50),
      volume: randomNum(10, 5000, 10),
    }))
}
