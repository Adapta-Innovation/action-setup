import { getInput, InputOptions } from '@actions/core'
import expandTilde from 'expand-tilde'
import { RunInstall, parseRunInstall } from './run-install'

export interface Inputs {
  readonly version: string
  readonly dest: string
  readonly binDest: string
  readonly registry: string
  readonly runInstall: RunInstall[]
}

const options: InputOptions = {
  required: true,
}

const parseInputPath = (name: string) => expandTilde(getInput(name, options))

export const getInputs = (): Inputs => ({
  version: getInput('version', options),
  dest: parseInputPath('dest'),
  binDest: parseInputPath('bin_dest'),
  registry: getInput('registry', options),
  runInstall: parseRunInstall('run_install'),
})

export default getInputs
