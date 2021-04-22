import React, { useContext } from "react"
// REACT ICONS
import { BsPersonCheck, BsPersonDash } from "react-icons/bs"
// CONTEXT
import { DataContext } from "../context"

const Auth = () => {
  const { user, setUser, handleSignIn, handleSignOut } = useContext(DataContext)
  return (
    <div className="auth-wrapper">
      <h3 className="auth-title">authentication</h3>
      <form className="auth-input" onSubmit={handleSignIn}>
        <input
          type="email"
          className="auth-email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          onFocus={() => setUser({ ...user, email: "" })}
          value={user.email}
          required
        />
        <input
          type="password"
          className="auth-password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          onFocus={() => setUser({ ...user, password: "" })}
          value={user.password}
          required
        />
        <button
          className="btn-auth-submit"
          type="submit"
          style={{ color: "green" }}
        >
          <BsPersonCheck size={20} />
        </button>
      </form>
      <div className="auth-buttons">
        <button
          className="btn-auth-out"
          onClick={handleSignOut}
          type="button"
          name="auth-out"
          style={{ color: "brown" }}
        >
          <BsPersonDash size={20} />
        </button>
      </div>
    </div>
  )
}
export default Auth
