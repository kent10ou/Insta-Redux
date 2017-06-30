import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'; // hookup react-router with redux
import { browserHistory } from 'react-router'; 

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for default data
const defaultState = {
    posts,
    comments
    // es6 -> same as `posts: posts`
}

// allows redux to know about our store
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// create store -> createStore takes two args: rootReducer and default state
const store = createStore(rootReducer, defaultState, enhancers);

// create history - browserHistory: go from page -> page, keeps track of where you've gone, take browser history to weave in store
export const history = syncHistoryWithStore(browserHistory, store);

// this is how we hot reload reducers
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;

/* REDUX
There is one store! - no many multiple states!
giant store -> holds one of our states
we update state with actions! 

actions (fired) gets dispatched! -> gets handled by reducers!
reducers are responsible for updating your state!
do not put asynchonous stuff in reducers! - reducers should be pure funcs that return immediately
    - use Redux Thunk or Saga for async calls to api, when data comes back -> export actions


*/