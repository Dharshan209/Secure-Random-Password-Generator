const generateBtn = document.getElementById('generate-btn');
const passwordLengthEl = document.getElementById('password-length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generatedPasswordEl = document.getElementById('generated-password');

function generatePassword() {
  let password = '';
  const chars = [];

  if (lowercaseEl.checked) {
    chars.push(...'abcdefghijklmnopqrstuvwxyz');
  }
  if (uppercaseEl.checked) {
    chars.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  if (numbersEl.checked) {
    chars.push(...'0123456789');
  }
  if (symbolsEl.checked) {
    chars.push(...'!@#$%^&*()-_+={}[]|:;<>,./?');
  }

  for (let i = 0; i < passwordLengthEl.value; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}

generateBtn.addEventListener('click', () => {
  generatedPasswordEl.textContent = generatePassword();
});

