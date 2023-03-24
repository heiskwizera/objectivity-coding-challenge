import rl from "readline-sync";

function readOption() {
  let option = "";
  option = rl.questionInt("Enter option: ");
  return option;
}

function readAccountName() {
  let accountName = "";
  accountName = rl.question("Enter account name: ");
  return accountName;
}

function readPassword() {
  let password = "";
  password = rl.question("Enter password: ", { hideEchoBack: true, mask: "*" });
  return password;
}

function readAmount() {
  let amount = 0;
  amount = rl.questionInt("Enter amount : ");
  return amount;
}


export {readOption, readAccountName, readPassword, readAmount };
