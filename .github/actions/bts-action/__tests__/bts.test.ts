import * as core from '@actions/core'
import run from '../bts'

beforeEach(() => {
  jest.resetModules()
  process.env['INPUT_AMAZING-CREATURE'] = 'person'
})

afterEach(() => {
  delete process.env['INPUT_AMAZING-CREATURE']
})


describe('bts action debug messages', () => {
    it('outputs a debug message', async () => {
      process.env['INPUT_AMAZING-CREATURE'] = 'person'
      const debugMock = jest.spyOn(core, 'debug')
      await run()
      expect(debugMock).toHaveBeenCalledWith('👋 Hello! You are an amazing person! 🙌')
    })
})

describe('bts action output', () => {
  it('sets the action output', async () => {
    const setOutputMock = jest.spyOn(core, 'setOutput')
    await run()
    expect(setOutputMock).toHaveBeenCalledWith(
      'amazing-message',
      '👋 Hello! You are an amazing person! 🙌',
    )
  })
})
