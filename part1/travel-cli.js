const minimist = require("minimist");
const supplier = require("../common/supplier");

const args = minimist(process.argv.slice(2));

if (!(args.p && args.d)) {
  console.error(
    "Please specify both pickup and dropoff location with flags -p and -d"
  );
  process.exit();
}

let passengers = 1;
if (args.passengers) {
  if (isNumber(args.passengers) && Number.isInteger(args.passengers)) {
    passengers = args.passengers;
  } else {
    console.error("Please enter passengers as an integer");
    process.exit();
  }
}

const pickup = {};
const dropoff = {};
const pArray = args.p.split(",");
const dArray = args.d.split(",");

if (pArray.length != 2 || dArray.length != 2) {
  console.error(
    "Please enter latitude and longitude in the following format:\n <latitude>,<longitude>"
  );
  process.exit();
}

if (
  !isNumber(pArray[0]) ||
  !isNumber(pArray[1]) ||
  !isNumber(dArray[0]) ||
  !isNumber(dArray[1])
) {
  console.error("Please ensure that latitude and longitude are both numbers");
  process.exit();
}

pickup.lat = pArray[0];
pickup.long = pArray[1];
dropoff.lat = dArray[0];
dropoff.long = dArray[1];

supplier
  .compareSuppliers(pickup, dropoff, passengers)
  .then(value => {
    sortablePrices = [];
    for (var carType in value.prices) {
      if (value.prices.hasOwnProperty(carType)) {
        sortablePrices.push({ [carType]: value.prices[carType] });
      }
    }
    if (sortablePrices.length === 0) {
      console.log("No offers found matching criterea");
    } else {
      // sort by price
      sortablePrices.sort((a, b) => {
        return a[Object.keys(a)[0]].price - b[Object.keys(b)[0]].price;
      });
      sortablePrices.forEach(p => {
        carType = Object.keys(p)[0];
        console.log(
          carType + " - " + p[carType].supplier + " - " + p[carType].price
        );
      });
    }
    process.exit();
  })
  .catch(e => {
    console.log("Could not retreive data: " + e.message);
    process.exit();
  });

function isNumber(val) {
  return !isNaN(val);
}
