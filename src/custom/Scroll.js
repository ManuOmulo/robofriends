import React from "react"

import "./scroll.css"

const Scroll = (props) => {
  return (
    <article className="scrollable">
      {props.children}
    </article>
  )
}

export default Scroll