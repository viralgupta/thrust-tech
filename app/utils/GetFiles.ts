const fs = require("fs");

function getFiles(dir: string, files: string[] = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (!fs.statSync(name).isDirectory()) {
      files.push(name);
    }
  }
  return files;
}

export default getFiles;
