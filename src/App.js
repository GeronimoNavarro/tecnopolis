import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer"




const App = () =>{


const mensaje = "Bienvenidos a TECNOPOLIS"



  return (
  <>
  <NavBar />
  <ItemListContainer greeting={mensaje} />
  </>
  )
}


export default App;
