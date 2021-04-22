import React, { useState, useEffect } from "react"
import firebase from "firebase/app"
import logo from "./images/logo.png"
import { db, auth } from "./firebase"
import { edifici } from "./edifici"
import { mesi } from "./mesi"

export const DataContext = React.createContext()

const ContextProvider = (props) => {
  // GET DATE
  const today = new Date().toISOString().substring(0, 10)
  const time = new Date().toLocaleTimeString().substring(0, 5)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp()

  // ANAGRAFICA SUPPLIER
  const [ditta, setDitta] = useState("")
  const [lotto, setLotto] = useState("")
  const [cig, setCig] = useState("")
  const [oggetto, setOggetto] = useState("")
  const [supplierNome, setSupplierNome] = useState("")
  const [supplierCognome, setSupplierCognome] = useState("")
  const [supplierNomeAlt, setSupplierNomeAlt] = useState("")
  const [supplierCognomeAlt, setSupplierCognomeAlt] = useState("")
  // AUDIT-FORM
  const [suppliersOptionList, setSuppliersOptionList] = useState([])
  const [selectedSupplier, setSelectedSupplier] = useState("")
  const [giorno, setGiorno] = useState(today)
  const [orario, setOrario] = useState(time)
  const [selectedEdifici, setSelectedEdifici] = useState("B1")
  const [isGenerated, setIsGenerated] = useState(false)
  // AUDIT-PAGE
  const [supplierData, setSupplierData] = useState([])
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [monthText, setMonthText] = useState("")
  const [year, setYear] = useState("")
  const [uploadFile, setUploadFile] = useState(logo)
  // SIGN IN
  const [user, setUser] = useState({ nickname: "", email: "", password: "" })
  const [displayName, setDisplayName] = useState("")

  // GET INPUT VALUE ON CHANGE
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value })

  // SING IN
  const handleSignIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => setDisplayName(res.user.displayName))
      .then(() => (window.location = "/")) //FIXME: da migliorare per non caricare tutta la pagina
      .catch((err) => alert(err.message))
  }
  //CHECK USER STATUS (SIGN IN - SIGN OUT)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user
        ? setDisplayName(user.displayName)
        : setDisplayName("user not authorized")
    })
  }, [])

  // SIGN UP
  const handleSignUp = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => res.user.updateProfile({ displayName: user.nickname }))
      .then(() => alert(`${user.nickname} signed up succesfully!`))
      .catch((error) => alert(error.message))
  }

  // SIGN OUT
  const handleSignOut = (e) => {
    e.preventDefault()
    auth.signOut()
    window.location = "/"
  }

  // CLEAR FIELDS
  const clearFields = (e) => (e.target.value = "")

  // DELETE ALL DB
  const deleteAllDb = () => {
    window.confirm("🔥 premi OK per cancellare TUTTO il DB 🔥") &&
      db
        .collection("suppliers")
        .get()
        .then((snapshot) => snapshot.forEach((doc) => doc.ref.delete()))
        .catch((error) => alert(`error occured: ${error.message}`))
  }

  // ADD SUPPLIER DATA TO DB
  const handleSubmitSupplier = (e) => {
    e.preventDefault()
    db.collection("suppliers")
      .add({
        ditta,
        cig,
        lotto,
        oggetto,
        referenti: [
          { nome: supplierNome, cognome: supplierCognome },
          { nome: supplierNomeAlt, cognome: supplierCognomeAlt },
        ],
        createdAt: timestamp,
      })
      .then((doc) => alert(`supplier written ID: ${doc.id}`))
      .catch((error) => console.log(`error occured: ${error.message}`))
    // CLEAR ALL FIELDS
    setDitta("")
    setLotto("")
    setCig("")
    setOggetto("")
    setSupplierNome("")
    setSupplierCognome("")
    setSupplierNomeAlt("")
    setSupplierCognomeAlt("")
  }

  // GET SUPPLIER DATA FROM DB
  const getSupplierData = (ditta) => {
    db.collection("suppliers")
      .where("ditta", "==", ditta)
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => setSupplierData(doc.data()))
      )
  }

  // GET SELECTED TEXTUAL MONTH
  const getTextMonth = (monthNumber) => {
    const monthTemp = mesi.filter((mese) => monthNumber === mese.numero)
    month !== "" && setMonthText(monthTemp[0].mese)
  }

  // SEND AUDIT-FORM DATA TO AUDIT-PAGE
  const handleSubmitAuditForm = (e) => {
    e.preventDefault()
    getSupplierData(selectedSupplier) //FIXME: non prende dato al primo rendering. bypassato aggiungendo un button intermedio
    setSelectedEdifici(selectedEdifici)
    setOrario(orario)
    setGiorno(giorno)
    setDay(giorno.substring(8))
    setMonth(giorno.substring(6, 7))
    setYear(giorno.substring(0, 4))
    setIsGenerated(true)
  }

  // RESET AUDIT-PAGE STATE TO DEFAULT
  const resetAuditPage = () => {
    setIsGenerated(false)
    setSelectedSupplier("")
  }

  // POPULATE SUPPLIER SELECT -> OPTION LIST IN ADD-AUDIT
  useEffect(() => {
    db.collection("suppliers").onSnapshot((snapshot) =>
      setSuppliersOptionList(snapshot.docs.map((doc) => [doc.data().ditta]))
    )
  }, [])

  // UPLOAD FILE HANDLER
  const handleUploadFile = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      reader.readyState === 2 && setUploadFile(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  // RENDER
  return (
    <DataContext.Provider
      value={{
        // HOME
        deleteAllDb,
        // ANAGRAFICA SUPPLIER
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
        supplierNomeAlt,
        setSupplierNomeAlt,
        supplierCognome,
        setSupplierCognome,
        supplierCognomeAlt,
        setSupplierCognomeAlt,
        handleSubmitSupplier,
        // AUDIT-FORM
        orario,
        setOrario,
        giorno,
        setGiorno,
        suppliersOptionList,
        selectedSupplier,
        setSelectedSupplier,
        edifici,
        setSelectedEdifici,
        isGenerated,
        resetAuditPage,
        handleSubmitAuditForm,
        // AUDIT-PAGE
        supplierData,
        selectedEdifici,
        monthText,
        getTextMonth,
        day,
        month,
        year,
        uploadFile,
        handleUploadFile,
        // SIGN IN
        user,
        setUser,
        displayName,
        handleChange,
        handleSignIn,
        handleSignOut,
        handleSignUp,
        clearFields,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default ContextProvider
