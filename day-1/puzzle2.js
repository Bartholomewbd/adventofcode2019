const fs = require("fs");

fs.readFile("mass.txt", "utf8", (err, data) => {
  if (err) throw err;
  let mass = data.split("\r\n");
  let fuelTotal = 0;
  mass.forEach(weight => {
    while (weight > 5) {
      weight = Math.floor(Number(weight) / 3) - 2;
      fuelTotal += weight;
    }
  });

  console.log(fuelTotal);
});
