import React, { useState, useEffect } from "react"

import SearchComponent from "../components/searchComponent"
import Card from "./Card"

import Scroll from "../custom/Scroll"

const Search = () => {

  const [robotList, setRobotList] = useState([])
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(robots => setRobotList(robots))
  })

  const searchChange = (e) => {
    e.preventDefault()
    setSearchField(e.target.value)
  }

  const filteredRobots = robotList.filter(robot => (
    robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  ))

  const display = (!robotList.length) ?
    <h1>Loading</h1> :
    (
      <div>
      <SearchComponent
        searchChange={searchChange}
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

export default Search