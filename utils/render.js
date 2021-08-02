const fs = require("fs");
const ejs = require("ejs");
const shell = require('shelljs');
const { Index } = require("../src/index");

// converting template to html
function renderContent(filepath, html) {
  fs.writeFile(filepath, html, (err) => {
    if (err) throw err;
    else {
      console.log("compiled successfully...");
      createFolder("./dist");
      createFolder("./dist/css");
      shell.exec("cp -r ./src/assets/images ./dist")
      fs.writeFileSync("./dist/index.html", html);
    }
  });
}

// Ejs file rendering
async function ejsRenderer(filepath, callback) {
  const generatedTemplate = await ejs.renderFile(filepath);
  callback(generatedTemplate);
}

// Create folder
const createFolder = (path) => {
  try {
    fs.mkdirSync(path);
  } catch (err) {
    console.log("folder exists");
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

renderContent("./.temp/app.ejs", refinedTemplate);
