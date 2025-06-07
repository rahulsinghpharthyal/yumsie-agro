import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";


//Pages:-
const MainLayout = lazy(()=>import("./pages/MainLayout"));
const Home = lazy(()=>import("./pages/Home"));
const AboutUs = lazy(()=>import("./pages/AboutUs"));
const ContactUs = lazy(()=> import ("./pages/ContactUs"));
// const FAQS = lazy(()=> import  ("./pages/FAQS"));
const Blogs = lazy(()=> import ("./pages/Blogs"));
// const BlogPage = lazy(()=> import ("./pages/BlogPage"));
const ScrollToTop = lazy(()=>import  ("./pages/ScrollToTop"));
const ProductDescription = lazy(()=> import("./pages/ProductDescription"));
const ManufacturingFacility = lazy(()=> import ("./pages/ManufacturingFacility"));
const Horeca = lazy(()=>import( "./pages/Horeca"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/faqs" element={<FAQS />} /> */}
          <Route path="/manufacturing-facility" element={<ManufacturingFacility />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs/:id" element={<Blogs/>}/>
          <Route path="/horeca" element={<Horeca/>}/>
          <Route path="/products/:productType" element={<ProductDescription/>}/>
        </Route>
      </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
