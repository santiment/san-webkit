export type Item = {
  id: number
  title: string
  price: number
  volume: number
}

const randomNum = (min: number, max: number, step: number) =>
  min + Math.floor((Math.random() * (max - min + 1)) / step) * step

const randomString = () => (Math.random() + 1).toString(36).substring(7)

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
