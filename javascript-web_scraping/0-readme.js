#!/usr/bin/node

require('fs').readFile(process.argv[2], (e, d) => { e ? console.log(`${e}`) : console.log(`${d}`); });
