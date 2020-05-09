import { spawnSync } from 'child_process'
import { setFailed } from '@actions/core'
import { Inputs } from '../inputs'
import { patchPnpmEnv } from '../utils'

export function pruneStore(inputs: Inputs) {
  if (inputs.runInstall.length === 0) {
    console.log('Pruning is unnecessary.')
    return
  }

  console.log('Running pnpm store prune')
  const { error, status } = spawnSync('pnpm', ['store', 'prune'], {
    stdio: 'inherit',
    shell: true,
    env: patchPnpmEnv(inputs)
  })

  if (error) {
    setFailed(error)
    return
  }

  if (status) {
    setFailed(`command pnpm store prune exits with code ${status}`)
    return
  }
}

export default pruneStore
