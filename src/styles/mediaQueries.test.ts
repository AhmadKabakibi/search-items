import { mqFrom, mqTo, sizes } from './mediaQueries'

describe('mediaQueries', () => {
  it('provide sizes', () => {
    expect(sizes).toHaveProperty('XS')
    expect(sizes).toHaveProperty('S')
    expect(sizes).toHaveProperty('M')
    expect(sizes).toHaveProperty('L')
    expect(sizes).toHaveProperty('XL')
  })

  it('provide "from" breakpoints for every size', () => {
    for (const size of Object.keys(sizes)) {
      const css = mqFrom[size]`content: '${size}';`.join('')
      expect(css).toContain(`@media (min-width:`)
      expect(css).toContain(`content: '${size}';`)
    }
  })

  it('provide "to" breakpoints for every size', () => {
    for (const size of Object.keys(sizes)) {
      const css = mqTo[size]`content: '${size}';`.join('')
      expect(css).toContain(`@media (max-width:`)
      expect(css).toContain(`content: '${size}';`)
    }
  })

  it('provide "from" breakpoints for px', () => {
    const css = mqFrom.px(50)`content: '50px';`.join('')
    expect(css).toContain(`@media (min-width:50px)`)
    expect(css).toContain(`content: '50px';`)
  })

  it('provide "to" breakpoints for px', () => {
    const css = mqTo.px(50)`content: '50px';`.join('')
    expect(css).toContain(`@media (max-width:50px)`)
    expect(css).toContain(`content: '50px';`)
  })
})
