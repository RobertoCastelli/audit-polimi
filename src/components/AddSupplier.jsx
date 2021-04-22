import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../context"
// REACT ICONS
import { FcMultipleInputs } from "react-icons/fc"

const AddSupplier = () => {
  const {
    ditta,
    setDitta,
    lotto,
    setLotto,
    cig,
    setCig,
    oggetto,
    setOggetto,
    supplierNome,
    setSupplierNome,
    supplierCognome,
    setSupplierCognome,
    supplierNomeAlt,
    setSupplierNomeAlt,
    supplierCognomeAlt,
    setSupplierCognomeAlt,
    handleSubmitSupplier,
  } = useContext(DataContext)

  return (
    <div className="supplier-form-wrapper">
      <h3 className="supplier-form-title">add new supplier</h3>
      <form id="supplier-form" onSubmit={handleSubmitSupplier}>
        <div className="supplier-form-ditta">
          <input
            placeholder="ditta"
            type="text"
            value={ditta}
            onChange={(e) => setDitta(e.target.value)}
            onFocus={(e) => (e.target.value = "")}
          />
        </div>
        <div className="supplier-form-lotto">
          <input
            placeholder="lotto"
            type="number"
            value={lotto}
            onChange={(e) => setLotto(e.target.value)}
            onFocus={(e) => (e.target.value = "")}
          />
        </div>
        <div className="supplier-form-cig">
          <input
            placeholder="c.i.g."
            type="text"
            value={cig}
            onChange={(e) => setCig(e.target.value)}
            onFocus={(e) => (e.target.value = "")}
          />
        </div>
        <div className="supplier-form-oggetto">
          <textarea
            placeholder="accordo quadro"
            type="text"
            cols="20"
            rows="10"
            value={oggetto}
            onChange={(e) => setOggetto(e.target.value)}
            onFocus={(e) => (e.target.value = "")}
          />
        </div>
        <ol className="supplier-form-referenti">
          <li>
            <input
              type="text"
              placeholder="nome"
              className="supplier-form-nome"
              value={supplierNome}
              onChange={(e) => setSupplierNome(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
            />
            <input
              type="text"
              placeholder="cognome"
              className="supplier-form-cognome"
              value={supplierCognome}
              onChange={(e) => setSupplierCognome(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="nome"
              className="supplier-form-nome"
              value={supplierNomeAlt}
              onChange={(e) => setSupplierNomeAlt(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
            />
            <input
              type="text"
              placeholder="cognome"
              className="supplier-form-cognome"
              value={supplierCognomeAlt}
              onChange={(e) => setSupplierCognomeAlt(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
            />
          </li>
        </ol>
        <div>
          <button type="submit">
            <FcMultipleInputs size={30} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSupplier
