const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const defaultNumbers = "0123456889";
const defaultSyombels = "!@#$%^&*+-=";

/**
 *
 * @param {string default password and length is 8 character} passwordLength
 * @param {boolean} allowNumber
 * @param {boolean} allowSyombels
 */
const createPassword = (
  passwordLength = 8,
  allowNumber = false,
  allowSyombels = false
) => {
  let defaultPassword = alphabets;
  allowNumber ? (defaultPassword += defaultNumbers) : "";
  allowSyombels ? (defaultPassword += defaultSyombels) : "";

  return generatePassword(passwordLength, defaultPassword);
};

/**
 * Generate Password using length and provided Password Characters
 * @param {number} length
 * @param {string} passwordChars
 */

const generatePassword = (length, passwordChars) => {
  let password = "";

  for (let i = 0; i < length; i++) {
    password += passwordChars.charAt(
      Math.floor(Math.random() * passwordChars.length)
    );
  }

  return password;
};

module.exports = createPassword;
