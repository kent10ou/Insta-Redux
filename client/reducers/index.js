import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

/*
Reducers are updating the state which then passes to the store! This index.js file is combining the posts/comments reducers
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
*/
const rootReducer = combineReducers({ 
                                      posts,
                                      comments,
                                      routing: routerReducer
                                    });

export default rootReducer;

