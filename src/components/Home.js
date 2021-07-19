
const Home = ({name, salutation, tagline}) => {
  return `
  <div class="page">
    <div class="header">
      <div class="hamburger">
        <div class="content">
          <span class="hamburger__icon"></span>
        </div>
      </div>
    </div>

    <div id="page1" class="page1">
      <div class="page1__intro">
        <h1 class="salutation">${salutation},</h1>
        <h3 class="address">I'm ${name}</h3>
        <h3 class="quotation">${tagline}</h3>
      </div>
    </div>
  </div>
  `
}

exports.Home = Home;