import React, { useContext } from "react"
// REACT ICONS
import { BsPersonCheck } from "react-icons/bs"
// CONTEXT
import { DataContext } from "../../context"

const SignIn = () => {
  const { handleSignIn, clearFields, handleChange } = useContext(DataContext)
  return (
    <div className="sign-in-wrapper">
      <h3 className="sign-in-title">sign in</h3>
      <form className="sign-in-input" onSubmit={handleSignIn}>
        <input
          type="email"
          name="email"
          className="sign-in-email"
          placeholder="email"
          onChange={handleChange}
          onFocus={clearFields}
          required
        />
        <input
          type="password"
          name="password"
          className="sign-in-password"
          placeholder="password"
          onChange={handleChange}
          onFocus={clearFields}
          required
        />
        <button
          className="btn-sign-in-submit"
          type="submit"
          style={{ color: "green" }}
        >
          <BsPersonCheck size={20} />
        </button>
      </form>
    </div>
  )
}
export default SignIn
