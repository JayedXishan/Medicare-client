import Swal from "sweetalert2";
import useUser from "../../Hooks/useUser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";

const ManageUsers = () => {
  const [usr] = useUser();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();  
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
          }
        });
      }
    });
  };


  const handleUserRole = (event, user) => {
    const role = event.target.value;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`, { role }).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: `${user.name}'s role has been updated to ${role}.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
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
                <td>
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="bg-red-500 rounded-[8px] p-2 text-white"
                  >
                    <RiDeleteBin5Line className="text-[24px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
