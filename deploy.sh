#!/bin/sh

tar cpf - . | pv | ssh og "tar xpf - -C ~/htdocs/"
tar cpf - implementations/rsvp/dist/.  | pv | ssh og "tar xpf - -C ~/htdocs/promise_benchmarks/implementations/rsvp/dist"
