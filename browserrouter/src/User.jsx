import { useParams, useNavigate } from "react-router";
import { usersData } from "./usersData";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = usersData.find((u) => u.id === id);

  if (!user) {
    return <h2 className="text-center mt-10">User not found</h2>;
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white w-[450px] rounded-xl shadow-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-4">👤 User Details</h2>

        <p className="mb-2">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default User;
