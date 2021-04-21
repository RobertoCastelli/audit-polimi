import React, { useContext } from "react"
import { Link } from "react-router-dom"
// REACT ICONS
import { AiOutlineHome } from "react-icons/ai"
import { BsPersonCheck } from "react-icons/bs"
// CONTEXT
import { DataContext } from "../context"

const Auth = () => {
  const { user, setUser, handleSignIn } = useContext(DataContext)
  return (
    <div className="auth-wrapper">
      <h3>authentication</h3>
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
        <button className="btn-auth-submit" type="submit">
          <BsPersonCheck size={20} />
        </button>
      </form>
      <div className="auth-in-buttons-home">
        <Link to="/">
          <button className="btn-auth-out-home" type="button" name="auth-out">
            <AiOutlineHome size={20} />
          </button>
          <button className="btn-auth-home" type="button" name="home">
            <AiOutlineHome size={20} />
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Auth
