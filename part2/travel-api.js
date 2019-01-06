const express = require("express");
const bodyParser = require("body-parser");
const supplier = require("../common/supplier");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get("/", (req, res) => {
  const query = req.query;
  const numPeople = query.passengers;
  const pickup = query.pickup;
  const dropoff = query.dropoff;

  supplier.compareSuppliers(pickup, dropoff, numPeople).then(value => {
    res.json(value);
  });
});

app.use("/api", router);

// Start server
app.listen(port);
console.log("Server starting on port " + port);
