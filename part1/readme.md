# Part 1

## Description

Here I used `Minimist` to help process command line arguments.

## Installation

- Ensure that `node` is installed
- Run `npm install`

## Usage

`travel-cli` takes the following arguments:

- -p \<latitude\>,\<longitude\>
- -d \<latitude\>,\<longitude\>
- [--passengers \<number of passengers\>]

If passengers is not specified, the value of 1 is assumed.

Example usage:

```
node travel-cli.js -p 1.0214,23 -d 19,8.2345
```

```
node travel-cli.js -p 1.0214,23 -d 19,8.2345 --passengers 7
```
