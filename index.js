const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./helpers/index");
const savePasswordTofile = require("./helpers/common");

program.version("1.0.0").description("A simple tool to generate password");

program
  .option("-l, --length <number>", "length of the password", "8")
  .option("-s, --save", "save password to into the passwords.txt file")
  .option("-nn, --no-numbers", "No numbers in the password")
  .option("-ns, --no-symbols", "No symbols in the password")
  .parse();

//   console.log(program.opts());

// now extract options from program.opts() method

const { length, save, numbers, symbols } = program.opts();
const tempPass = createPassword(length, numbers, symbols);
// console.log(tempPass);

// if request to save the password then do this
if (save) {
  savePasswordTofile(tempPass);
}

// Copy password to the clipboard
clipboardy.writeSync(tempPass);

// Output generated password
console.log(
  chalk.blue("Generated Password Successfully: ") +
    chalk.bold(tempPass)
);
console.log(chalk.yellow("Password copied to clipboard"));
