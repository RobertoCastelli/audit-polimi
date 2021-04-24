import React, { useContext } from "react"
import logo from "../../images/logo.png"
// PDF
import ReactToPrint from "react-to-print"
// REACT ICONS
import { GrDocumentPdf } from "react-icons/gr"
import { FcGallery } from "react-icons/fc"
// COMPONENTS
import AuditCheck from "./AuditCheck"
import AuditPiePagina from "./AuditPiePagina"
import AuditFirme from "./AuditFirme"
import AuditPremesso from "./AuditPremesso"
import AuditVerbalizza from "./AuditVerbalizza"
import AuditReferenti from "./AuditReferenti"
// CONTEXT
import { DataContext } from "../../context"
import AuditIntestazione from "./AuditIntestazione"

const AuditPage = () => {
  const { supplierData, uploadFile, handleUploadFile } = useContext(DataContext)

  const auditRef = React.useRef()

  return (
    <>
      <div ref={auditRef} className="audit-page-wrapper">
        <img className="logo" src={logo} alt="logo" />
        {supplierData.length !== 0 && (
          <div className="audit-page-content">
            <AuditIntestazione />
            <AuditReferenti />
            <AuditPremesso />
            <AuditVerbalizza />
            <br />
            <AuditCheck />
            <img
              className="audit-page-image"
              src={uploadFile}
              alt="upload-file"
            />
            <AuditFirme />
          </div>
        )}
        <AuditPiePagina />
      </div>

      <div className="audit-page-buttons">
        <div className="audit-page-pdf">
          <ReactToPrint
            trigger={() => (
              <button className="btn-audit-page-pdf">
                <GrDocumentPdf size={20} />
              </button>
            )}
            content={() => auditRef.current}
          />
        </div>
        <div className="audit-page-upload">
          <label htmlFor="upload">
            <input
              type="file"
              id="upload"
              accept="image/*"
              multiple
              onChange={handleUploadFile}
            />
            <FcGallery size={28} />
          </label>
        </div>
      </div>
    </>
  )
}

export default AuditPage
