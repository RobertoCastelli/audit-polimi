import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// REACT ICONS
import { FcAdvance, FcDocument } from "react-icons/fc"
// CONTEXT
import { DataContext } from "../../context"

const AddAudit = () => {
  const {
    giorno,
    setGiorno,
    orario,
    setOrario,
    month,
    getTextMonth,
    edifici,
    setSelectedEdifici,
    supplierData,
    handleSubmitAuditForm,
  } = useContext(DataContext)

  return (
    <div className="audit-form-wrapper">
      <h3 className="supplier-form-title">supplier preview</h3>
      <form onSubmit={handleSubmitAuditForm}>
        <div className="supplier-form-ditta">{supplierData.ditta}</div>
        <div className="supplier-form-ditta">{supplierData.oggetto}</div>
        <div className="supplier-form-ditta">{supplierData.lotto}</div>
        <div className="supplier-form-ditta">{supplierData.cig}</div>
        {supplierData.length !== 0 &&
          supplierData.referenti.map((ref, i) => (
            <div key={i}>
              {ref.nome} {ref.cognome}
            </div>
          ))}
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
          <Link type="submit" to="/audit-page">
            <button onClick={() => getTextMonth(parseInt(month))}>
              <FcAdvance size={20} />
              <FcDocument size={20} />
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddAudit
