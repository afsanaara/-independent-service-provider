import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
