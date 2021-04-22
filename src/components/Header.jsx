import React, { useContext } from "react"
import { DataContext } from "../context"

const Header = () => {
  const { displayName } = useContext(DataContext)
  return (
    <div className="header-wrapper">
      <h1>audit polimi</h1>
      <small>react audit generator</small>
      <div className="header-display-name">{displayName}</div>
      <hr />
    </div>
  )
}

export default Header
