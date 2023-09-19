#!/usr/bin/node

const arr = [];
const dict = {};

require('request')(process.argv[2], (e, r, data) => {
    for (const i of JSON.parse(data)) {
        if (!arr.includes(i.userId)) { arr.push(i.userId); }
    }
    for (let key = 1; key <= arr.length; key++) { dict[key] = 0; }
    for (const i of JSON.parse(data)) {
        if (i.completed) { dict[i.userId] += 1; }
    }
    for (let i = 1; i <= 10; i++) {
        if (dict[`${i + 1}`] === 0) { delete dict[`${i + 1}`]; }
    }
    console.log(dict);
});
