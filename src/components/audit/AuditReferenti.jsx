import React, { useContext } from "react"
import { DataContext } from "../../context"

const AuditReferenti = () => {
  const { supplierData, displayName } = useContext(DataContext)

  return (
    <div>
      <ul className="audit-page-referenti">
        {supplierData.referenti.map((ref, i) => {
          return (
            ref.nome !== "" && (
              <li key={i}>
                {ref.nome} {ref.cognome} - ditta {supplierData.ditta}
              </li>
            )
          )
        })}
        <li>{displayName} - tecnico AGIS</li>
      </ul>
    </div>
  )
}

export default AuditReferenti
