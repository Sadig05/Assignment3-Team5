import {Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact"
import Movies from "./pages/Movies/Movies"
import Home from './pages/Home/Home'
import NavBar from "./components/NavBar/NavBar";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import Movie from "./pages/Movie/Movie";
function App() {
 
  return (
   <Routes>
    <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='movies/:id' element={<Movie/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
   </Routes>
  
  );
}

export default App;
