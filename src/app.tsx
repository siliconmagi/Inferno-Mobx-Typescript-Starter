import Inferno from 'inferno'
import { Provider } from 'inferno-mobx'
import { observable } from 'mobx'
// import AppContainer from './views/AppContainer'
import Root from './views/Root'

const englishStore = observable({
  title: 'Hello World'
})

const frenchStore = observable({
  title: 'Bonjour tout le monde'
})

const app = document.getElementById('root');

if (app) {
  Inferno.render(<Provider englishStore={ englishStore } frenchStore={ frenchStore }><Root /></Provider>, app);
}


