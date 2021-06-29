import React, { useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { auth } from './firebase'
import { login,logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {       //It is a listener . It listens any authStateChnage. It stores data in localstorage so if user is logedin and it refresh a page still the user wil be logged in
      if (userAuth) {
        // Logged In
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      } else {
        //Logged Out
        dispatch(logout())     //it reset the user state in redux
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">

      {!user ?
        <LoginScreen /> :

        <BrowserRouter>
          <Switch>
            <Route exact path='/'> <HomeScreen /> </Route>

            <Route path='/profile'><ProfileScreen/>  </Route>



            <Route path=''>    </Route>


          </Switch>

        </BrowserRouter>
      }
    </div>
  );
}

export default App;
