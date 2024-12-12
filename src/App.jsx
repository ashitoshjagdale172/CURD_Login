
import React from 'react'
import RegistrationForm from './Components/RegistrationForm'

import LoginPage from "./Components/Login_Page";
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar/>
      <RegistrationForm/>

      <LoginPage />
    </div>
  );
};

export default App;
