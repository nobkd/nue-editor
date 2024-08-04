import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

const start = 'node_modules'
const dest = 'src'

const files = {
    'nue-glow/src/glow.js': 'glow.js',
    'nue-glow/minified/glow.nano.css': 'style/glow.nano.css',
}

Object.entries(files).forEach(([from, to]) => copyFileSync(join(start, from), join(dest, to)))
