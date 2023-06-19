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
import ViewProfileForCancel from "./pageafterlogin/viewprofileforcancel/viewprofileforcancel";
import RenewDelegatePage from "./pageafterlogin/renewDelegatePage/renewDelegatePage";
import ChangetypeDelegatePage from "./pageafterlogin/changetypeDelegatePage/changetypeDelegatePage";
import Editinformationperson from "./pageafterlogin/editinformationperson/editinformationperson";
import Editinformationaddress from "./pageafterlogin/editinformationaddress/editinformationaddress";
import ConfirmEditInformation from "./pageafterlogin/confirmEditInformation/confirmEditInformation";
import TermsconditionsDelegate from "./pageafterlogin/termsconditionsDelegate/termsconditionsDelegate";
import InformationpersonForDelegate from "./pageafterlogin/informationpersonForDelegate/informationpersonForDelegate";
import InformationaddressForDelegate from "./pageafterlogin/informationaddressForDelegate/informationaddressForDelegate";
import ViewprofilleForDelegate from "./pageafterlogin/viewprofilleForDelegate/viewprofilleForDelegate";
import Verificationchannel from "./pageafterlogin/verificationchannel/verificationchannel";


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
            
            <Route path="/member/viewprofileforcancel" exact="true" element={<ViewProfileForCancel/>}/> 

            <Route path="/member/renewdelegatepage" exact="true" element={<RenewDelegatePage/>} /> 

            <Route path="/member/changetypedelegatepage" exact="true" element={<ChangetypeDelegatePage/>} /> 

            <Route path="/member/changetypedelegatepage" exact="true" element={<ChangetypeDelegatePage/>} /> 

            <Route path="/member/editinformationperson" exact="true" element={<Editinformationperson/>} /> 

            <Route path="/member/editinformationaddress" exact="true" element={<Editinformationaddress/>} /> 

            <Route path="/member/confirmeditdata" exact="true" element={<ConfirmEditInformation/>} /> 
            <Route path="/member/termsconditionsdelegate" exact="true" element={<TermsconditionsDelegate/>} /> 
            <Route path="/member/informationpersonfordelegate" exact="true" element={<InformationpersonForDelegate/>} /> 
            <Route path="/member/informationaddressfordelegate" exact="true" element={<InformationaddressForDelegate/>} /> 
            <Route path="/member/informationaddressfordelegate" exact="true" element={<InformationaddressForDelegate/>} /> 
            <Route path="/member/viewprofillefordelegate" exact="true" element={<ViewprofilleForDelegate/>} /> 
            <Route path="/member/verificationchannel" exact="true" element={<Verificationchannel/>} />
            

        </Routes>
    </div>
  );
}

export default App;
