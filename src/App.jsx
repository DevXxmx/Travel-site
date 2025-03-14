import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import Location1 from "./pages/Location1";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/Places" element={<PlacesRoute />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="/Location" element={<Location1 />} />
            
            <Route path="*" element={<NoPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
