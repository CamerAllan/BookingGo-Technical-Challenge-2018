# Part 2

## Installation

- Ensure that `node` is installed
- Run `npm install`

## Usage

First ensure that no other processes are blocking port 8080. Start the server with the following command:

```
node travel-api
```

The body of the API request takes place in the query - after the `?`. Here's an example:

```
<endpoint>?pickup[lat]=1&pickup[long]=2&dropoff[lat]=2&dropoff[long]=1&passengers=3
```

Currently the endpoint is set as `http://localhost:8080/api/`, so try the following:

```
http://localhost:8080/api/?pickup[lat]=1&pickup[long]=2&dropoff[lat]=2&dropoff[long]=1&passengers=3
```

The components of the query are as follows:

- pickup[lat]
- pickup[long]
- dropoff[lat]
- dropoff[long]
- passengers

These can be specified in any order.
