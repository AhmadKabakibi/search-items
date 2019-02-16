// Global stylesheet
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

// Styling
import colors from './colors'
import textStyles from './textStyles'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html,
  body {
    width: 100%;
    height: 100%;
    ${textStyles.general};
    background-color: ${colors.blueOcean};
    color: ${colors.white};
  }

  #root {
    width: 100%;
    height: 100%;
  }

  a {
    color: ${colors.creamy};
    text-decoration: none;
  }
`

export default GlobalStyle
