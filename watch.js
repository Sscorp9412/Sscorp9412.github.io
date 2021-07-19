
const chokidar = require("chokidar");
const shell = require('shelljs');


shell.exec('node ./main.js');

const watcher = chokidar.watch("./src", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
})

watcher.on("change", (path) => {
  console.log(path);
  shell.exec('node ./main.js');
});



