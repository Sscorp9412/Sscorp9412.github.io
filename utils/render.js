const fs = require("fs");
const ejs = require("ejs");
const shell = require('shelljs');
const { Index } = require("../src/index");

// converting template to html
function renderContent(html) {
  // console.log("compiled successfully...");
  createFolder("./dist");
  createFolder("./dist/css");
  shell.exec("cp -r ./src/assets/images ./dist")
  fs.writeFileSync("./dist/index.html", html);
}

// Create folder
const createFolder = (path) => {
  try {
    fs.mkdirSync(path);
    console.log('Folder', path, 'created');
  } catch (err) {
    // console.log("folder exists");
  }
};

// minify
function minify(html) {
  /*
    -------------------
    Removes Extra spaces
    -------------------*/
  const removedSpace = html.replace(/\s+/g, " ");

  /*
    ------------
    Add Elements
    ------------*/

  const minified = html.replace(/> <+/g, "><");
  return minified;
}

var crudeTemplate = Index();
const refinedTemplate = minify(crudeTemplate);

renderContent(refinedTemplate);
