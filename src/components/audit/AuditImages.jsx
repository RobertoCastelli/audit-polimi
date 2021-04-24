import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditImages = () => {
  const { uploadFile } = useContext(DataContext)
  return (
    <div>
      <img className="audit-page-image" src={uploadFile} alt="upload-file" />
    </div>
  )
}

export default AuditImages
