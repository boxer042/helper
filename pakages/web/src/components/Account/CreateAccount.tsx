import React, { useState } from 'react'
import { css } from '@emotion/react'
import Input from '../../foundations/Input/Input'
import Button from '../../foundations/Button/Button'
import palette from '../../lib/palette'
import { IoMdPerson, IoIosBusiness } from 'react-icons/io'
import generateRandomColor from './../../lib/generateRandomColor'

export type CreateAccountProps = {}

function CreateAccount({}: CreateAccountProps) {
  const [assortment, setAssortment] = useState('individual')
  const [avatar, setAvatar] = useState('')
  const [color] = useState(generateRandomColor())
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [useAddress, setUseAddress] = useState('')

  const handleAssortmentSelect = (selected: string) => {
    switch (selected) {
      case 'individual':
        setAssortment('individual')
        return
      case 'company':
        setAssortment('company')
        return
      default:
        break
    }
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    switch (name) {
      case 'name':
        setName(value)
        return
      case 'contact':
        const replace = value
          .replace(/[^0-9]/g, '')
          .replace(
            /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
            '$1-$2-$3'
          )
          .replace('--', '-')
        setContact(replace)
        return
      case 'address':
        setAddress(value)
        return
      case 'useAddress':
        setUseAddress(value)
        return
      default:
        break
    }
  }

  console.log(contact.replace(/-/g, ''))
  return (
    <div css={block}>
      <h1>Create Account</h1>
      <div css={assortmentGroup}>
        <div
          css={assortmentItem('individual' === assortment)}
          onClick={() => handleAssortmentSelect('individual')}
        >
          <div>
            <div>개인 고객</div>
            <span>일반 고객</span>
          </div>
          <IoMdPerson />
        </div>
        <div
          css={assortmentItem('company' === assortment)}
          onClick={() => handleAssortmentSelect('company')}
        >
          <div>
            <div>회사 고객</div>
            <span>구매 및 판매 회사</span>
          </div>
          <IoIosBusiness />
        </div>
      </div>
      {avatar.length === 0 ? (
        <div css={avatarBlock}>
          <div css={defaultAvatar(color)}>
            <label>{name.slice(-2)}</label>
          </div>
        </div>
      ) : (
        <div>Thumb</div>
      )}
      {assortment === 'individual' && (
        <div css={inputGroup}>
          <div css={inputStyle}>
            <Input
              label="이름"
              name="name"
              value={name}
              setValue={setName}
              onChange={onChangeInput}
            />
          </div>
          <div css={inputStyle}>
            <Input
              label="연락처"
              name="contact"
              value={contact}
              setValue={setContact}
              onChange={onChangeInput}
            />
          </div>
          <div css={inputStyle}>
            <Input
              label="주소"
              name="address"
              value={address}
              setValue={setAddress}
              onChange={onChangeInput}
            />
          </div>
          <div css={inputStyle}>
            <Input
              label="사용지역"
              name="useAddress"
              value={useAddress}
              setValue={setUseAddress}
              onChange={onChangeInput}
            />
          </div>
        </div>
      )}

      <Button>Created to Account</Button>
    </div>
  )
}

export default CreateAccount

const block = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  Button {
    margin-top: 1rem;
  }
`
const assortmentGroup = css`
  width: 100%;
  display: flex;
  justify-content: center;
  div + div {
    margin-left: 1rem;
  }
`
const assortmentItem = (selected: boolean) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${palette.base['line']};
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  svg {
    font-size: 2.5rem;
    color: ${palette.base['dec']};
  }
  span {
    font-size: 0.75rem;
    color: ${palette.base['dec']};
    font-weight: normal;
  }
  ${selected &&
  css`
    border: 1px solid ${palette.blue[600]};
    color: ${palette.blue[600]};
    svg {
      color: ${palette.blue[600]};
    }
  `};
`
const avatarBlock = css`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const defaultAvatar = (color?: string) => css`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${color};
  display: flex;
  label {
    color: #fff;
    font-size: 2rem;
    width: 100%;
    line-height: 5rem;
    text-align: center;
  }
`
const inputGroup = css`
  width: 100%;
`
const inputStyle = css`
  & + & {
    margin-top: 1rem;
  }
`
