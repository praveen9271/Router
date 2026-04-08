import Footer from "./Footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom"; // ✅ import Outlet


function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300">
      
      <Navbar />

      <div className="p-6">
        <Outlet />
      </div>
       <Footer />

    </div>
  );
}

export default Layout;