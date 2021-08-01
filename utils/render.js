const fs = require("fs");
const ejs = require("ejs");

const { Index } = require("../src/index");

// converting template to html
function renderContent(filepath, html) {
  createFolder("./.temp");
  fs.writeFile(filepath, html, (err) => {
    if (err) throw err;
    else {
      console.log("compiled successfully...");
      ejsRenderer("./src/public/index.ejs", (generatedTemplate) => {
        createFolder("./dist");
        createFolder("./dist/css")
        fs.writeFileSync("./dist/index.html", generatedTemplate);
      });
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
  // Removes Extra spaces
  return html.replace(/\s+/g, " ");
}

var crudeTemplate = Index();
const refinedTemplate = minify(crudeTemplate);

renderContent("./.temp/app.ejs", refinedTemplate);
