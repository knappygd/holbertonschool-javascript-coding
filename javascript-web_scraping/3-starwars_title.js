#!/usr/bin/node

require('request')('https://swapi-api.hbtn.io/api/films/' + process.argv[2], (e, r, data) => {
  e ? console.error(e) : console.log(JSON.parse(data).title);
});
