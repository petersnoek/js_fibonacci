// zorg eerst dat je NodeJS hebt geinstalleerd op je laptop. Zie www.nodejs.org > download 
// uitvoeren in een terminal (console, commandline) met node <filename.js>, bijvoorbeeld $ node fibonacci.js

console.log("*** Running script: " + __filename + " using node version: " + process.version + " ***");

const results = [0, 1];

for (let i = 0; i < 18; i++) {
    eerste = results[i];
    tweede = results[i + 1];
    nieuw_getal = eerste + tweede;
    results.push(nieuw_getal);
}
console.log("Results:", results);
