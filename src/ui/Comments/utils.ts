import { saveJson, getSavedJson, deleteSavedValue } from '@/utils/localStorage'
import { getDateFormats } from '@/utils/dates'

type ScheduledComment = {
  id: number
  content: string
  href: string
}

const SCHEDULED_COMMENT = 'SCHEDULED_COMMENT'

export function saveComment(
  type: SAN.CommentsType,
  id: number,
  content: string,
  commentsForTitle: string,
): void {
  saveJson(SCHEDULED_COMMENT, {
    type,
    id,
    content,
    commentsForTitle,
    href: window.location.pathname,
  })
}

export function clearSavedComment(): void {
  deleteSavedValue(SCHEDULED_COMMENT)
}

export const lookupSavedComment = () => getSavedJson<ScheduledComment>(SCHEDULED_COMMENT)

type CancelTimer = () => void
export function scrollToComment(
  comment?: HTMLElement | null,
  removeHighlight?: () => void,
  block: ScrollIntoViewOptions['block'] = 'nearest',
): undefined | CancelTimer {
  removeHighlight?.()

  if (!comment) return

  comment.scrollIntoView({ behavior: 'smooth', block })
  comment.style.background = 'var(--green-light-2)'

  const timer = setTimeout(undo, 900)

  function undo() {
    if (comment) comment.style.background = ''
    clearTimeout(timer)
  }

  return undo
}

export const findCommentNode = (commentsNode: HTMLElement, href: string): HTMLElement | null =>
  commentsNode.querySelector(`${href} .content`)

export function adjustHeight(node: HTMLTextAreaElement): void {
  node.style.height = '32px'

  if (node.value) {
    node.style.height = node.scrollHeight + 2 + 'px'
  }
}

export function getDatetime(date: string) {
  const { DD, MMM, YY } = getDateFormats(new Date(date))
  return `${MMM} ${DD}, ${YY}`
}
