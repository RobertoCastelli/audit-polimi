import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditCheck = () => {
  const { auditCheckList, calculateChecked } = useContext(DataContext)

  return (
    <div className="audit-check-wrapper">
      <h3 className="audit-check-title">
        impianto elettrico e di illuminazione
      </h3>
      <table className="audit-check-content">
        <thead>
          <tr>
            <th>ID</th>
            <th>intervento</th>
            <th>periodicità</th>
            <th>eseguito</th>
          </tr>
        </thead>
        <tbody>
          {auditCheckList.map((elem) => {
            return (
              <tr className="audit-check-list" key={elem.id}>
                <td className="audit-check-id">{elem.id}</td>
                <td className="audit-check-intervento">{elem.intervento}</td>
                <td className="audit-check-periodicita">{elem.periodicita}</td>
                <td className="audit-check-eseguito">
                  <input type="checkbox" onChange={() => calculateChecked()} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AuditCheck
