const fs = require("fs");
const ejs = require("ejs");
const { Index } = require("./src/index");


// converting template to html
function renderContent(filepath, html){
  console.log(filepath);
  fs.writeFile(filepath, html, err => {
    if(err) throw err;
    else{
      console.log('compiled successfully...');
      ejsRenderer("./public/index.ejs", (generatedTemplate) => {
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

// minify
function minify(html){
  // Removes Extra spaces
  return html.replace(/\s+/g, " ");
}

var crudeTemplate = Index();
const refinedTemplate = minify(crudeTemplate);

renderContent("./.temp/app.ejs", refinedTemplate);