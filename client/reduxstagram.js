// let's go!
import React from 'react';
import { render } from 'react-dom';

// import CSS
import CSS from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; // bindings that allows us to use redux with react

// import store
import store, { history } from './store';

const router = (
    <Provider store={store}>    
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));