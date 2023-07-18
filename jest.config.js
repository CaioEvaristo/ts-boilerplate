module.exports = {
    preset: 'ts-jest',
    collectiCorverage: ['<rootDir>/app/**/*.ts'],
    testEnvironment: 'node',
    roots: ['<rootDir>/__test__'],
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    }
};