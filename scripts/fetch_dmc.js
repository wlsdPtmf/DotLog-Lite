const https = require('https');
https.get('https://raw.githubusercontent.com/nathantspencer/DMC-ColorCodes/master/DMC-Floss-ColorCodes.csv', (resp) => {
    let data = '';
    resp.on('data', (chunk) => { data += chunk; });
    resp.on('end', () => {
        const lines = data.split('\n');
        const existing = ["150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "208", "209", "210", "211", "221", "223", "224", "225", "300", "301", "304", "307", "309", "310", "311", "312", "315", "316", "317", "318", "319", "320", "321", "322", "326", "327", "333", "334", "335", "336", "340", "341", "347", "349", "350", "351", "352", "353", "355", "356", "367", "368", "369", "370", "371", "372", "400", "402", "407", "413", "414", "415", "420", "422", "433", "434", "435", "436", "437", "444", "445", "451", "452", "453"];
        let added = 0;

        console.log("Found Official 40 Colors:");
        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;

            const parts = lines[i].split('\",\"');
            let num = parts[0] ? parts[0].replace(/\"/g, '') : '';
            let name = parts[1] ? parts[1].replace(/\"/g, '') : '';
            let hex = parts[2] ? parts[2].replace(/\"/g, '') : '';

            if (/^\d+$/.test(num) && !existing.includes(num)) {
                console.log(`  { dmcNumber: "${num}", nameEn: "${name}", hex: "#${hex}" },`);
                added++;
                if (added >= 40) break;
            }
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
