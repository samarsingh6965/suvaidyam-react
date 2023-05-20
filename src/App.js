import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import WhereWeWork from "./Components/WhereWeWork/WhereWeWork";
import ContactUs from "./Components/Contact Us/ContactUs";
import PageNotFound from "./Components/Common/Page Not Found/PageNotFound";
import Navbar from "./Components/Common/Navbar/Navbar";
import Footer from "./Components/Common/Footer/Footer";

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wherewework" element={<WhereWeWork />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer/> */}
    </>
  );
}

export default App;
