export const scriptTag = () => document.createElement('script')

export function newHeadScript(
  content: string | undefined,
  options?: { [key: string]: any },
  onload?: () => void,
): HTMLScriptElement {
  const script = scriptTag()

  if (content) script.text = content

  Object.assign(script, options)

  if (onload) script.onload = onload

  document.head.appendChild(script)

  return script
}

export enum PageType {
  EXPLORER = 'explorer',
  CHARTS = 'charts',
  DASHBOARDS = 'dashboards',
  WATCHLIST = 'watchlist',
  SCREENER = 'screener',
  ALERTS = 'alerts',
  INSIGHTS = 'insights',
  PROFILE = 'profile',
  ACCOUNT = 'account',
  SOCIAL_TOOL = 'social_tool',
  HISTORICAL_BALANCE = 'historical_balance',
  LABS = 'labs',
  SignUp = 'signup',
  Login = 'login',
}
