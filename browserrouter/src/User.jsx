import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = [
    { id: "1", name: "Manish", role: "Frontend Developer" },
    { id: "2", name: "Rahul", role: "Backend Developer" },
    { id: "3", name: "Amit", role: "Full Stack Developer" }
  ];

  const user = users.find((u) => u.id === id);

  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="bg-white w-[400px] rounded-xl shadow-xl p-6 text-center">

        {user ? (
          <>
            <h2 className="text-xl font-bold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {user.role}
            </p>

            <p className="text-sm text-gray-400 mt-2">
              User ID: {id}
            </p>
          </>
        ) : (
          <p className="text-red-500">User not found</p>
        )}

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // 🔥 previous page
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          ⬅ Back
        </button>

      </div>
    </div>
  );
}

export default User;