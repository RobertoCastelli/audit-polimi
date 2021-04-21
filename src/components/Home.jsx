import React, { useContext } from "react"
// REACT ICONS
import { FcDeleteDatabase } from "react-icons/fc"
// CONTEXT
import { DataContext } from "../context"

const Home = () => {
  const { deleteAllDb, suppliersOptionList } = useContext(DataContext)

  return (
    <div className="home-wrapper">
      <h3 className="home-title">welcome!</h3>
      <div className="home-suppliers-wrapper">
        {suppliersOptionList.map((supplier, i) => {
          return (
            <button key={i} className="home-supplier">
              {supplier}
            </button>
          )
        })}
      </div>
      <button onClick={() => deleteAllDb()}>
        <FcDeleteDatabase size={20} />
        <div>
          <small>delete all database entries</small>
        </div>
      </button>
    </div>
  )
}

export default Home
