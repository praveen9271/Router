function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="bg-white w-[400px] rounded-xl shadow-xl p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Login
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;