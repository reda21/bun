import { createHash } from 'crypto';

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



export function hashPassword(password: string): string {
  const hash = createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}


// Cleaned up by removing debugging statements, standardizing variable names, improving readability, and simplifying the code.
