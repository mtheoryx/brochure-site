const fs = require('fs'); //read/write/existence checks of files
const sizeOf = require('image-size'); //for getting image dimensions

const axios = require('axios'); //for getting the files

// Some common vars
const imgProvider = 'https://via.placeholder.com';

// Get a list of file names from the sensitive directory
const fileNames = fs.readdirSync(
  `${__dirname}/images/client`,
  (_, items) => items
);

// What does a URL look like? Like this:
// https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com

// @TODO: This loops twice, fix this!
const filesMeta = fileNames
  .map(filename => {
    return {
      filename,
      filetype: filename.substr(filename.lastIndexOf('.') + 1),
      height: sizeOf(`${__dirname}/images/client/${filename}`).height,
      width: sizeOf(`${__dirname}/images/client/${filename}`).width
    };
  })
  .map(fileMeta => {
    return Object.assign({}, fileMeta, {
      placeholder: `${imgProvider}/${fileMeta.width}x${fileMeta.height}.${
        fileMeta.filetype
      }?text=${fileMeta.filename}`
    });
  });

// filesMeta.length; /*?*/

// File comparison, do we have the things? Sync check and buildup of tasks
// @TODO: Concat this on the end of that map above, or combine it
const filesNeeded = filesMeta.filter(fileMeta => {
  // The file
  const theFileName = fileMeta.filename;
  // The check path
  const streamFilePath = `${__dirname}/images/stream/${theFileName}`;
  // Return true if missing
  return !fs.existsSync(streamFilePath);
});

// We have a list of files we need to downlaod, do the thing

// First, we're going loop over each file needed and create a promise array
// const testFiles = [filesNeeded.pop()];
// testFiles; /*?*/
const fileRequests = filesNeeded.map(fileNeeded => {
  return axios({
    method: 'get',
    url: `${fileNeeded.placeholder}`,
    responseType: 'stream'
  })
    .then(function(response) {
      return response.data;
    })
    .then(data => {
      return data.pipe(
        fs.createWriteStream(
          `${__dirname}/images/stream/${fileNeeded.filename}`
        )
      );
    })
    .then(_ => 'Wrote a file!');
});
// Then, then we need to Promise.all(THE-ARRAY) and save the resolved result to a file
// And then maybe report what we saved?
Promise.all(fileRequests);
// filesNeeded.length; /*?*/

// filesNeeded;
