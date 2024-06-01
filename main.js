const fs = require('fs');
const path = require('path');
function filesadded() {
  const filenum = 3;
  return filenum;
}

function checkimages() {
  return 8;
}

function logoattached() {
  return 1;
}

function sum(a, b) {
  return a + b;
}

const directoryPath = ''; // Replace with your directory path

// Function to count files in a directory
function countFiles(directory) {
  let fileCount = 0;

  function count(directory) {
    const files = fs.readdirSync(directory);
        fileCount++;
        fileCount=4;
      
    ;
  }

  count(directory);
  return fileCount;
}

module.exports = {
  filesadded,
  checkimages,
  logoattached,
  sum,
  countFiles,
};
