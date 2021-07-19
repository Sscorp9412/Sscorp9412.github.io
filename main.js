const fs = require("fs");
const ejs = require("ejs");
const { Index } = require("./src/index");

function renderContent(filepath){
  console.log(filepath);
  fs.writeFile(filepath, refinedTemplate, err => {
    if(err) throw err;
    else{
      console.log('compiled successfully...');
      ejsRenderer("./public/index.ejs", (generatedTemplate) => {
        fs.writeFileSync("./static/index.html", generatedTemplate);
      });
    }
  });
}

async function ejsRenderer(filepath, callback) {
  const generatedTemplate = await ejs.renderFile(filepath);
  callback(generatedTemplate);
}

var crudeTemplate = Index();
var refinedTemplate = crudeTemplate.replace(/\s+/g, " ");

renderContent("./.temp/app.ejs");