declare namespace SAN {
  type Author = {
    id: number
    username: string | null
    email: string | null
    avatarUrl: string | null
  }

  type CurrentUser = {
    id: number
  }
}
