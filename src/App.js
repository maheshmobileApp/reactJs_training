import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import NavBar from './NavBar';
import PageNotFount from './PageNotFound';
import UsersPage from './UsersPage';
import UsersListView from './users_list';
import UsersDetailsPage from './users_details';
import PostList from './post_list';
import React from 'react';
import LoginForm from './LoginForm';
export const  AuthContext = React.createContext() // Step 1:  create context 
const initalState = {
  isAthenticate:localStorage.getItem("accetoken")
}
const reducer = (state,action) => {
console.log("action",action)
  switch (action.type) {
    case "Login":
      localStorage.setItem("accetoken",action.payload.token)
      return {
        ...state,
        isAthenticate:true
      }
      
      break;
      case "Logout":
        localStorage.clear()
        return {
          ...state,
          isAthenticate:false
        }
        
      break;
    default:
      break;
  }

}

//s b a l

function App() {
  const [state,dispatch] = React.useReducer(reducer,initalState)
  return (
    <AuthContext.Provider
     value={{state,dispatch}}
    >
<div className="App">
      {state.isAthenticate ? <Home></Home> :<LoginForm></LoginForm>}
      </div>
    </AuthContext.Provider>
   
  );
}

export default App;
/*
<NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/users' element={<UsersPage></UsersPage>}></Route>
        <Route path='/posts' element={<PostList></PostList>}></Route>
        <Route path='/usersList' element={<UsersListView></UsersListView>}></Route>
        <Route path='/userDetails/:userId' element={<UsersDetailsPage></UsersDetailsPage>}></Route>
        <Route path='*' element={<PageNotFount></PageNotFount>}></Route>
      </Routes>
*/
/*

Create pages - 1 home 2 contact 3 about
define the routes

/*
BrowserRouter
Routes
Route
Link
NavLink
useNavigate

//login : action 
//home 
//logout

//context
//redux
//useState: This hooks allows us to use state in fuction component
//useContext: 
//useReducer: 


1.function component
2.class component


//state 
// reducer : logic 
//dispath: calling 
//contet.provider: listen 

state -> context.provider

reducer update the state


dispatch call the reducer

reducer : write business logic based on type



*/