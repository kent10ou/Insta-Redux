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

// create store -> createStore takes two args: rootReducer and default state
const store = createStore(rootReducer, defaultState);

// create history - browserHistory: go from page -> page, keeps track of where you've gone, take browser history to weave in store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;