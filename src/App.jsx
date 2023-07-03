import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/loading/LoadingSpinner.jsx";
//Routes
const Loginpage = lazy(() => import("./pages/login/loginpage"));
const LoginThaiId = lazy(() => import("./pages/loginThaId/loginThaId"));
const Termsconditions = lazy(() =>
  import("./pages/accountRegistration/termsconditions/termsconditions")
);
const Informationperson = lazy(() =>
  import("./pages/accountRegistration/informationperson/informationperson")
);
const Selecttypeuser = lazy(() =>
  import("./pages/accountRegistration/selecttypeuser/selecttypeuser")
);
const Infomationaddress = lazy(() =>
  import("./pages/accountRegistration/informationaddress/informationaddress")
);
const Informationaccount = lazy(() =>
  import("./pages/accountRegistration/informationaccount/informationaccount")
);
const Confirmsenddata = lazy(() =>
  import("./pages/accountRegistration/confirmsenddata/confirmsenddata")
);
const Home = lazy(() => import("./pageafterlogin/home/home"));
const ViewProfileForCancel = lazy(() =>
  import("./pageafterlogin/viewprofileforcancel/viewprofileforcancel")
);
const RenewDelegatePage = lazy(() =>
  import("./pageafterlogin/renewDelegatePage/renewDelegatePage")
);
const ChangetypeDelegatePage = lazy(() =>
  import("./pageafterlogin/changetypeDelegatePage/changetypeDelegatePage")
);
const Editinformationperson = lazy(() =>
  import(
    "./pageafterlogin/editPersanalInformation/editinformationperson/editinformationperson"
  )
);
const Editinformationaddress = lazy(() =>
  import(
    "./pageafterlogin/editPersanalInformation/editinformationaddress/editinformationaddress"
  )
);
const TermsconditionsDelegate = lazy(() =>
  import(
    "./pageafterlogin/userTypes/termsconditionsDelegate/termsconditionsDelegate"
  )
);
const ConfirmEditInformation = lazy(() =>
  import(
    "./pageafterlogin/editPersanalInformation/confirmEditInformation/confirmEditInformation"
  )
);
const InformationpersonForDelegate = lazy(() =>
  import(
    "./pageafterlogin/userTypes/informationpersonForDelegate/informationpersonForDelegate"
  )
);
const InformationaddressForDelegate = lazy(() =>
  import(
    "./pageafterlogin/userTypes/informationaddressForDelegate/informationaddressForDelegate"
  )
);
const ViewprofilleForDelegate = lazy(() =>
  import(
    "./pageafterlogin/userTypes/viewprofilleForDelegate/viewprofilleForDelegate"
  )
);
const Verificationchannel = lazy(() =>
  import("./pageafterlogin/verificationchannel/verificationchannel")
);

function App() {
  return (
    <div className="font-promptRegu">
      <Routes>
        <Route
          key="r1"
          path="/login"
          element={
            <Suspense key="s1" fallback={<LoadingSpinner />}>
              <Loginpage />
            </Suspense>
          }
        />
        <Route
          key="r2"
          path="/loginbythaid"
          element={
            <Suspense key="s2" fallback={<LoadingSpinner />}>
              <LoginThaiId />
            </Suspense>
          }
        />
        <Route
          key="r3"
          path="/termsconditions"
          element={
            <Suspense key="s3" fallback={<LoadingSpinner />}>
              <Termsconditions />
            </Suspense>
          }
        />
        <Route
          key="r4"
          path="/selecttypeuser"
          element={
            <Suspense key="s4" fallback={<LoadingSpinner />}>
              <Selecttypeuser />
            </Suspense>
          }
        />
        <Route
          key="r5"
          path="/informationperson/:typeAccountRegist"
          element={
            <Suspense key="s5" fallback={<LoadingSpinner />}>
              <Informationperson />
            </Suspense>
          }
        />
        <Route
          key="r6"
          path="/informationaddress/:typeAccountRegist"
          element={
            <Suspense key="s6" fallback={<LoadingSpinner />}>
              <Infomationaddress />
            </Suspense>
          }
        />
        <Route
          key="r7"
          path="/informationaccount/:typeAccountRegist"
          element={
            <Suspense key="s7" fallback={<LoadingSpinner />}>
              <Informationaccount />
            </Suspense>
          }
        />
        <Route
          key="r8"
          path="/confirmsenddata/:typeAccountRegist"
          element={
            <Suspense key="s8" fallback={<LoadingSpinner />}>
              <Confirmsenddata />
            </Suspense>
          }
        />
        <Route
          key="r9"
          path="/member/home"
          element={
            <Suspense key="s9" fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          key="r10"
          path="/member/viewprofileforcancel"
          element={
            <Suspense key="s10" fallback={<LoadingSpinner />}>
              <ViewProfileForCancel />
            </Suspense>
          }
        />
        <Route
          key="r11"
          path="/member/renewdelegatepage"
          element={
            <Suspense key="s10" fallback={<LoadingSpinner />}>
              <RenewDelegatePage />
            </Suspense>
          }
        />
        <Route
          key="r12"
          path="/member/changetypedelegatepage"
          element={
            <Suspense key="s12" fallback={<LoadingSpinner />}>
              <ChangetypeDelegatePage />
            </Suspense>
          }
        />
        <Route
          key="r13"
          path="/member/editinformationperson"
          element={
            <Suspense key="s13" fallback={<LoadingSpinner />}>
              <Editinformationperson />
            </Suspense>
          }
        />
        <Route
          key="r14"
          path="/member/editinformationaddress"
          element={
            <Suspense key="s14" fallback={<LoadingSpinner />}>
              <Editinformationaddress />
            </Suspense>
          }
        />
        <Route
          key="r15"
          path="/member/confirmeditdata"
          element={
            <Suspense key="s15" fallback={<LoadingSpinner />}>
              <ConfirmEditInformation />
            </Suspense>
          }
        />
        <Route
          key="r16"
          path="/member/termsconditionsdelegate"
          element={
            <Suspense key="s16" fallback={<LoadingSpinner />}>
              <TermsconditionsDelegate />
            </Suspense>
          }
        />
        <Route
          key="r17"
          path="/member/informationpersonfordelegate"
          element={
            <Suspense key="s17" fallback={<LoadingSpinner />}>
              <InformationpersonForDelegate />
            </Suspense>
          }
        />
        <Route
          key="r18"
          path="/member/informationaddressfordelegate"
          element={
            <Suspense key="s18" fallback={<LoadingSpinner />}>
              <InformationaddressForDelegate />
            </Suspense>
          }
        />
        <Route
          key="r19"
          path="/member/viewprofillefordelegate"
          element={
            <Suspense key="s19" fallback={<LoadingSpinner />}>
              <ViewprofilleForDelegate />
            </Suspense>
          }
        />
        <Route
          key="r20"
          path="/member/verificationchannel"
          element={
            <Suspense key="s20" fallback={<LoadingSpinner />}>
              <Verificationchannel />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
