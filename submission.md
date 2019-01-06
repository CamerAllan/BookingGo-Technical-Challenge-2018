# BookingGo Technical Test Submission

## Before running Part 1 or Part 2

Parts 1 and 2 rely on `common`. Please run the following commands before attempting to execute them:

- `cd common`
- `npm install`

Readme's can be found within `part1` and `part2`, describing their operation and functionality.

## Approach

My approach for this challenge was to complete both parts using a common codebase in order to maximise code reuse. I used `node` due to the ease of creating a RESTful API using `express`.

## Testing

I wrote `mocha` unit tests for some sections of the common code between part1 and part2. These are fairly inextensive and serve more of a proof of concept (I have some testing ability). These tests can be run with `npm test` from `./common`.

Given more time I would further test parts 1 and 2, perhaps also using `sinon.js` stubs to test the API.

I hope you enjoy looking through my submission, thank you for your consideration :)
