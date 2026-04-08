function Signup() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="bg-white w-[400px] rounded-xl shadow-xl p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Sign Up
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;