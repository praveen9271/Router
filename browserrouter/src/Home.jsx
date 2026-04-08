import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="bg-white w-[450px] rounded-xl shadow-xl p-6 text-center">

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome 👋
        </h2>

        <p className="text-gray-600 text-sm mb-5">
          This is your modern React application dashboard.
        </p>

        {/* Feature Boxes */}
        <div className="space-y-3 mb-5">
          <div className="bg-orange-100 p-3 rounded-lg">
            ⚡ Fast
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg">
            🎨 Modern UI
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            🚀 Scalable
          </div>
        </div>

        {/* Users Page Button */}
        <NavLink
          to="/users"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mr-2"
        >
          View Users
        </NavLink>

        {/* Login Button */}
        <NavLink
          to="/login"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
        >
          Get Started
        </NavLink>

      </div>
    </div>
  );
}

export default Home;