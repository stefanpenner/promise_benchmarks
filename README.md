promise_benchmarks
==================

some micro benchmarks with plans for more indepth benchmarks as time permits.


Usage
=====

```sh
npm i

```

commandline 
--------------

```sh
// Match all tests that either start with 'micro-' or have a number in their name
node index.js --test=filter
node index.js --test="all object"
node index.js --test="all object",filter //combined
node index.js --impl="rsvp"
node index.js --impl="rsvp-3.0.8","when" // more specific
node index.js -i=1,2,3 // choose the iteration counts
node index.js --impl=when,q,rsvp --test=filter,"all object" -i=1,2,3 // all together
```

webserver
---------

```sh
PORT=9999 grunt server
// navigate to http://127.0.0.1:9999 (PORT is configurable, defaults: 8000)
```
