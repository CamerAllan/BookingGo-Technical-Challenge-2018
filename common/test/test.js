var assert = require("assert");
const test1 = require("./resources/test1");
const test2 = require("./resources/test2");
const supplier = require("./../supplier");

describe("Supplier", () => {
  describe("Response processing", () => {
    it("should only keep cheapest option for each car type", () => {
      assert.deepStrictEqual(
        supplier.processResponse(test1.response),
        test1.processed
      );
    });
  });
  describe("Response filtering", () => {
    it("should remove all transport options with fewer than 5 seats", () => {
      assert.deepStrictEqual(
        supplier.filterPassengers(test2.response, 5),
        test2.filtered
      );
    });
    it("should remove no transport options", () => {
      assert.deepStrictEqual(
        supplier.filterPassengers(test2.response, 0),
        test2.response
      );
    });
  });
  describe("Car big enough", () => {
    it("should accept car's own capacity", () => {
      Object.keys(supplier.capacities).forEach(carType => {
        assert(supplier.carBigEnough(carType, supplier.capacities[carType]));
      });
    });

    it("should reject number greater than car's capacity", () => {
      Object.keys(supplier.capacities).forEach(carType => {
        assert(
          !supplier.carBigEnough(carType, supplier.capacities[carType] + 1)
        );
      });
    });
  });
});
