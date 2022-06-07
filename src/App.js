import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Header></Header>
      
      <Routes>

        <Route path="/" element={<Home />}></Route>

      </Routes>

    </UserContext.Provider>
  );
}

export default App;
