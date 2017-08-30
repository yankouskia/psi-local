const ngrok = require('ngrok');
const psi = require('psi');

const runNgrok = (port) => new Promise((resolve, reject) => {
  ngrok.connect(port, (err, url) => {
    if (err) return reject(err);
    return resolve(url);
  });
});

const stopNgrokAndStoreStats = (stats) => {
  ngrok.kill();
  return stats;
}

const handleError = err => ({ err });

function run(port) {
  return Promise.resolve(port)
    .then(runNgrok)
    .then(psi)
    .then(stopNgrokAndStoreStats)
    .catch(handleError);
}

module.exports = run;
