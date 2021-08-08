const { Scroll } = require("./Scroll")

exports.Projects = () => {
  return `<div class="projects">
  <div class="fizz"></div>
  ${Scroll()};
  </div>`
}