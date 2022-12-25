import {Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact"
import Movies from "./pages/Movies/Movies"
import Home from './pages/Home/Home'
function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/mvoies" element={<Movies/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
  );
}

export default App;
