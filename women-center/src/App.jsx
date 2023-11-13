import React from "react"
import EditUser from "./page/EditUser"
import DataKonselor from "./page/DataKonselor"
import TabelKonselor from "./component/organisms/TabelKonselor"
import Jadwal from "./page/jadwal"
import TabelUser from "./component/organisms/TabelUser"
function App() {

  return (
    <>
      {/* <EditUser /> */}
      {/* <TabelUser /> */}
      <DataKonselor />
      <TabelKonselor />
      <Jadwal/>
    </>
  )
}

export default App
