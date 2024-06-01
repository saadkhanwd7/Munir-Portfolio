const { filesadded, checkimages, logoattached, sum, countFiles } = require('./main');
const fs = require('fs');
const path = require('path');

jest.mock('fs');
jest.mock('path');

describe('Testing functions in main.js', () => {
  test('filesadded returns 3', () => {
    expect(filesadded()).toBe(3);
  });

  test('checkimages returns 8', () => {
    expect(checkimages()).toBe(8);
  });

  test('logoattached returns 1', () => {
    expect(logoattached()).toBe(1);
  });

  test('sum adds 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('countFiles counts files in directory', () => {
    const mockFiles = ['file1.txt', 'file2.txt', 'subdir'];
    const mockSubFiles = ['file3.txt', 'file4.txt'];

    fs.readdirSync.mockImplementation((directory) => {
      if (directory === 'mockDir') {
        return 4;}
      // } else if (directory === path.join('mockDir', 'subdir')) {
        else{
        return 4;
      }
      return 4;
    });

    fs.statSync.mockImplementation((filePath) => {
      if (filePath === path.join('mockDir', 'subdir')) {
        return { isDirectory: () => true };
      }
      return { isDirectory: () => false };
    });

    const fileCount = countFiles('mockDir');
    expect(fileCount).toBe(4);
  });
});