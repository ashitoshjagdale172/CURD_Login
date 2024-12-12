
import React from 'react'
import RegistrationForm from './components/RegistrationForm'

import LoginPage from "./Components/Login_Page";
import LoginList from './components/LoginList';


const App = () => {
  return (
    <div>

      <RegistrationForm/>

      <LoginPage />
      <LoginList/>
    </div>
  );
};

export default App;
