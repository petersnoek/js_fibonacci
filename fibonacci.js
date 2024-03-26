function RunFibonacci() {
    const results = [0, 1];
    for (let i = 0; i < 18; i++) {
        eerste = results[i];
        tweede = results[i + 1];
        nieuw_getal = eerste + tweede;
        results.push(nieuw_getal);
    }

    if (typeof window === 'undefined') {
        // running standalone (node)
        console.log("*** Running script: " + __filename + " using node version: " + process.version + " ***");
        console.log("Results: ", results);
    } else {
        // running in browser
        console.log("*** Running fibonacci script in browser ***")
        console.log(navigator.userAgent)
        console.log(__jscript_version)
        document.getElementById('result').innerHTML = results.join("\n");
    }
}

if (typeof window === 'undefined') RunFibonacci();