import type { PasswordOptions } from "../types";

export function generatePassword(options: PasswordOptions = {}) {
  const defaultOptions: PasswordOptions = {
    length: 8,
    useNumbers: true,
    useSymbols: false,
  };

  const { length, useNumbers, useSymbols } = {
    ...defaultOptions,
    ...options,
  };

  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".concat(
      useNumbers ? "0123456789" : "",
      useSymbols ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : ""
    );

  const passwordLength = length !== undefined ? length : defaultOptions.length;

  let password = "";
  if(passwordLength){
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  }

  return password;
}

// Cleaned up by removing debugging statements, standardizing variable names, improving readability, and simplifying the code.
