import React from "react"

import { useDispatch } from "react-redux"
import { setSearchField } from "../actions/actions"

import SearchComponent from "../components/searchComponent"


const Search = () => {
  const dispatch = useDispatch()

  const onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value))
  }

  return (
    <div>
      <SearchComponent
        searchChange={onSearchChange}
      />
    </div>
  )
}

export default Search