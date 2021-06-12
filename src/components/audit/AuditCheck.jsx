import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditCheck = () => {
  const { auditList, calculateChecked } = useContext(DataContext)

  return (
    <div className="audit-check-wrapper">
      <h3 className="audit-check-title">
        impianto elettrico e di illuminazione
      </h3>
      <table className="audit-check-content">
        <thead>
          <tr>
            <th rowSpan="2">ID</th>
            <th rowSpan="2">intervento</th>
            <th rowSpan="2">periodicità</th>
            <th colSpan="3">eseguito</th>
          </tr>
          <tr>
            <th>SI</th>
            <th>NO</th>
            <th>N/A</th>
          </tr>
        </thead>
        <tbody>
          {auditList.map((elem) => {
            return (
              <tr className="audit-check-list" key={elem.id}>
                <td className="audit-check-id">{elem.id}</td>
                <td className="audit-check-intervento">{elem.intervento}</td>
                <td className="audit-check-periodicita">{elem.periodicita}</td>
                <td className="audit-check-eseguito" id={elem.id}>
                  <input
                    type="radio"
                    name={elem.id}
                    onClick={calculateChecked}
                    value="1"
                  />
                </td>
                <td className="audit-check-eseguito" id={elem.id}>
                  <input
                    type="radio"
                    name={elem.id}
                    onClick={calculateChecked}
                    value="-1"
                  />
                </td>
                <td className="audit-check-eseguito" id={elem.id}>
                  <input
                    type="radio"
                    name={elem.id}
                    onClick={calculateChecked}
                    value="0"
                  />
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
