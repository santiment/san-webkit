module.exports = {
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.ts$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  // testEnvironment: 'jsdom',
  testRegex: '\\.(test)\\.(ts)',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
}
