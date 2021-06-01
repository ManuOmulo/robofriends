import React from "react"

import "./App.css"
import Search from "./containers/Search"
import Card from "./containers/Card"
import ErrorBoundary from "./custom/ErrorBondary";
import Scroll from "./custom/Scroll"
import Header from "./components/Header";

const App = () => {
  return(
    <div>
      <Header />
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