const { Scroll } = require("./Scroll")

exports.About = () => {
  return `<div class="page about">
  <div class="fizz"></div>
  ${Scroll()}
  </div>`
}