import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../../context"

const AuditPremesso = () => {
  const { supplierData, selectedEdifici } = useContext(DataContext)

  return (
    <div>
      <div className="audit-page-bold-italic">premesso</div>
      <div className="audit-page-section">
        - visto che il contratto repertorio n°20/2018 del 28 novembre 2018 con
        il quale è stata affidato alla società {supplierData.ditta} per la
        fornitura di {supplierData.oggetto} - lotto {supplierData.lotto} CIG{" "}
        {supplierData.cig};
      </div>
      <div className="audit-page-section">
        - visto l'art. 5.3.6 "Verifiche di conformità in corso di esecuzione" e
        l'art. 8 "Controlli" del Capitolato recnico del Bando istitutivo di
        Consip;
      </div>
      <div className="audit-page-section">
        - visto il Programma Operativo dei Servizi per il periodo 2021 che
        prevedeva le attività di manutenzione ordinaria impianti elettrici
        presso il fabbricato {selectedEdifici}
      </div>
    </div>
  )
}

export default AuditPremesso
