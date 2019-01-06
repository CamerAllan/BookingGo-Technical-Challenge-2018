const processed = {
  STANDARD: {
    price: 119437,
    supplier: "ERIC"
  },
  EXECUTIVE: {
    price: 46907,
    supplier: "DAVE"
  },
  LUXURY: {
    price: 238477,
    supplier: "JEFF"
  },
  LUXURY_PEOPLE_CARRIER: {
    price: 515335,
    supplier: "JEFF"
  },
  MINIBUS: {
    price: 808619,
    supplier: "ERIC"
  }
};

const response = [
  {
    supplier_id: "ERIC",
    pickup: "1,2",
    dropoff: "2,1",
    options: [
      {
        car_type: "STANDARD",
        price: 119437
      },
      {
        car_type: "EXECUTIVE",
        price: 581145
      },
      {
        car_type: "LUXURY",
        price: 391566
      },
      {
        car_type: "LUXURY_PEOPLE_CARRIER",
        price: 935091
      },
      {
        car_type: "MINIBUS",
        price: 808619
      }
    ]
  },
  {
    supplier_id: "JEFF",
    pickup: "1,2",
    dropoff: "2,1",
    options: [
      {
        car_type: "EXECUTIVE",
        price: 89470
      },
      {
        car_type: "LUXURY",
        price: 238477
      },
      {
        car_type: "LUXURY_PEOPLE_CARRIER",
        price: 515335
      }
    ]
  },
  {
    supplier_id: "DAVE",
    pickup: "1,2",
    dropoff: "2,1",
    options: [
      {
        car_type: "STANDARD",
        price: 206495
      },
      {
        car_type: "EXECUTIVE",
        price: 46907
      },
      {
        car_type: "LUXURY",
        price: 724469
      }
    ]
  }
];

module.exports = {
  response,
  processed
};
