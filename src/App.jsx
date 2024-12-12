
import React from 'react'
import RegistrationForm from './Components/RegistrationForm'
// import {Route, Routers} from 'react-router-dom'
import LoginPage from "./Components/Login_Page";


const App = () => {
  return (
    <div>
{/* <Routers>
<Route path="/" elements={<LoginPage/>}/>
<Route path="/Registration" elements={<RegistrationForm/>}/>
<Route path="/dashboard" elements={<Dashboard/>}/>
</Routers> */}
      <RegistrationForm/>

           <LoginPage />
    </div>
  );
};

export default App;
