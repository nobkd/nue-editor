import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

const start = 'node_modules'
const dest = 'src'

const files = {
    'nue-glow/src/glow.js': 'scripts/glow.js',
}

Object.entries(files).forEach(([from, to]) => copyFileSync(join(start, from), join(dest, to)))
