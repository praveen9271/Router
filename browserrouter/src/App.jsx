import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
