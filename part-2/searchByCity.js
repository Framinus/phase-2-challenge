#!/usr/bin/env node

// searchByCity.js takes one string argument (let's call it the city),
// finds all the clients from clients.json who have a city that exactly matches the city,
// and prints the id, rep_name, company, city, and state of each matching client.

const fs = require('fs');

const city = process.argv.slice(2).join(' ');

if (city === undefined) {
  throw new Error('please enter a city name.');
}
try {
  console.log(`Finding cities with name ${city}`);
  const contactObj = JSON.parse(fs.readFileSync('./clients.json'));
  for (let i = 0; i < contactObj.length; i += 1) {
    if (city === contactObj[i].city.toLowerCase()) {
      console.log(`
        [
          {
            id: "${contactObj[i].id}",
            rep_name: "${contactObj[i].rep_name}",
            company: "${contactObj[i].company}",
            city: "${contactObj[i].city}",
            state: "${contactObj[i].state}"
          }
        ]
        `);
    }
  }
} catch (e) {
  console.log(e);
}
