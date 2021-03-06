//from: http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/

// renamed optimistic action creator - this won't be called directly
// by the React components anymore, but from our async thunk function
export function addTodoOptimistic(text) {
  return { type: ADD_TODO, text };
}

// the async action creator uses the name of the old action creator, so
// it will get called by the existing code when a new todo item should
//  be added
export function addTodo(text) {
  // we return a thunk function, not an action object!
  // the thunk function needs to dispatch some actions to change
  // the Store status, so it receives the "dispatch" function as its
  // >first parameter

  return function(dispatch) {
    // here starts the code that actually gets executed when the
    //  addTodo action creator is dispatched

    // first of all, let's do the optimistic UI update - we need to
    // dispatch the old synchronous action object, using the renamed
    // action creator
    dispatch(addTodoOptimistic(text));

    // now that the Store has been notified of the new todo item, we
    // should also notify our server - we'll use here ES6 fetch
    // function to post the data
    fetch('/add_todo', {
      method: 'post',
      body: JSON.stringify({
        text
      })
    }).then(response => {
      // you should probably get a real id for your new todo item here,
      // and update your store, but we'll leave that to you
    }).catch(err => {
    // Error: handle it the way you like, undoing the optimistic update,
    //  showing a "out of sync" message, etc.
    });
  // what you return here gets returned by the dispatch function that
  // used this action creator
  return null;
  }
}

// If needed, the thunk can also access the current store state, as it receives getState as its second argument: return function(dispatch, getState) { ...
