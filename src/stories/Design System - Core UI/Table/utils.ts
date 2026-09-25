import { randomNum, randomString } from '$lib/utils/random/index.js'

export type Item = {
  id: number
  title: string
  price: number
  volume: number
}

export function generateItems(count: number) {
  return Array<void>(count)
    .fill(undefined)
    .map<Item>((_, i) => ({
      id: i,
      title: randomString(),
      price: randomNum(50, 2000, 50),
      volume: randomNum(10, 5000, 10),
    }))
}
