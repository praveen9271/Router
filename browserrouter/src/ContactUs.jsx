function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white w-[400px] rounded-xl shadow-xl p-6 relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black">
        X
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 p-2 border rounded-md outline-none"
            />
          </div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md outline-none"
          />

          <label className="text-sm text-gray-600">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 border rounded-md outline-none"
          />

          <button  onClick={handleSubmit}
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
