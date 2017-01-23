// This is the entry point for our client-side logic
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { observable } from 'mobx';
import { Router } from 'inferno-router';
import createHistory from 'history/createHashHistory';
import views from './views';
import EnglishStore from './stores/EnglishStore';
import './index.scss';

// We render our react app into this element
const app = document.getElementById('root');
const history = createHistory();
const stores = { EnglishStore };

Inferno.render(
    <Provider {...stores }>
    <Router history={ history }>
    { views }
    </Router>
    </Provider>, app)
