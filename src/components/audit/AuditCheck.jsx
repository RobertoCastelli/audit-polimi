import React, { useContext } from "react"
import { DataContext } from "../../context"

const AuditCheck = () => {
  const { auditList } = useContext(DataContext)
  return (
    <div>
      <h3>impianto elettrico e di illuminazione</h3>
      {console.log(auditList)}
    </div>
  )
}

export default AuditCheck
