# Part 1

## Description

Here I used `Minimist` to help process command line arguments. This program aggregates data from all three suppliers, and supports filtering the number of passengers through an optional argument.

## Installation

- Ensure that `node` is installed
- Run `npm install`

## Usage

`travel-cli` takes the following arguments:

- -p \<latitude\>,\<longitude\> // pickup location
- -d \<latitude\>,\<longitude\> // dropoff location
- [--passengers \<number of passengers\>]

If the number of passengers is not specified, the value of 1 is assumed as this returns all results (assuming nobody offers 0 passenger transport solutions).

Example usage:

```
node travel-cli.js -p 1.0214,23 -d 19,8.2345
```

```
node travel-cli.js -p 1.0214,23 -d 19,8.2345 --passengers 7
```
