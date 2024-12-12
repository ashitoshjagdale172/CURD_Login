
import React from 'react'
import RegistrationForm from './Components/RegistrationForm'
// import {Route, Routers} from 'react-router-dom'
import LoginPage from "./Components/Login_Page";
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
<<<<<<< HEAD
{/* <Routers>
<Route path="/" elements={<LoginPage/>}/>
<Route path="/Registration" elements={<RegistrationForm/>}/>
<Route path="/dashboard" elements={<Dashboard/>}/>
</Routers> */}
=======
      <Navbar/>
>>>>>>> 8fd38dabb91ea01e1767758709e641e5569c24e1
      <RegistrationForm/>

           <LoginPage />
    </div>
  );
};

export default App;
