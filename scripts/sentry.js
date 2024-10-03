import fs from 'node:fs/promises'
import { exec, forFile } from './utils.js'

const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN

/**
 *
 * @param {{release:string, org:string, project:string, url?:string, flags?:{client?: string, server?: string}}} settings
 */
export async function uploadSentrySourcemaps({ org, project, release, url, flags = {} }) {
  const urlFlag = url ? `--url ${url}` : ''

  if (SENTRY_AUTH_TOKEN) {
    const clientFlags = flags.client || ''
    // Client files upload
    const [, clientError] = await exec(
      `npx sentry-cli ${urlFlag} sourcemaps upload --release ${release} ./build/client ${clientFlags} --org ${org} --project ${project} --auth-token ${SENTRY_AUTH_TOKEN}`,
    )
    if (clientError) throw new Error(clientError)

    const serverFlags = flags.server || ''
    // Server files upload
    const [, serverError] = await exec(
      `npx sentry-cli ${urlFlag} sourcemaps upload --release ${release} ./build/server ${serverFlags} --org ${org} --project ${project} --auth-token ${SENTRY_AUTH_TOKEN}`,
    )
    if (serverError) throw new Error(serverError)

    console.log('✅ Sourcemaps uploaded 🌥')
  }

  await forFile('./build/client/**/*.*.map', (filePath) => fs.unlink(filePath))

  await forFile('./build/client/**/*.js', async (filePath) => {
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')

      await fs.writeFile(filePath, fileContent.replace(/\/\/# sourceMappingURL=\S+/g, ''))
    } catch (err) {
      console.error(err)
    }
  })
}
