#!/usr/bin/node

require("https").get(process.argv[2], r => { console.log("code:", r.statusCode); });
