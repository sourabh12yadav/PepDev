let help=require("./command/help");
let organize=require("./command/organize");
let inputArr=process.argv.slice(2);
switch(inputArr[0])
{
  case "help":
      help.fnx();
      break;
  case "view":
      console.log("view");
      break;
  case "organize":
      organize.ofnx(inputArr[1]);
      break;
  default:
      console.log("Please enter a valid command");

}