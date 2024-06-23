import Swal from "sweetalert2";
import useAdminPay from "../../Hooks/useAdminPay";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentManagement = () => {
  const [payment,refetch] = useAdminPay();
  
  const axiosSecure = useAxiosSecure();
    
  const handleStatus = (p) => {
    const status = "paid";
    
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
        axiosSecure.patch(`/payment/admin/${p._id}`, { status }).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: `Status has been updated to ${status}.`,
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
      <div className="p-2 mb-[60px] w-[100%] border-b-2 border-[#7469B6]">
        <h3 className="font-semibold text-2xl">Payment Management</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller Email</th>
              <th>Revenue</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {payment.map((p) => (
              <tr key={p._id} className="bg-base-200">
                <td>{p.name}</td>
                <td>{p.seller_email}</td>
                <td>{p.total}</td>
                <td>{p.status}</td>
                <td>
                  {p.status === "pending" ? (
                    <>
                      <button onClick={() => handleStatus(p)}>Accept</button>
                    </>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagement;
