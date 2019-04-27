import { cloneDeepWith } from 'lodash'
import React from 'react'

function processImages(getAsset, data) {
  return cloneDeepWith(data, value => {
    if (typeof value === 'string' && value.startsWith('/uploads')) {
      const src = getAsset(value).toString()
      return {
        childImageSharp: /og-/.test(value)
          ? { original: { src } }
          : { fixed: { src, srcSet: src, width: 'auto', height: 'auto' } },
      }
    }
  })
}

export default function PagePreview(Page) {
  // eslint-disable-next-line react/prop-types
  return function PagePreviewComponent({ entry, getAsset }) {
    const data = entry.get('data').toJS()
    const { body, ...frontmatter } = data

    const node = {
      frontmatter: processImages(getAsset, frontmatter),
      html: body,
    }

    const props = {
      location: { pathname: '' },
      data: { page: { edges: [{ node }] } },
    }

    return <Page {...props} />
  }
}
