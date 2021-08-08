const { Header } = require('./components/header');
const { Home } = require('./components/Home');
const { About } = require('./components/About');
const { Body } = require('./components/Body');
const personal = require('./assets/data/personal.json');
const { Projects } = require('./components/Projects');

const App = () => {
  return `
  ${Body(
    Header()+
    Home(personal)+
    About()+
    Projects()
    )}`
};

exports.App = App;
