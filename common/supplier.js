const axios = require("axios");

const httpClient = axios.create();
httpClient.defaults.timeout = 2000;
httpClient.defaults.baseURL = "https://techtest.rideways.com/";

const capacities = {
  STANDARD: 4,
  EXECUTIVE: 4,
  LUXURY: 4,
  PEOPLE_CARRIER: 6,
  LUXURY_PEOPLE_CARRIER: 6,
  MINIBUS: 16
};

const suppliers = ["dave", "eric", "jeff"];

function filterPassengers(supplierResponses, numPeople) {
  supplierResponses.forEach(r => {
    r.options = r.options.filter(option =>
      carBigEnough(option.car_type, numPeople)
    );
  });
  return supplierResponses;
}

function processResponse(responses) {
  const result = {};
  Object.keys(capacities).forEach(ct => {
    responses.forEach(response => {
      // overwrite more expensive cars with cheaper ones
      response.options.forEach(option => {
        if (
          option.car_type === ct &&
          (result[ct] === undefined || result[ct].price > option.price)
        ) {
          result[ct] = { price: option.price, supplier: response.supplier_id };
        }
      });
    });
  });

  return result;
}

const compareSuppliers = async (pickup, dropoff, numPeople = 1) => {
  try {
    const supplierPromises = [];
    const supplierResponses = [];
    suppliers.forEach(s => {
      const sup = callSupplier(s, pickup, dropoff);
      supplierPromises.push(sup);
      sup
        .then(value => supplierResponses.push(value.data))
        .catch(error =>
          console.info(
            `Failed to retrieve data from supplier \'${s}\': ${error}`
          )
        );
    });

    // we want all promises to be either fulfilled OR rejected but not pending
    return Promise.all(supplierPromises.map(p => p.catch(e => e)))
      .then(() => {
        // supplierResponses now contains all the responses we can get
        if (supplierResponses) {
          filterPassengers(supplierResponses, numPeople);
        }
        const processedResponse = processResponse(supplierResponses);
        const finalResult = {
          suppliersAttempted: suppliers.length,
          suppliersCompared: supplierResponses.length,
          prices: processedResponse
        };
        return finalResult;
      })
      .catch(e => console.log(e));
  } catch (error) {
    console.log(error);
  }
};

const callSupplier = (supplierId, pickup, dropoff) => {
  const req = `${supplierId}?pickup=${pickup.lat},${pickup.long}&dropoff=${
    dropoff.lat
  },${dropoff.long}`;
  return httpClient.get(req);
};

const carBigEnough = (carType, passengerNum) => {
  switch (carType) {
    case "STANDARD":
      return passengerNum <= capacities.STANDARD;
    case "EXECUTIVE":
      return passengerNum <= capacities.EXECUTIVE;
    case "LUXURY":
      return passengerNum <= capacities.LUXURY;
    case "PEOPLE_CARRIER":
      return passengerNum <= capacities.PEOPLE_CARRIER;
    case "LUXURY_PEOPLE_CARRIER":
      return passengerNum <= capacities.LUXURY_PEOPLE_CARRIER;
    case "MINIBUS":
      return passengerNum <= capacities.MINIBUS;
    default:
      return false;
  }
};

const e = {
  callSupplier: callSupplier,
  carBigEnough,
  compareSuppliers: compareSuppliers,
  filterPassengers,
  processResponse,
  capacities
};

module.exports = e;
