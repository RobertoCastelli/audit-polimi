import React from "react"

const AuditNote = () => {
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" placeholder="note"></textarea>
      <div>
        <div htmlFor="difformita">le difformità verranno evase entro il:</div>
        <input type="date" />
      </div>
      <div>il presente verbale viene chiuso alle ore:</div>
      <input type="time" name="" id="" />
    </div>
  )
}

export default AuditNote
