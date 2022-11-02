import { halloweenData$ } from '@/stores/halloween'
import { mutateUpdatePumpkins, queryGetPumpkinCode } from '@/api/halloween'

export async function updatePumpkins(page) {
  await mutateUpdatePumpkins(page)

  return halloweenData$.refetch()
}

export async function getPumpkinCode(pages) {
  const code = await queryGetPumpkinCode()
  halloweenData$.set({ code, pages })
}
