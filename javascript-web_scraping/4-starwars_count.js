#!/usr/bin/node

let count = 0;

require('request')(process.argv[2], (e, r, data) => {
  for (const movie of JSON.parse(data).results) {
    for (const char of movie.characters) {
      if (char.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
