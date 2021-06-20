import React from 'react'
import { css } from '@emotion/react'

export type AvatarProps = {
  color?: string
  label?: string
  assortment?: 'individual' | 'company'
}

function Avatar({ color, label, assortment }: AvatarProps) {
  return (
    <div css={avatar(color)}>
      <label>{label}</label>
    </div>
  )
}

export default Avatar

const avatar = (color?: string) => css`
  background: ${color};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  label {
    color: #fff;
    font-size: 1rem;
    width: 100%;
    line-height: 2.5rem;
    text-align: center;
  }
  /* svg {
    position: absolute;
    color: #fff;
    font-size: 2.5rem;
    left: 2.5px;
    top: 3px;
  } */
`
