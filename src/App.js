import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Checkout from "./Component/Checkout/Checkout";
import Blog from "./Component/Blog/Blog";
import AboutMe from "./Component/AboutMe/AboutMe";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import "./";
import RequierAuth from "./Component/RequierAuth/RequierAuth";
import NotFoundPage from "./Component/NotFoundPage/NotFoundPage";
import Footer from "./Component/Footer/Footer";
// import RequierAuth from "./Component/RequierAuth/RequierAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/Checkout"
          element={
            <RequierAuth>
              <Checkout></Checkout>
            </RequierAuth>
          }
        ></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
