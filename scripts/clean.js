import fs from 'fs'
import path from 'path'
import { ROOT } from './utils.js'

fs.rmSync(path.resolve(ROOT, 'lib'), { recursive: true, force: true })
