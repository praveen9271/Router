import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Users from "./Users";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
          {/* <Route path="*" element={<h2>Page Not Found</h2>} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
