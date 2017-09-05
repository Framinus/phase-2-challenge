#!/usr/bin/env node

// searchByCompany.js takes one string argument (let's call it company),
// finds all the clients from clients.json who have a company that starts with the company string,
// and prints the id, company and phone of each matching client.
const fs = require('fs');

const company = process.argv.slice(2).join(' ');

if (company === undefined) {
  throw new Error('must enter a company name');
}

try {
  console.log(`Finding companies with name "${company}"...\n`);
  const contactObj = JSON.parse(fs.readFileSync('./clients.json'));
  for (let i = 0; i < contactObj.length; i += 1) {
    if (company === contactObj[i].company.toLowerCase()) {
      console.log(`
        [
          {
            id: "${contactObj[i].id}",
            company: "${contactObj[i].company}",
            phone: "${contactObj[i].phone}"
          },
        ]
      `);
    }
  }
} catch (e) {
  console.log(e);
}
