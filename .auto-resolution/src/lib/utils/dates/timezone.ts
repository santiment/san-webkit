// Based on https://github.com/ndom91/react-timezone-select/blob/main/src/timezone-list.ts
/*
Object.keys(TimezoneCities).map((timeZone) => ({
  // IANA timeZone name
  timeZone,
  // Principal cities
  cities: TimezoneCities[timeZone].split(',').slice(0,2).map(item=>item.trim()),
  // UTC-0 offset in minutes
  offset: ((new Date(new Date().toLocaleString('en', {timeZone})) - new Date(new Date().toLocaleString('en', {timeZone: 'UTC'}))) /1000 / 60),
  // Daylight Saving Time
  dst: new Date("1/1/2025, 1:00:00 PM").toLocaleString('en', {timeZone, hour: '2-digit',minute: '2-digit',second: '2-digit'}) !== new Date("7/1/2025, 1:00:00 PM").toLocaleString('en', {timeZone, hour: '2-digit',minute: '2-digit',second: '2-digit'}),
})).sort((a,b) => a.offset - b.offset)
*/

export const TimeZones = (
  [
    // Timezone, UTC Offset, Principal Cities, Daylight Saving Time?
    ['Pacific/Midway', -660, ['Midway Island', 'Samoa']],
    ['Pacific/Honolulu', -600, ['Hawaii']],
    ['America/Juneau', -480, ['Alaska'], true],
    ['America/Phoenix', -420, ['Arizona']],
    ['America/Vancouver', -420, ['Vancouver'], true],
    ['America/Tijuana', -420, ['Tijuana'], true],
    ['America/Los_Angeles', -420, ['Pacific Time'], true],
    ['America/Boise', -360, ['Mountain Time'], true],
    ['America/Mexico_City', -360, ['Mexico City', 'Monterrey']],
    ['America/Belize', -360, ['Central America']],
    ['America/Chicago', -300, ['Central Time'], true],
    ['America/Bogota', -300, ['Bogota', 'Lima']],
    ['America/Detroit', -240, ['Eastern Time'], true],
    ['America/Caracas', -240, ['Caracas', 'La Paz']],
    ['America/Santiago', -240, ['Santiago'], true],
    ['America/Sao_Paulo', -180, ['Brasilia']],
    ['America/Montevideo', -180, ['Montevideo']],
    ['America/Argentina/Buenos_Aires', -180, ['Buenos Aires', 'Georgetown']],
    ['America/Godthab', -60, ['Greenland'], true],
    ['Atlantic/Cape_Verde', -60, ['Cape Verde Islands']],
    ['Atlantic/Azores', 0, ['Azores'], true],
    ['Atlantic/Reykjavik', 0, ['Reykjavik']],
    ['Europe/London', 60, ['Edinburgh', 'London'], true],
    ['Europe/Dublin', 60, ['Dublin'], true],
    ['Europe/Lisbon', 60, ['Lisbon'], true],
    ['Africa/Casablanca', 60, ['Casablanca', 'Monrovia']],
    ['Atlantic/Canary', 60, ['Canary Islands'], true],
    ['Africa/Algiers', 60, ['West Central Africa']],
    ['Europe/Belgrade', 120, ['Belgrade', 'Bratislava'], true],
    ['Europe/Sarajevo', 120, ['Sarajevo', 'Skopje'], true],
    ['Europe/Brussels', 120, ['Brussels', 'Copenhagen'], true],
    ['Europe/Amsterdam', 120, ['Amsterdam', 'Berlin'], true],
    ['Africa/Harare', 120, ['Harare', 'Pretoria']],
    ['Europe/Bucharest', 180, ['Bucharest'], true],
    ['Africa/Cairo', 180, ['Cairo'], true],
    ['Europe/Helsinki', 180, ['Helsinki', 'Kyiv'], true],
    ['Europe/Athens', 180, ['Athens'], true],
    ['Asia/Jerusalem', 180, ['Jerusalem'], true],
    ['Europe/Moscow', 180, ['Istanbul', 'Minsk']],
    ['Asia/Kuwait', 180, ['Kuwait', 'Riyadh']],
    ['Africa/Nairobi', 180, ['Nairobi']],
    ['Asia/Baghdad', 180, ['Baghdad']],
    ['Asia/Tehran', 210, ['Tehran']],
    ['Asia/Dubai', 240, ['Abu Dhabi', 'Muscat']],
    ['Asia/Baku', 240, ['Baku', 'Tbilisi']],
    ['Asia/Kabul', 270, ['Kabul']],
    ['Asia/Yekaterinburg', 300, ['Ekaterinburg']],
    ['Asia/Karachi', 300, ['Islamabad', 'Karachi']],
    ['Asia/Almaty', 300, ['Almaty', 'Novosibirsk']],
    ['Asia/Kolkata', 330, ['Chennai', 'Kolkata']],
    ['Asia/Colombo', 330, ['Sri Jayawardenepura']],
    ['Asia/Kathmandu', 345, ['Kathmandu']],
    ['Asia/Dhaka', 360, ['Astana', 'Dhaka']],
    ['Asia/Rangoon', 390, ['Yangon Rangoon']],
    ['Asia/Bangkok', 420, ['Bangkok', 'Hanoi']],
    ['Asia/Krasnoyarsk', 420, ['Krasnoyarsk']],
    ['Asia/Shanghai', 480, ['Beijing', 'Chongqing']],
    ['Asia/Kuala_Lumpur', 480, ['Kuala Lumpur', 'Singapore']],
    ['Asia/Taipei', 480, ['Taipei']],
    ['Australia/Perth', 480, ['Perth']],
    ['Asia/Irkutsk', 480, ['Irkutsk', 'Ulaanbaatar']],
    ['Asia/Seoul', 540, ['Seoul']],
    ['Asia/Tokyo', 540, ['Tokyo', 'Sapporo']],
    ['Asia/Yakutsk', 540, ['Yakutsk']],
    ['Australia/Darwin', 570, ['Darwin']],
    ['Australia/Adelaide', 570, ['Adelaide'], true],
    ['Australia/Sydney', 600, ['Canberra', 'Melbourne'], true],
    ['Australia/Brisbane', 600, ['Brisbane']],
    ['Australia/Hobart', 600, ['Hobart'], true],
    ['Asia/Vladivostok', 600, ['Vladivostok']],
    ['Pacific/Guam', 600, ['Guam', 'Port Moresby']],
    ['Asia/Magadan', 660, ['Magadan', 'Solomon Islands']],
    ['Asia/Kamchatka', 720, ['Kamchatka', 'Marshall Islands']],
    ['Pacific/Fiji', 720, ['Fiji Islands']],
    ['Pacific/Auckland', 720, ['New Zealand'], true],
    ['Pacific/Tongatapu', 780, ["Nuku'alofa"]],
  ] as const
).reduce(
  (acc, [timeZone, offset, cities, dst]) => {
    const correctedOffset = dst ? calculateTimeZoneUtcOffset(timeZone) : offset
    acc[timeZone] = {
      name: timeZone,
      cities: cities.toString(),
      utcMinutesOffset: correctedOffset,
      utcLabel: getTimeZoneUtcLabel(offset),
    }

    return acc
  },
  {} as Record<string, undefined | TTimeZone>,
)

export type TTimeZone = { name: string; cities: string; utcMinutesOffset: number; utcLabel: string }

function calculateTimeZoneUtcOffset(timeZone: string) {
  const diff =
    +new Date(new Date().toLocaleString('en', { timeZone })) -
    +new Date(new Date().toLocaleString('en', { timeZone: 'UTC' }))

  return diff / 1000 / 60
}

function getTimeZoneUtcLabel(offset: number) {
  if (offset === 0) return 'UTC'

  const hours = Math.floor(offset / 60)
  const minutes = offset % 60
  return `UTC${offset < 0 ? '' : '+'}${hours}${minutes ? ':' + minutes : ''}`
}
