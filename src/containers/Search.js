import React, { useEffect } from "react"
import { connect } from "react-redux"

import SearchComponent from "../components/searchComponent"
import Card from "./Card"
import Scroll from "../custom/Scroll"

import { setSearchField, requestRobots } from "../actions"


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robotList: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


const Search = (props) => {
  const { searchField, onSearchChange, onRequestRobots, robotList } = props

  useEffect(() => {
    onRequestRobots()
  }, [onRequestRobots])

  const filteredRobots = robotList.filter(robot => (
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  ))

  const display = (!robotList.length) ?
    <h1>Loading</h1> :
    (
      <div>
      <SearchComponent
        searchChange={onSearchChange}
      />
      <Scroll>
        <Card robots={filteredRobots} />
      </Scroll>
    </div>
    )

  return (
    <div>
      {display}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)