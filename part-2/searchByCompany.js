#!/usr/bin/env node

const command = process.argv[2];

if (command !== 'company') {
  throw new Error('please enter "company" followed by the company name.');
}
try {
  // program code here
} catch (e) {
  console.log(e);
}
