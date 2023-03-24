export function isValidAccountName(accountName) {
 return accountName.length >= 1;
}

export function isValidPassword(password) {
 return password.length >= 4;
}

export function isValidAmount(amount) {
 return amount >= 0;
}

export function isAccountExists(accounts, accountName) {
    return accountName in accounts;
}