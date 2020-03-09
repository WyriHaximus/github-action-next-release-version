const currentVersion = process.env.INPUT_VERSION.match(/\d+/g).map(Number).pop();
const nextVersion = currentVersion + 1;

console.log(`::set-output name=version::${nextVersion}`);
console.log(`::set-output name=r_version::r${nextVersion}`);

process.exit(0);
