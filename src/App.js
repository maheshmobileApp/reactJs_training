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
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

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




*/