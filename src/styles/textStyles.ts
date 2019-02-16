import { css } from 'styled-components'

// Styling
import { fonts } from './fonts'
import { mqFrom } from './mediaQueries'

// Text styles
export default {
  general: css`
    font-family: ${fonts.primary};
    font-size: 16px;
    font-style: normal;
    line-height: 1.2;
  `,
  pageTitle: css`
    font-family: ${fonts.primary};
    font-size: 36px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.4;

    ${mqFrom.M`
      font-size: 44px;
    `};
  `,
  title: css`
    font-family: ${fonts.primary};
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.2;
  `
}
