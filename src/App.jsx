
import React from 'react'
<<<<<<< HEAD
import RegistrationForm from './Components/RegistrationForm'
// import {Route, Routers} from 'react-router-dom'
=======
import RegistrationForm from './components/RegistrationForm'

>>>>>>> 6df75bd8d6771804db6457210a88e2a5a09d39f7
import LoginPage from "./Components/Login_Page";
import Navbar from './Components/Navbar';
import LoginList from './components/LoginList';


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

<<<<<<< HEAD
           <LoginPage />
=======
      <LoginPage />
      <LoginList/>
>>>>>>> 6df75bd8d6771804db6457210a88e2a5a09d39f7
    </div>
  );
};

export default App;
