import * as core from '@actions/core'

// @ts-ignore
import * as ghAvatar from 'gh-avatar'

async function run(): Promise<void> {
  try {
    const profile_url = await ghAvatar.default(core.getInput('username'))
    core.info(`profile url ${profile_url}`)
    core.setOutput('profile_url', profile_url)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
