#!/usr/bin/env node

// searchByCompany.js takes one string argument (let's call it company),
// finds all the clients from clients.json who have a company that starts with the company string,
// and prints the id, company and phone of each matching client.
const fs = require('fs');

const command = process.argv[2];
const companyName = process.argv.slice(3).join(' ');

if (command !== 'company') {
  throw new Error('please enter "company" followed by the company name.');
}
console.log(`Finding companies with name ${companyName}...\n`);

try {
  // program here
  const contactObj = JSON.parse(fs.readFileSync('./clients.json'));
  for (let i = 0; i < contactObj.length; i += 1) {
    if (companyName === contactObj[i].company) {
      console.log(
        {
          id: contactObj[i].id,
          company: contactObj[i].company,
          phone: contactObj[i].phone },
      );
    }
  }
} catch (e) {
  console.log(e);
}
