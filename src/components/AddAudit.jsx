import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// REACT ICONS
import { FcAdvance, FcInspection } from "react-icons/fc"
// CONTEXT
import { DataContext } from "../context"

const AddAudit = () => {
  const {
    giorno,
    setGiorno,
    orario,
    setOrario,
    edifici,
    setSelectedEdifici,
    getMonthText,
    supplierData,
    handleSubmitAuditForm,
  } = useContext(DataContext)

  return (
    <div className="audit-form-wrapper">
      <h3 className="supplier-form-title">supplier preview</h3>
      <form onSubmit={handleSubmitAuditForm}>
        <fieldset className="supplier-form-preview">
          <legend className="supplier-form-ditta">
            {supplierData.ditta || "no data"}
          </legend>
          <ul>
            <li className="supplier-form-ditta">AQ {supplierData.oggetto}</li>
            <li className="supplier-form-ditta">Lotto {supplierData.lotto}</li>
            <li className="supplier-form-ditta">CIG {supplierData.cig}</li>
            {supplierData.length !== 0 &&
              supplierData.referenti.map((ref, i) => (
                <li key={i}>
                  Ref. {ref.nome || "n.n."} {ref.cognome}
                </li>
              ))}
          </ul>
        </fieldset>
        <h3 className="audit-form-title">generate audit</h3>
        <div className="audit-form-date">
          <input
            type="date"
            value={giorno}
            onChange={(e) => setGiorno(e.target.value)}
          />
        </div>
        <div className="audit-form-time">
          <input
            type="time"
            value={orario}
            onChange={(e) => setOrario(e.target.value)}
          />
        </div>
        <div className="audit-form-edificio">
          <select onChange={(e) => setSelectedEdifici(e.target.value)}>
            {edifici.map((edificio) => {
              return (
                <option key={edificio.label} value={edificio.value}>
                  {edificio.label}
                </option>
              )
            })}
          </select>
        </div>
        <div className="audit-form-buttons">
          <Link to="/audit-page">
            {supplierData.length !== 0 && (
              <button
                type="submit"
                onClick={() => getMonthText(giorno.substring(5, 7))}
              >
                <FcAdvance size={20} />
                <FcInspection size={20} />
              </button>
            )}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddAudit
