import { css } from 'styled-components'

// Fonts
const fonts = {
  primary: "'Merriweather', serif"
}

// Font Weights
const fontWeights = {
  bold: 700,
  light: 300,
  medium: 400
}

const fontFaces = css`
  /* Merriweather */
  @import url(
    https://fonts.googleapis.com/css?family=Merriweather:700,
    400,
    400italic,
    300,
    300italic
  );
`

export { fonts, fontWeights, fontFaces }
