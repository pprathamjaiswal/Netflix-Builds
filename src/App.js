import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            userid: userAuth.uid,
            email: userAuth.email,
          }));
        console.log(userAuth);
      } else {
        dispatch(logout());
        console.log();
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">

      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
