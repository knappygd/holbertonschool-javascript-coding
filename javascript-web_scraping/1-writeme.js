#!/usr/bin/node

require('fs').writeFile(process.argv[2], process.argv[3], e => { if (e) console.error(e); });
