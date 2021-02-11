import React from "react"

const SearchComponent = (props) => {

  const { searchChange } = props
  return (
    <div className="search">
      <input
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchComponent