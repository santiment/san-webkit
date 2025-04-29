// https://github.com/sveltejs/kit/blob/b183244819559ec20b6726379b00552d4fbf97e8/packages/kit/src/core/adapt/builder.js
import { createReadStream, createWriteStream, statSync } from 'node:fs'
import zlib from 'node:zlib'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

const pipe = promisify(pipeline)

export async function compress_file(file: string, format: 'gz' | 'br' = 'gz') {
  const compress =
    format == 'br'
      ? zlib.createBrotliCompress({
          params: {
            [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
            [zlib.constants.BROTLI_PARAM_SIZE_HINT]: statSync(file).size,
          },
        })
      : zlib.createGzip({ level: zlib.constants.Z_BEST_COMPRESSION })

  const source = createReadStream(file)
  const destination = createWriteStream(`${file}.${format}`)

  await pipe(source, compress, destination)
}
