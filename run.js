
const chokidar = require("chokidar");
const shell = require('shelljs');
const process = require("process");
const runCommand = "node ./utils/render.js"

console.log(process.argv[2]);

shell.exec("mkdir .temp");
shell.exec(runCommand);

const watcher = chokidar.watch("./src", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
})

watcher.on("change", (path) => {
  console.log(path);
  shell.exec(runCommand);
});



