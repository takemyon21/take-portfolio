// ShowHtml.jsx
import React from 'react'

const ShowHtml = ({ html }) => {
  return <div class="works__detail" dangerouslySetInnerHTML={{ __html: html }} />
}

export default ShowHtml
