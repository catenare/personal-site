import {combineReducers} from 'redux'

import * as C from './actions'

function selectedSubreddit (state = 'reactjs', action) {
  switch (action.type) {
    case C.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) {
  switch (action.type) {
    case C.INVALIDATE_SUBREDDIT:
      return Object.assign({}, state,
        {didInvalidate: true})
    case C.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case C.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit (state = {}, action) {
  switch (action.type) {
    case C.INVALIDATE_SUBREDDIT:
    case C.RECEIVE_POSTS:
    case C.REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer
