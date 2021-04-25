import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditResult = () => {
  const { result } = useContext(DataContext)
  return (
    <div className="audit-result-wrapper">
      <p>Audit result {result}%</p>
      <meter
        min="0"
        low="30"
        high="80"
        optimum="90"
        max="100"
        value={result}
      ></meter>
    </div>
  )
}

export default AuditResult
