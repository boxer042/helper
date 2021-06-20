import React, { useState } from 'react'
import Input from '../../foundations/Input/Input'

export type StoryInputsProps = {}

function StoryInputs({}: StoryInputsProps) {
  const [values, setValues] = useState('')
  const [prefix, setPrefix] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    switch (name) {
      case 'default':
        setValues(value)
        return
      case 'prefix':
        setPrefix(value)
        return
      default:
        break
    }
  }

  return (
    <div>
      <h2>기본 인풋</h2>
      <Input
        label="전화번호"
        name="default"
        value={values}
        setValue={setValues}
        onChange={onChange}
        isClearable
      />
      <h2>Prefix 인풋 & Selected</h2>
      <Input
        label="prefix true"
        name="prefix"
        prefix="EA"
        value={prefix}
        setValue={setPrefix}
        onChange={onChange}
        isClearable
        isSelectable
      />
    </div>
  )
}

export default StoryInputs
