import { showMenu, createAccount, deposit, withdraw, getBalance, login,logout } from "./actions.js";
import { readOption } from "./readline.js";

function displayUI() {
  console.log("WELCOME TO BANK ACCOUNT MANAGEMENT");
  console.log("==================================");

  let option;
  do {
    console.log(showMenu());
    option = readOption();
    try {
      switch (option) {
        case 1:
          login();
          break;
        case 2:
          createAccount();
          break;
        case 3:
          deposit();
          break;
        case 4:
          withdraw();
          break;
        case 5:
          getBalance();
          break;
        case 6:
            logout();
            return;
        case 0:
          console.log("Thank you for banking with us, Back to Challenges");
          return;
        default:
          console.log("Invalid option");
      }
    } catch (error) {
      console.error(`Message : ${error.message}`);
    }
  } while (option !== 0);
}

export default displayUI;
