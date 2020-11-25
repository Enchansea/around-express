const fs = require('fs').promises;

const getDataFromFile = (pathToFile) => fs.readFile(pathToFile, { encoding: 'utf8' })
  .then((data) => JSON.parse(data))
  .catch((err) => console.log(err));

module.exports = getDataFromFile;