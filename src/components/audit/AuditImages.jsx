import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditImages = () => {
  const { uploadFile } = useContext(DataContext)
  return (
    <div className="audit-images-wrapper">
      <h3 className="audit-images-title">allegati</h3>
      <img
        className="audit-images-image"
        src={uploadFile}
        mutiple
        alt="upload-file"
      />
    </div>
  )
}

export default AuditImages
