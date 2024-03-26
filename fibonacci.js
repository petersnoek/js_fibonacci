// zorg eerst dat je NodeJS hebt geinstalleerd op je laptop. Zie www.nodejs.org > download 
// uitvoeren in een terminal (console, commandline) met node <filename.js>, bijvoorbeeld $ node 1fibonacci.js

console.log("*** Running script: 1fibonacci.js ***");
console.log("");

const results = [0, 1];
console.log("Start: ", results);

for (let i = 0; i < 18; i++) {

    console.log("Ronde: " + i);

    eerste = results[i];
    tweede = results[i + 1];
    nieuw_getal = eerste + tweede;
    results.push(nieuw_getal);

    console.log("  Results:", results);
    console.log("------");
}
