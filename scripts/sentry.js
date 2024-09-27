import fs from 'node:fs/promises'
import { exec, forFile } from './utils.js'
import { SENTRY_URL } from '../vite.config.js'

const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN

/**
 *
 * @param {{release:string, org:string, project:string}} settings
 */
export async function uploadSentrySourcemaps({ org, project, release }) {
  if (SENTRY_URL) {
    // Client files upload
    const [, clientError] = await exec(
      `npx sentry-cli --url ${SENTRY_URL} sourcemaps upload --release ${release} ./build/client --url-prefix "~/client/" --org ${org} --project ${project} --auth-token ${SENTRY_AUTH_TOKEN}`,
    )
    if (clientError) throw new Error(clientError)

    // Server files upload
    const [, serverError] = await exec(
      `npx sentry-cli --url ${SENTRY_URL} sourcemaps upload --release ${release} ./build/server --url-prefix "~/server/" --org ${org} --project ${project} --auth-token ${SENTRY_AUTH_TOKEN}`,
    )
    if (serverError) throw new Error(serverError)

    console.log('✅ Sourcemaps uploaded 🌥')
  }

  await forFile('./build/**/*.*.map', (filePath) => fs.unlink(filePath))

  await forFile('./build/**/*.js', async (filePath) => {
    try {
      const fileContent = await fs.readFile(filePath, 'utf8')

      await fs.writeFile(filePath, fileContent.replace(/\/\/# sourceMappingURL=\S+/g, ''))
    } catch (err) {
      console.error(err)
    }
  })
}
