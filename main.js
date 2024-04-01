#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 4 + 1);
const answers = await inquirer.prompt([{
        name: "userName",
        type: "number",
        message: "please a gussed number",
    }]);
if (answers.userName === RandomNumber) {
    console.log("congratulation,you guessd a rigth number");
}
else {
    console.log("try again");
}
