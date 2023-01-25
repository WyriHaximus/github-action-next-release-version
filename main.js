const fs = require('fs');
const currentVersion = process.env.INPUT_VERSION.match(/\d+/g).map(Number).pop();
const nextVersion = currentVersion + 1;

fs.appendFileSync(process.env.GITHUB_OUTPUT, `version=${nextVersion}\n`);
fs.appendFileSync(process.env.GITHUB_OUTPUT, `r_version=r${nextVersion}\n`);

process.exit(0);
