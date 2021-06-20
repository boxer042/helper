import React from 'react'
import StoryButton from '../../components/Story/StoryButton'
import StoryInputs from '../../components/Story/StoryInputs'
import Avatar from '../../foundations/Avatar/Avatar'
import Divider from '../../foundations/Divider/Divider'

export type StoryPageProps = {}

function StoryPage({}: StoryPageProps) {
  return (
    <div>
      <StoryInputs />
      <Divider>여기서부터</Divider>
      <StoryButton />
      <Avatar color="grey" label="범양" assortment="company" />
    </div>
  )
}

export default StoryPage
