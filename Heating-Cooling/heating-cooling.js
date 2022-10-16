let actualTemp = 68;
let desiredTemp = 68;

if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else if (actualTemp == desiredTemp) {
  console.log("Standby");
}
