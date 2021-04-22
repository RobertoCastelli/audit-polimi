import React, { useContext } from "react"
// REACT ICONS
import { BsPersonDash } from "react-icons/bs"

import { DataContext } from "../../context"

const SignOut = () => {
  const { handleSignOut } = useContext(DataContext)
  return (
    <>
      <div className="sign-out-wrapper">
        <h3 className="sign-out-title">sign out</h3>

        <button
          className="btn-sign-out"
          type="button"
          onClick={handleSignOut}
          style={{ color: "brown" }}
        >
          <BsPersonDash size={20} />
        </button>
      </div>
    </>
  )
}

export default SignOut
