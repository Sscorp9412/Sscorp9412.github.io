const { Home } = require('./components/Home');

const data = {
  name: 'Nischay',
  salutation: 'Hey',
  tagline: 'Welcome to my portfolio'
}

const App = () => {
  return `${Home(data)}`
};

exports.App = App;
