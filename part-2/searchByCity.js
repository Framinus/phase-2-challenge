#!/usr/bin/env node

const command = process.argv[2];

if (command !== 'city') {
  throw new Error('please enter "city" followed by the city name.');
}
try {
  // program code here
} catch (e) {
  console.log(e);
}
