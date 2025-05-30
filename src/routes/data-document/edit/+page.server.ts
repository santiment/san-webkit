import { renderContentToHTMLString } from '$ui/app/DataDocument/server.js'

import { INITIAL_CONTENT } from '../data.js'

export const load = async () => {
  const renderedHTML = renderContentToHTMLString(INITIAL_CONTENT, new Map())

  return {
    initialContent: INITIAL_CONTENT,
    renderedHTML,
  }
}
