import useUser from "../../Hooks/useUser";

const ManageUsers = () => {
  const [usr] = useUser();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usr.map((u) => (
              <tr key={u._id} className="bg-base-200">
                <td>
                  <div>
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={u.photo}
                      alt=""
                    />
                  </div>
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  {u.role === "admin" ? (
                    <h1>{u.role}</h1>
                  ) : (
                    <select
                      onChange={(event) => handleUserRole(event, u)}
                      className="w-2/3 rounded-lg border-b-2 bg-transparent placeholder-[#080808]"
                      defaultValue={u.role}
                      required
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                      <option value="seller">seller</option>
                    </select>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
