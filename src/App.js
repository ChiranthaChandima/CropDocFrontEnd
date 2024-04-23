import Homeadmin from "./pages/home/Homeadmin";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { diseaseInputs, treatmentInputs, locationInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { diseaseColumns, treatmentColumns, userColumns, locationColumns, recordColumns, instructorColumns } from "./datatablesource";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  useEffect(() =>{
    onSnapshot(
      collection(db, "disease"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
       
        sessionStorage.setItem("disease", JSON.stringify(list));

      },
      (error) => {
        console.log(error);
      }
    );
  })

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Homeadmin />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List route={"user"} title="Users" columns={userColumns}/>
                  </RequireAuth>
                }
              />
            </Route>    
            <Route path="disease">
              <Route
                index
                element={
                  <RequireAuth>
                    <List route={"disease"} title="Disease" columns={diseaseColumns}/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single inputs={diseaseInputs} route={"disease"} title="Edit Disease"/>
                  </RequireAuth>
                }
              />
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <New inputs={diseaseInputs} route={"disease"} title="Add New Disease" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="treatment">
              <Route
                index
                element={
                  <RequireAuth>
                    <List route={"treatment"} title="Treatment" columns={treatmentColumns}/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single inputs={treatmentInputs} route={"treatment"} title="Edit Treatment"/>
                  </RequireAuth>
                }
              />
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <New inputs={treatmentInputs} route={"treatment"} title="Add New Treatment" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="location">
              <Route
                index
                element={
                  <RequireAuth>
                    <List route={"location"} title="Location" columns={locationColumns}/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single inputs={locationInputs} route={"location"} title="Edit Location"/>
                  </RequireAuth>
                }
              />
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <New inputs={locationInputs} route={"location"} title="Add New Location" />
                  </RequireAuth>
                }
              />
            </Route> 
            <Route path="record">
              <Route
                index
                element={
                  <RequireAuth>
                    <List route={"record"} title="User Records" columns={recordColumns}/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="instructor">
              <Route
                index
                element={
                  <RequireAuth>
                    <List route={"instructor"} title="Pofessionals" columns={instructorColumns}/>
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
