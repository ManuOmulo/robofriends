import React from "react"

import "./App.css"
import Search from "./containers/Search"
import Card from "./containers/Card"
import ErrorBoundary from "./custom/ErrorBondary";
import Scroll from "./custom/Scroll"

const App = () => {
  return(
    <div>
      <div className="head-container">
        <h1>RoboFriends</h1>
      </div>
      <ErrorBoundary>
        <Search />
        <Scroll>
          <Card />
        </Scroll>
      </ErrorBoundary>
    </div>
  )
}

export default App