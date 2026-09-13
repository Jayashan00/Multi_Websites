#!/usr/bin/env node
/**
 * Downloads every photograph + the hero video declared in src/lib/media.js
 * into public/assets/images so the site can run completely offline.
 *
 *   npm run assets
 *   echo "VITE_LOCAL_ASSETS=true" > .env
 *   npm run dev
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'assets', 'images')
const mediaFile = path.join(root, 'src', 'lib', 'media.js')

fs.mkdirSync(outDir, { recursive: true })

// --- Parse the PHOTOS map straight out of media.js (single source of truth) --
const source = fs.readFileSync(mediaFile, 'utf8')
const block = source.slice(source.indexOf('const PHOTOS = {'), source.indexOf('/** Hero background video'))
const entries = [...block.matchAll(/\[\s*'([^']+)'\s*,\s*'([^']+)'\s*\]/g)].map((m) => ({
  id: m[1],
  file: m[2],
}))

const videoUrl = (source.match(/remote:\s*'([^']+\.mp4)'/) || [])[1]

const jobs = entries.map(({ id, file }) => ({
  url: `https://images.unsplash.com/${id}?w=1600&q=75&auto=format&fit=crop`,
  file,
}))
if (videoUrl) jobs.push({ url: videoUrl, file: 'hero-loop.mp4' })

console.log(`\n  MediCare Plus — asset downloader`)
console.log(`  ${jobs.length} files -> public/assets/images\n`)

let done = 0
let failed = 0

async function grab({ url, file }) {
  const dest = path.join(outDir, file)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1024) {
    done++
    return console.log(`  · skip  ${file} (already downloaded)`)
  }
  try {
    const res = await fetch(url, { redirect: 'follow' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(dest, buf)
    done++
    console.log(`  ✓ ${file}  (${(buf.length / 1024).toFixed(0)} KB)`)
  } catch (err) {
    failed++
    console.warn(`  ✗ ${file}  — ${err.message}`)
  }
}

// Small concurrency pool so we stay polite to the CDN.
const POOL = 6
const queue = [...jobs]
await Promise.all(
  Array.from({ length: POOL }, async () => {
    while (queue.length) await grab(queue.shift())
  }),
)

console.log(`\n  Finished: ${done} saved, ${failed} failed.`)
if (failed) {
  console.log('  Any file that failed will still stream from the CDN at runtime.')
}
console.log('  Now set VITE_LOCAL_ASSETS=true in .env and restart the dev server.\n')
