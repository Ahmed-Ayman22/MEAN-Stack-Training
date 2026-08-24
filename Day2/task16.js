let day = prompt("Enter the day:");

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Workday");
    break;
  default:
    console.log("Invalid day");
}
