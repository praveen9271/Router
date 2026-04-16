import { NavLink } from "react-router-dom";

function Users() {
  const users = [
    { id: "1", name: "Manish" },
    { id: "2", name: "Manraj" },
    { id: "3", name: "Praveen" },
  ];

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white w-[450px] rounded-xl shadow-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-4">👥 Users</h2>

        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-3 rounded-lg">
              {user.name}
            </div>
          ))}
        </div>

        <NavLink
          to="/"
          className="mt-5 inline-block bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default Users;
