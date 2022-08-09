import { $ } from 'deploy/execute'
import { defineVuesticBuild } from './define-vuestic-build'
import { buildStart } from './steps/buildStart'
import { buildEnd } from './steps/buildEnd'

defineVuesticBuild(async () => {
  buildStart()

  await Promise.all([
    $('npm run build:types', { successMessage: 'types built' }),
    $('vite build --config ./build/vite/configs/vite.cjs.js', { successMessage: 'cjs built' }),
    $('vite build --config ./build/vite/configs/vite.iife.js', { successMessage: 'iife built' }),
    $('vite build --config ./build/vite/configs/vite.esm.js', { successMessage: 'esm built' }),
    $('vite build --config ./build/vite/configs/vite.mjs.js', { successMessage: 'esm-node built' }),
    $('vite build --config ./build/vite/configs/vite.styles.js', { successMessage: 'styles built' }),
    $('vite build --config ./build/vite/configs/vite.styles-essential.js', { successMessage: 'essential styles built' }),
  ])

  buildEnd()
})