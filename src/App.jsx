import React from "react";
import { Route,Routes } from "react-router-dom";
import './App.css';
import Loginpage from './pages/login/loginpage';
import LoginThaiId from "./pages/loginThaId/loginThaId";
import Termsconditions from './pages/termsconditions/termsconditions';
import Selecttypeuser from './pages/selecttypeuser/selecttypeuser';
import Informationperson from './pages/informationperson/informationperson';
import Infomationaddress from "./pages/informationaddress/informationaddress";
import Informationaccount from "./pages/informationaccount/informationaccount";
import Confirmsenddata from "./pages/confirmsenddata/confirmsenddata";
import Home from "./pageafterlogin/home/home";



function App() {
  return (
    <div className="font-promptRegu">
      <Routes>
          <Route  path="/login" exact="true" element ={<Loginpage/>} />

          <Route path="/loginbythaid" exact="true"  element={<LoginThaiId/>} />
          
          <Route  path="/termsconditions" exact="true" element={<Termsconditions/>}/>

          <Route path="/selecttypeuser" exact="true" element={<Selecttypeuser/>}/> 

          <Route path="/informationperson" exact="true" element={<Informationperson/>}/> 

          <Route path="/informationaddress" exact="true" element={<Infomationaddress/>}/> 

          <Route path="/informationaccount" exact="true" element={<Informationaccount/>}/> 

          <Route path="/confirmsenddata" exact="true" element={<Confirmsenddata/>}/> 

          <Route path="/member/home" exact="true" element={<Home/>}/> 

      </Routes>
    </div>
  );
}

export default App;
