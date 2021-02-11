import React from "react"

const CardList  = (props) => {

  const { id, name, email } = props.robot

  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <article>
        <h2>{name}</h2>
        <p>{email}</p>
      </article>
    </div>
  )

}

export default CardList