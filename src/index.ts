import { Command } from 'commander';
import { spinnerError, spinnerStop } from './spinner.js';
//import { widgets } from './widgets';
const program = new Command();
program.description('Our New CLI');
program.option('-v, --verbose', 'verbose logging');
program.version('0.0.1', '--version', 'output the current version');
//program.addCommand(widgets);

async function main() {
  await program.parseAsync();
  if (process.argv.length <= 2) {
    program.help();
  }
}

console.log();
main();

process.on('unhandledRejection', function (err: Error) {
  const debug = program.opts().verbose;
  if (debug) {
    console.error(err.stack);
  }
  spinnerError();
  spinnerStop();
  program.error('', { exitCode: 1 });
});
