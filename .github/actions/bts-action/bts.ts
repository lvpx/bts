const core = require('@actions/core');

const run = async (): Promise<void> => {
  const steps = core.getInput('content');
  const title = `${ process.env['GITHUB_WORKFLOW'] } #${core.getInput('run-number')} triggered via ${ process.env['GITHUB_EVENT_NAME']} by ${ process.env['GITHUB_ACTOR']}`;

}

run()

export default run
