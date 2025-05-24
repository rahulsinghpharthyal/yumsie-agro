import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages:-
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQS from "./pages/FAQS";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./pages/ScrollToTop";
import ProductDescription from "./pages/ProductDescription";


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs/:id" element={<Blogs/>}/>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/products/:productType" element={<ProductDescription/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
