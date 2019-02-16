import GlobalStyle from './index'

describe('GlobalStyle', () => {
  // @ts-ignore
  const style = GlobalStyle.globalStyle.rules.join('')

  it('should contain a style reset', () => {
    expect(style).toContain(
      '-webkit-search-decoration{-webkit-appearance:none;}'
    )
  })

  it('should contain styling for the #root', () => {
    expect(style).toContain('#root')
  })
})
