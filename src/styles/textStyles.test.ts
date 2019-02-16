import textStyles from './textStyles'

describe('textStyles', () => {
  it('should output multiple text styles', () => {
    expect(textStyles).toHaveProperty('general')
    expect(textStyles).toHaveProperty('pageTitle')
    expect(textStyles).toHaveProperty('title')
  })
})
