import React, { useContext } from "react"
// REACT ICONS
import { BsPersonPlus } from "react-icons/bs"
// CONTEXT
import { DataContext } from "../../context"

const SignUp = () => {
  const { handleSignUp, clearFields, handleChange } = useContext(DataContext)

  return (
    <>
      <div className="sign-up-wrapper">
        <h3 className="sign-up-title">sign up</h3>
        <form className="sign-up-input" onSubmit={handleSignUp}>
          <input
            type="text"
            name="nickname"
            className="sign-up-nickname"
            placeholder="nickname"
            onChange={handleChange}
            onFocus={clearFields}
          />
          <input
            type="email"
            name="email"
            className="sign-up-email"
            placeholder="email"
            onFocus={clearFields}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="sign-up-password"
            placeholder="password"
            onFocus={clearFields}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn-sign-up-submit"
            style={{ color: "blue" }}
          >
            <BsPersonPlus size={20} />
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
