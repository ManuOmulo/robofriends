import React from "react"

import "./App.css"
import Search from "./containers/Search"
import ErrorBoundary from "./custom/ErrorBondary";

const App = () => {
  return(
    <div>
      <div className="head-container">
        <h1>RoboFriends</h1>
      </div>
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
    </div>
  )
}

export default App