import { combineReducers } from "redux"

import { searchRobotsReducer } from "./searchRobotsReducer"
import { requestRobotsReducer } from "./requestRobotsReducers"

const rootReducer = combineReducers({
  searchRobotsReducer,
  requestRobotsReducer
})

export default rootReducer