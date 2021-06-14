import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditImages = () => {
  const { uploadFile } = useContext(DataContext)
  return (
    <div className="audit-images-wrapper">
      <h3 className="audit-images-title">allegati</h3>
      {uploadFile.map((image, i) => {
        return (
          <div>
            ID #{i + 1}
            <img
              className="audit-images-image"
              src={image}
              key={image}
              alt="uploaded-file"
            />
          </div>
        )
      })}
    </div>
  )
}

export default AuditImages
