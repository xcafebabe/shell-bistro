import { Command } from 'commander';
import { spinnerError, spinnerStop } from './spinner.js';
// Commands
import { command as multimediaFileArrange } from './commands/multimedia-file-arrange.js';

const program = new Command();
program.description('Shell command recipes written in JavaScript');
program.option('-v, --verbose', 'verbose logging');
program.version('1.0.0', '--version', 'output the current version');
program.addCommand(multimediaFileArrange);

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
