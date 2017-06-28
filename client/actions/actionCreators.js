// increment likes
export function increment (index) {
    return {
        type: 'INCREMENT_LIKES',
        // index: index
        index 
    }
}

// add comment
export function addComment (postId, author, comment) {
    return {
        type: 'ADD_COMMENT', 
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment (postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}

/*
actions: something that happens in your application. ex. someone clicks a photo, someone likes a post, adds/removes a comment
whenever this happens inside your app, it dispatches an action -> has two things: type of action, a payload of information that is needed

action creators: these functions above, when these get fired (dispatched) how to wire them to buttons???

reducers: once i've added the action -> how do I actually update the data and let react handle the changes
 - Reducers handle the updating of our state in our store and are a fundamental concept in Redux.
*/