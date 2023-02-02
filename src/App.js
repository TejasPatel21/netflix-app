import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from './screens/LoginScreen';
import { useContext, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Users } from './Context';
import ProfileScreen from './screens/ProfileScreen';

function App() {

 const { use, login, logout } = useContext(Users);
 const user = use;
 console.log(user)
  const auth = getAuth();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        login({
          id: userAuth.uid,
          email: userAuth.email,
        })
        //console.log(userAuth)
      } else {
        logout(null);
      }
    })
    return unsubcribe;
  }, []);


  return (
    <BrowserRouter>
      <div className="app">
        {!user ?
          <LoginScreen />
          :
          <Routes>
            <Route path='/profile' element={<ProfileScreen/>} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
