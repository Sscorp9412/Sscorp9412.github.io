const { Home } = require('./components/Home');
const { Body } = require('./components/Body');
const personal = require('./assets/data/personal.json');

const App = () => {
  return `${Body(Home(personal))}`
};

exports.App = App;
