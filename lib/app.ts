import type { PasswordOptions } from "../types";


export function generatePassword(options: PasswordOptions = {}) {
  const defaultOptions: PasswordOptions = {
    length: 8,
    useNumbers: true,
    useSymbols: false
  };

  const finalOptions = { ...defaultOptions, ...options };

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let characters = alphabet;
  if (finalOptions.useNumbers || characters.length === 0) characters += numbers;
  if (finalOptions.useSymbols || characters.length === 0) characters += symbols;

  const passwordLength = finalOptions.length !== undefined ? finalOptions.length : defaultOptions.length;

  let password = '';
  if(passwordLength){
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  }

  return password;
}



