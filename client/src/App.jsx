import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Header from './components/Header';
import FooterCon from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path='/create-post' element={<CreatePost/>}/>
      <Route path='/update-post/:postId' element={<UpdatePost/>}/>
      </Route>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/post/:postSlug' element={<PostPage/>}/>
    </Routes>
    <FooterCon/>
    </BrowserRouter>
  )
}

export default App