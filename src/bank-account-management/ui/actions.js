import { Account } from "../logic/account.js";
import { isValidAmount, isValidAccountName, isValidPassword } from "../utils/validator.js";
import { readAccountName, readPassword, readAmount } from "./readline.js";

const accounts = new Map();
let activeUser = null;

function showMenu() {
  if (!activeUser) {
    return `
    1. Login 
    2. Create Account
    0. Exit
  `;
  }
  return `
    3. Deposit
    4. Withdraw
    5. Get Balance
    6. Logout
  `;
}

function createAccount() {
  if (activeUser != null) throw new Error("Invalid option");
  const accountName = readAccountName();
  if (!isValidAccountName(accountName))
    throw new Error("Account name must be at least 1 character long");
  const password = readPassword();
  if (!isValidPassword(password)) throw new Error("Password must be at least 4 characters long");

  if (accounts.has(accountName)) {
    throw new Error("Account already exists");
  }

  const account = new Account(accountName, password);
  accounts.set(accountName, account);
  console.log("Account created successfully, Login to continue");
}

function login() {
  if (activeUser != null) throw new Error("Invalid option");
  const accountName = readAccountName();
  if(!isValidAccountName(accountName)) throw new Error("Account Name is required");
  const password = readPassword();
  if (!accounts.has(accountName)) {
    throw new Error("Account does not exist, Try again");
  }

  const account = accounts.get(accountName);
  if (account.getPassword() !== password) {
    throw new Error("Invalid password Try again");
  }

  account.setLoggedIn(true);
  activeUser = account;

  console.log(`Welcome, ${accountName}`);
}

function showActiveUser(action) {
  console.log(`Active account: ${activeUser.getName()}`);
  console.log(`Activity: ${action}`);
}

function deposit() {
  if (!activeUser) {
    throw new Error("An authorized request /deposit");
  }
  const amount = readAmount();
  if (!isValidAmount(amount)) throw new Error("Invalid input");
  showActiveUser("DEPOSIT");
  const balance = activeUser.deposit(amount);
  console.log(`Deposit successful. New balance: ${balance}`);
}

function withdraw() {
  if (!activeUser) {
    throw new Error("An authorized request /withdraw");
  }
  const amount = readAmount();
  if (!isValidAmount(amount)) throw new Error("Invalid input");
  showActiveUser("WITHDRAW");
  const balance = activeUser.withdraw(amount);
  console.log(`Withdrawal successful. New balance: ${balance}`);
}

function getBalance() {
  if (!activeUser) {
    throw new Error("An authorized request /balance");
  }
  showActiveUser("GET BALANCE");
  const balance = activeUser.getBalance();
  console.log(`Balance: ${balance}`);
}

function logout() {
  activeUser.logout();
  activeUser = null;
}

export { createAccount, login, deposit, withdraw, getBalance, logout, showMenu };
