import React from 'react'
import Button from '../../foundations/Button/Button'
import { css } from '@emotion/react'

export type StoryButtonProps = {}

function StoryButton({}: StoryButtonProps) {
  return (
    <div css={block}>
      <Button>Primary Button</Button>
      <Button danger>Danger Button</Button>
    </div>
  )
}

export default StoryButton

const block = css`
  display: flex;
  Button + Button {
    margin-left: 0.5rem;
  }
`
