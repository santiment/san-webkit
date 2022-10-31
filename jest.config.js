module.exports = {
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  testRegex: '\\.(test)\\.(ts)',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
}
