import React, { useEffect, useState } from 'react';
import Usesignup from './component/Usesignup';
import Usersighin from './component/Usersighin';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);


  function signout() {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      
        window.location.href = '/'; 
      })
      .catch((error) => {
        console.error('Sign out error', error);
      });
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Usesignup />,
    },
    {
      path: '/signin',
      element: <Usersighin />,
    },
    {
      path: '/home',
      element: (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card text-center shadow-lg p-5 rounded-4" style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Google Auth Provider</h1>
            <h2>Namaste {user ? user.email : 'Guest'}</h2>
            <button className="btn btn-danger mt-4" onClick={signout}>
              Logout
            </button>
          </div>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); 
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
