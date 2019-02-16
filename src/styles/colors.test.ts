import colors from './colors'

describe('Colors', () => {
  it('should output colors', () => {
    const testColors = colors
    expect(testColors).toHaveProperty('blueOcean')
    expect(testColors).toHaveProperty('gray')
    expect(testColors).toHaveProperty('black')
    expect(testColors).toHaveProperty('creamy')
    expect(testColors).toHaveProperty('orange')
    expect(testColors).toHaveProperty('white')
  })
})
