import colors from './colors'

describe('Colors', () => {
  it('should output colors', () => {
    const testColors = colors
    expect(testColors).toHaveProperty('blueOcean')
    expect(testColors).toHaveProperty('blueSky')
    expect(testColors).toHaveProperty('gray')
    expect(testColors).toHaveProperty('grayish')
    expect(testColors).toHaveProperty('black')
    expect(testColors).toHaveProperty('creamy')
    expect(testColors).toHaveProperty('orange')
    expect(testColors).toHaveProperty('lightGray')
    expect(testColors).toHaveProperty('white')
  })
})
