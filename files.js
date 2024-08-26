const fs = require("fs");

function writeFile(fileName, contents) {
  try {
    fs.writeFileSync(fileName, contents);
    console.log("file write successfully.");
  } catch (error) {
    console.log("Error: ", error);
  }
}

function deleteFile(fileName) {
  try {
    fs.unlinkSync(fileName);
    console.log("file deleted successfully.");
  } catch (error) {
    console.log("Error: ", error);
  }
}

writeFile("file.txt", "This is the file text. You can write whatever");
deleteFile("file.txt");
