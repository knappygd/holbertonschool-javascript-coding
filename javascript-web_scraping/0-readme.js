#!/usr/bin/node

require('fs').readFile(process.argv[2], (e, d) => { e ? console.error(e) : console.log(`${d}`); });
