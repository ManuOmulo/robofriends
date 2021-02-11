import React from "react"

import "./card.css"
import CardComponent from "../components/cardComponent"

const Card = (props) => {

  const { robots } = props

  const card = robots.map(robot => {
    return(
      <CardComponent key={robot.id} robot={robot}/>
    )
  })

  return(
    <div className="card-container">
      {card}
    </div>
  )
}

export default Card