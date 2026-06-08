export const COLORS = [
  '#14c393', // green,

  '#5275FF', // BLUE
  '#FF5B5B', // RED
  '#FFCB47', // YELLOW
  // '#FF8450', // SALMON
  '#F47BF7', // PURPLE
  '#785549', // BROWN
  '#D4E763', // YELLOW-GREEN
  '#FFDAC5', // PEACH
  '#37D7BA', // AQUAMARINE
  '#777777', // GREY
  '#AC948C', // BROWN-GRAY
  '#222222', // BLACK

  '#7a859e', // waterloo
  '#174d4a', // green-dark-3
  '#ffe7ca', // orange-light-2
  '#efa7a7', // red-light-2
  '#dcf6ef', // green-light-2,
  '#3b3130', // orange-dark,
  '#c9c2ff', // purple-light-2
]

export function useColorGenerator() {
  let i = 0

  return {
    colorGenerator: {
      new(): string {
        const color = COLORS[i++]
        i = i % COLORS.length

        return color
      },
    },
  }
}
