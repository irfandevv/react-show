import React from 'react'
import Markdown from 'react-smackdown'
import syntax from '../../utils/syntax'

export default ({ storyPath, stories, allStories }) => {
  const story = allStories
    .find(s => s.path.join('-').toLowerCase() === storyPath)
    || stories[0]

  return (
    <div>
      {story.component()}
      {
        typeof story.code === 'function'
          ? story.code()
          : <Markdown source={story.code} syntax={syntax} />
      }
    </div>
  )
}
