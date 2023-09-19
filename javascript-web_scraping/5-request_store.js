#!/usr/bin/node

require('request')(process.argv[2], (e, r, d) => {
  require('fs').writeFile(process.argv[3], d, e => { if (e) console.error(e); });
});
