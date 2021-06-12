import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// REACT ICONS
import { FcDeleteDatabase } from "react-icons/fc"
// CONTEXT
import { DataContext } from "../context"

const Home = () => {
  const { deleteAllDb, suppliersList, getSupplierData } = useContext(
    DataContext
  )

  return (
    <div className="home-wrapper">
      <h3 className="home-title">suppliers database</h3>
      <div className="home-suppliers-wrapper">
        {suppliersList.map((supplier, i) => {
          return (
            <Link to="/audit" key={i}>
              <button
                type="button"
                className="home-supplier"
                onClick={() => getSupplierData(supplier.ditta)}
              >
                {supplier.ditta} "{supplier.tipo}"
              </button>
            </Link>
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
