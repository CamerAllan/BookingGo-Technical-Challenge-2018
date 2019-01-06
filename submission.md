# BookingGo Technical Test Submission

## Before running Part 1 or Part 2

Parts 1 and 2 rely on `common`. Please run the following commands before attempting to run them:

- `cd common`
- `npm install`

Within `part1` and `part2` can be found readme's describing their operation and functionality.

## Approach

My approach for this challenge was to complete both parts using a common codebase in order to maximise code reuse. I chose to do this using `node`, due to the ease of creating a RESTful API using `express`. My second choice would have been to use Python & `flask` (I feel this would have made part 1 slightly more straightforward, as using node as a CLI felt a bit strange to me).

## Testing

I wrote some `mocha` unit tests for some of the common code between part1 and part2. These are fairly inextensive, and serve more of a proof of concept (I have some testing ability).

Given more time I would have liked to more thoroughly test parts 1 and 2 rather than just the common code, perhaps also using `sinon.js` stubs to test the API.

I hope you enjoy looking through my submission, thank you for your consideration :)
