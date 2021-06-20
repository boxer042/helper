import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { BiX, BiChevronDown } from 'react-icons/bi'

import palette from '../../lib/palette'

export type InputProps = {
  label: string
  prefix?: string
  value?: string
  setValue?: Dispatch<SetStateAction<string>>
  isClearable?: boolean
  isSelectable?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({
  label,
  prefix,
  value,
  setValue,
  isClearable,
  isSelectable,
  ...rest
}: InputProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(false)
    if (value !== '' || value.length !== 0) {
      return setIsActive(true)
    }
  }, [value])

  const isClear = () => {
    if (!setValue) {
      return
    }
    setValue('')
  }

  return (
    <div css={base(isActive, prefix)}>
      {prefix && <div css={prefixStyle}>{prefix}</div>}
      <input css={inputStyle} value={value} autoComplete="off" {...rest} />
      <label css={labelStyle(prefix)}>{label}</label>
      {isClearable && value !== '' && (
        <div css={clear} onClick={isClear}>
          <BiX />
        </div>
      )}
      {isSelectable && (
        <div css={downArrow}>
          <BiChevronDown />
        </div>
      )}
    </div>
  )
}

export default Input

const base = (isActive: boolean, prefix?: string) => css`
  display: flex;
  position: relative;
  border: 1px solid ${palette.base['line']};
  border-radius: 4px;
  background: #fff;
  height: 3rem;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:focus-within {
    border: 1px solid ${palette.grey[600]};
  }

  ${isActive &&
  css`
    input {
      padding-top: 14px;
      padding-right: 16px;
      padding-bottom: 0;
      padding-left: 10px;
    }
    label {
      transform: translate(0, -6px) scale(0.75);
      ${prefix &&
      css`
        transform: translate(13px, -6px) scale(0.75);
      `}
    }
  `}
`
const prefixStyle = css`
  display: flex;
  align-items: center;
  color: ${palette.base['dec']};
  font-size: 0.75rem;
`

const inputStyle = css`
  padding-left: 10px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  width: 100%;
  height: 100%;
`

const labelStyle = (prefix?: string) => css`
  padding-left: 13px;
  font-size: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${palette.base['dec']};
  pointer-events: none;
  position: absolute;
  transform: translate(0, 0) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
  ${prefix &&
  css`
    transform: translate(13px, 0) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  `}
`

const clear = css`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 0.5rem;
  cursor: pointer;
  color: ${palette.base['dec']};
  &:hover {
    color: ${palette.grey[600]};
  }
`
const downArrow = css`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  padding-left: 0.5rem;
  cursor: pointer;
  color: ${palette.base['dec']};
  &:hover {
    color: ${palette.grey[600]};
  }
  &:before {
    content: '';
    margin-right: 0.5rem;
    width: 1px;
    height: 1.5rem;
    background: ${palette.base['dec']};
  }
`
