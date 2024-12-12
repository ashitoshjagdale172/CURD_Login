
import React from 'react'
import RegistrationForm from './components/RegistrationForm'

import LoginPage from "./Components/Login_Page";
import Navbar from './Components/Navbar';
import LoginList from './components/LoginList';


const App = () => {
  return (
    <div>
      <Navbar/>
      <RegistrationForm/>

      <LoginPage />
      <LoginList/>
    </div>
  );
};

export default App;
