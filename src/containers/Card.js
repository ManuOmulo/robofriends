import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { requestRobots } from "../actions/actions"

import "./card.css"
import CardComponent from "../components/cardComponent"

const Card = () => {

  const robotList = useSelector(state => state.requestRobotsReducer.robots)
  const searchField = useSelector(state => state.searchRobotsReducer.searchField)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestRobots())
  }, [dispatch])

  const filteredRobots = robotList.filter(robot => (
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  ))

  const card = filteredRobots.map(robot => {
    return(
      <CardComponent key={robot.id} robot={robot}/>
    )
  })

  const display = (!robotList.length) ?
    <h1>Loading</h1> :
    (
      <div className="card-container">
        {card}
      </div>
    )

  return(
    <div>
      {display}
    </div>
  )
}

export default Card