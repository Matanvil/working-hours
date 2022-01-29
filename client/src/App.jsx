import { useState } from "react";
// import Login from "./pages/login";
import InputPage from './pages/inputPage'

function App() {
  const [loggedIn, setLoggedIn] = useState();

  return(
    //  <Login />
     <InputPage />
     )
}

export default App;
