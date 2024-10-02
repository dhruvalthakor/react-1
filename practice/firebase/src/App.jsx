import React, { useEffect, useState } from 'react'

import Usesignup from './component/Usesignup'
import Usersighin from './component/Usersighin'
import Table from './component/Table'
import Heelo from './component/Heelo'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // user is signin
      } else {
        console.log("User Logout");
        setUser(null);
        
        // user is signout
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <div className="container text-bg-info p-5">
          <Usesignup />
          <Usersighin/>
        </div>
      </>
    );
  }






  return (
    <>
      <div className="container text-bg-dark p-5 text-center">
        <h1>Google Auth Provider</h1>
        <h2>Namaste {user.email}</h2>
        <button className="btn btn-danger" onClick={() => signOut(auth)}>Logout</button>
      </div>
    </>
  )
}

export default App
