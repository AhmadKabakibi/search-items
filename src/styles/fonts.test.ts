import { fontFaces, fonts, fontWeights } from './fonts'

describe('fonts', () => {
  it('should provide font names for Merriweather with serif fallback', () => {
    expect(fonts).toHaveProperty('primary')
    expect(fonts.primary).toContain('Merriweather')
    expect(fonts.primary).toContain('serif')
  })

  it('should provide font weights', () => {
    expect(fontWeights).toHaveProperty('light', 300)
    expect(fontWeights).toHaveProperty('medium', 400)
    expect(fontWeights).toHaveProperty('bold', 700)
  })

  it('should provide fontFaces css', () => {
    const cssString = `${fontFaces}`
    expect(cssString.match(/@import/g) || []).toHaveLength(1)
  })
})
