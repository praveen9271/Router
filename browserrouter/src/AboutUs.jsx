function AboutUs() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      {/* Card */}
      <div className="bg-white w-[450px] rounded-xl shadow-xl p-6">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          About Us
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          We are building modern web applications using React and Tailwind CSS.
          Our goal is to create fast, responsive, and user-friendly interfaces.
        </p>

        {/* Info Sections */}
        <div className="space-y-3">

          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-700">Our Mission</h3>
            <p className="text-sm text-gray-600">
              To provide high-quality web solutions with modern technologies.
            </p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-700">What We Do</h3>
            <p className="text-sm text-gray-600">
              We design and develop websites using React, Tailwind, and modern tools.
            </p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-700">Our Vision</h3>
            <p className="text-sm text-gray-600">
              To become a leading platform for innovative and scalable web apps.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;