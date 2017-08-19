import React from 'react'
import Markdown from 'react-smackdown'
import { getStoryFromSlugs, flattenStories } from '../../utils'
import syntax from '../../utils/syntax'
import MarkdownWrapper from './MarkdownWrapper'

export default ({ stories, storyPath }) => {
  const story = getStoryFromSlugs(
    storyPath.split('/'),
    stories,
    flattenStories(stories)
  )

  return (
    <div>
      {story.name} Examples:
      {typeof story.component === 'function' ? story.component() : story.component}
    </div>
  )
}
