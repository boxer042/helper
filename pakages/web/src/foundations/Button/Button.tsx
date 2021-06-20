import React, { ReactNode } from 'react'
import { css } from '@emotion/react'
import palette from '../../lib/palette'

export type ButtonProps = {
  type?: 'default' | 'text' | 'link'
  shape?: 'circle' | 'round'
  size?: 'large' | 'middle' | 'small'
  icon?: ReactNode
  children: string
  danger?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, danger, ...rest }: ButtonProps) {
  return (
    <button css={button(danger)} {...rest}>
      {children}
    </button>
  )
}

export default Button

const button = (danger?: boolean) => css`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  font-size: 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 4px;
  background: ${palette.blue[600]};
  color: #fff;

  &:active {
    background: ${palette.blue[500]};
  }
  ${danger &&
  css`
    background: ${palette.red[600]};
    &:active {
      background: ${palette.red[500]};
    }
  `}
`
