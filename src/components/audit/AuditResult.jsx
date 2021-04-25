import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditResult = () => {
  const { result } = useContext(DataContext)
  return (
    <div className="audit-result-wrapper">
      <p>Audit result {result}%</p>
    </div>
  )
}

export default AuditResult
