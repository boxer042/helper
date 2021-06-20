import React from 'react'
import { css } from '@emotion/react'
import palette from '../../lib/palette'

export type DividerProps = {
  children?: string
  orientation?: 'left' | 'right'
}

function Divider({ children, orientation }: DividerProps) {
  return (
    <div css={divider}>
      <hr />
      <div css={label(orientation)}>{children}</div>
    </div>
  )
}

export default Divider

const divider = css`
  position: relative;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
  hr {
    border: unset;
    border-radius: 2px;
    border-top: 1px solid ${palette.base['line']};
    width: 100%;
    height: 1px;
  }
`
const label = (orientation?: string) => css`
  position: absolute;
  top: 0;
  font-size: 0.875rem;
  color: ${palette.base['dec']};
  background: #fff;
  padding: 0 10px;
  left: 50%;
  transform: translate(-50%, -9px);
  ${orientation === 'left' &&
  css`
    color: red;
  `}
`
