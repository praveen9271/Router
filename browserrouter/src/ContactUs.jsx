function ContactUs() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white w-[400px] rounded-xl shadow-xl p-6 relative">
        <button

          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Contact Us</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 p-2 border rounded-md outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md outline-none"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 border rounded-md outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
