# Objectivity Coding Challenge

This repository contains two challenges for the Objectivity coding challenge. Below you will find instructions on how to run the challenges and a brief description of each challenge.

## Submission guidance

Inside the `src` folder, you will find two challenge folders that share the same entry point as the "index" file located in the root directory. With the aid of the console, you can effortlessly toggle between the challenges.

## Challenge 1: Array Change

Create a function that takes two arrays (original array, updated array) as input and returns two arrays of modifications (new elements, removed elements).

### Implementation

The `arrayChange` function is implemented using JavaScript. It takes two arrays as arguments and returns two arrays, one for the new elements and another for removed elements.

### Checklist

- [x] Implement the `arrayChange` function in JavaScript.
- [x] Test the `arrayChange` function with sample inputs.

## Challenge 2: Simple Bank Account System

Create a console application that simulates a simple bank account system. The app should allow users to create accounts, deposit and withdraw money, and view their account balance. Implement basic error handling, such as preventing negative balances.

### Implementation

The `BankAccount` program is implemented using a class-based approach in Javascript. It has methods for creating accounts, depositing and withdrawing money, and viewing the account balance.

### Checklist

- [x] User Can Create Account
- [x] User Can Login
- [x] User Can Deposit, Withdraw, View Balance
- [x] User Must have logged in to perform above Operations
- [x] User Can Logout
- [x] User information such as name, password, balance must persist even after logout until app is terminated.

### Expectations

Upon accessing the bank account management menu, the user will be presented with a range of options to choose from. The first three options include account creation, login, or exiting the application altogether. Once the user has successfully created an account and logged in using their information, they will be presented with a comprehensive menu offering the ability to deposit, withdraw, view their balance, or logout of the application. The user will be able to perform these operations as many times as they wish until they choose to logout of the application.

## Testing

To test both challenges, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/heiskwizera/objectivity-coding-challenge.git
   ```

2. Enter project directory:

   ```
   cd objectivity-coding-challenge
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the app:

   ```
   node index.js
   ```

5. Follow the instructions on the console to test the `arrayChange` function and the `BankAccount` program.

Author: KWIZERA Fabrice

Thank you for considering my solutions. If you have any feedback or questions, please feel free to contact me at [he.kwizera@gmail.com].