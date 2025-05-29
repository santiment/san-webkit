export const load = (event) => {
  return {
    ...event.data,
    isEdit: event.url.searchParams.has('isEdit'),
  }
}
