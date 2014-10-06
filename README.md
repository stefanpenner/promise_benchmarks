promise_benchmarks
==================

some micro benchmarks with plans for more indepth benchmarks as time permits.


Getting Started
===============

```sh
npm i
PORT=9999 grunt server
// navigate to http://127.0.0.1:9999 (PORT is configurable, defaults: 8000)
```

```sh
// to run in node
npm start
```
#### Specify Custom Tests
To specify custom tests to run in node, specify a list of regexes prefixed with t= or tests= as in the example below. 
The regex will match on the name of the test provided.

```sh
// Match all tests that either start with 'micro-' or have a number in their name
node index.js --test=filter
node index.js --test="all object"
node index.js --test="all object",filter //combined
```
