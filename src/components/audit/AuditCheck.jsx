import React, { useContext } from "react"
import { DataContext } from "../../context"

const AuditCheck = () => {
  const { auditList } = useContext(DataContext)

  return (
    <div className="audit-check-wrapper">
      <h3 className="audit-check-title">
        impianto elettrico e di illuminazione
      </h3>
      <table className="audit-check-content">
        <thead>
          <tr>
            <th>intervento</th>
            <th>periodicità</th>
            <th>eseguito</th>
          </tr>
        </thead>
        <tbody>
          {auditList.map((elem, i) => {
            return (
              <tr className="audit-check-list" key={i}>
                <td className="audit-check-intervento">{elem.intervento}</td>
                <td className="audit-check-periodicita">{elem.periodicita}</td>
                <td className="audit-check-eseguito">
                  <input type="checkbox" defaultChecked name={i} />
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
