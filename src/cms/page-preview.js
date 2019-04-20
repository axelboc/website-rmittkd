import React from 'react'
import { cloneDeepWith } from 'lodash'

// eslint-disable-next-line import/prefer-default-export
function processImages(getAsset, data) {
  // eslint-disable-next-line consistent-return
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
  return ({ entry, getAsset }) => {
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
