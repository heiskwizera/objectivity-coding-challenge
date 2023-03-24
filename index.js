import rl from "readline-sync";

import { testArrayChange } from "./src/array-change/index.js";
import { BankManagement } from "./src/bank-account-management/index.js";

let option = 0;
do {
  console.log("Coding Challenges");
  console.log("1 : Array Change");
  console.log("2 : Bank Management");
  console.log("3 : Exit");
  option = rl.questionInt("Enter Challenge :: ");
  switch (option) {
    case 1:
      testArrayChange();
      break;
    case 2:
      BankManagement();
      break;
    case 3:
      console.log("Thank you for using my code");
      break;
    default:
      console.log("Invalid option");
  }
} while (option !== 3);