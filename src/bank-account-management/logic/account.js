class Account {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.balance = 0;
    this.isLoggedIn = false;
  }

  getName() {
    return this.name;
  }

  getPassword() {
    return this.password;
  }

  deposit(amount) {
    if (!this.isLoggedIn) {
      throw new Error("Please Login to deposit");
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (!this.isLoggedIn) {
      throw new Error("Please Login to withdraw");
    }
    if (amount > this.balance) {
      throw new Error("You have Insufficient balance");
    }
    this.balance -= amount;
    return this.balance;
  }

  getBalance() {
    if (!this.isLoggedIn) {
      throw new Error("Please Login to get balance");
    }
    return this.balance;
  }

  login(password) {
    if (password !== this.password) {
      throw new Error("Invalid account or password");
    }
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isLoggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(loggedIn) {
    this.isLoggedIn = loggedIn;
  }
}

export { Account };
