import { NavLink } from "react-router";
import { usersData } from "./Users";

function Users() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white w-[450px] rounded-xl shadow-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-4">👥 Users</h2>

        <div className="space-y-3">
          {usersData.length === 0 ? (
            <p>No users found</p>
          ) : (
            usersData.map((user) => (
              <NavLink key={user.id} to={`/users/${user.id}`}>
                <div className="bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
                  {user.name}
                </div>
              </NavLink>
            ))
          )}
        </div>

        <NavLink
          to="/"
          className="mt-5 inline-block bg-blue-500 text-white px-7 py-2 rounded"
        >
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default Users;