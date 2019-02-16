import { css } from 'styled-components'

interface ISizes {
  [index: string]: number
}

// these sizes are arbitrary and you can set them to whatever you wish
const sizes: ISizes = {
  L: 1024,
  M: 768,
  S: 600,
  XL: 1440,
  XS: 320
}

// iterate through the sizes and create a media template
const mqFrom = Object.keys(sizes).reduce(
  (mqObject, breakPointLabel) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[breakPointLabel] / 16

    mqObject[breakPointLabel] = (
      cssStrings: TemplateStringsArray,
      breakpointSize: string
    ) => css`
      @media (min-width: ${emSize}em) {
        ${css(cssStrings, breakpointSize)}
      }
    `
    return mqObject
  },
  {
    px: (px: number) => (
      cssStrings: TemplateStringsArray,
      breakpointSize: string
    ) =>
      css`
        @media (min-width: ${px}px) {
          ${css(cssStrings, breakpointSize)}
        }
      `
  } as { [key: string]: any }
)

// iterate through the sizes and create a media template
const mqTo = Object.keys(sizes).reduce(
  (mqObject, breakPointLabel) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[breakPointLabel] / 16

    mqObject[breakPointLabel] = (
      cssStrings: TemplateStringsArray,
      breakpointSize: string
    ) => css`
      @media (max-width: ${emSize}em) {
        ${css(cssStrings, breakpointSize)}
      }
    `
    return mqObject
  },
  {
    px: (px: number) => (
      cssStrings: TemplateStringsArray,
      breakpointSize: string
    ) =>
      css`
        @media (max-width: ${px}px) {
          ${css(cssStrings, breakpointSize)}
        }
      `
  } as { [key: string]: any }
)

export { sizes, mqFrom, mqTo }
