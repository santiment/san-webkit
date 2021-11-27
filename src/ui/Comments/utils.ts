import {
  saveJson,
  getSavedJson,
  deleteSavedValue,
} from '../../utils/localStorage'

type ScheduledComment = {
  id: number
  content: string
  href: string
}

const SCHEDULED_COMMENT = 'SCHEDULED_COMMENT'

export function saveComment(id: number, content: string): void {
  saveJson(SCHEDULED_COMMENT, { id, content, href: window.location.pathname })
}

export function clearSavedComment(): void {
  deleteSavedValue(SCHEDULED_COMMENT)
}

export const lookupSavedComment = () =>
  getSavedJson<ScheduledComment>(SCHEDULED_COMMENT)

type CancelTimer = () => void
export function scrollToComment(
  comment?: HTMLElement | null,
  removeHighlight?: () => void,
): undefined | CancelTimer {
  removeHighlight?.()

  if (!comment) return

  comment.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
  })
  comment.style.background = 'var(--green-light-2)'

  const timer = setTimeout(undo, 900)

  function undo() {
    if (comment) comment.style.background = ''
    clearTimeout(timer)
  }

  return undo
}

export const findCommentNode = (
  commentsNode: HTMLElement,
  href: string,
): HTMLElement | null => commentsNode.querySelector(`${href} .content`)

export function adjustHeight(node: HTMLTextAreaElement): void {
  node.style.height = '32px'

  if (node.value) {
    node.style.height = node.scrollHeight + 2 + 'px'
  }
}
