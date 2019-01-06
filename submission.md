# BookingGo Technical Test Submission

## Before running Part 1 or Part 2

Parts 1 and 2 rely on `common`. Please run the following commands before attempting to run them:

- `cd common`
- `npm install`

My approach for this challenge was to complete both parts using a common codebase, rather than calling part 1 from part 2. I chose to do this using `node.js`, due to the ease of creating a RESTful API using `express`. My second choice would have been to use Python with flask (I feel this would have made part 1 slightly more straightforward as using node as a CLI felt a bit strange to me).

Within `part1` and `part2` can be found readme's describing their respective functionality.

Given more time I would have liked to more thoroughly test parts 1 and 2 rather than just the common code. I would also probably use `Sinon.js` stubs to test the API.
