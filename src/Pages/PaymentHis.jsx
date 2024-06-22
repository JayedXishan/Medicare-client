import React from "react";
import useBuyerPay from "../Hooks/useBuyerPay";

const PaymentHis = () => {
  const [payment] = useBuyerPay();
  console.log(payment.length);
  return (
    <div>
      <div className="p-2 mb-[60px] w-[100%] border-b-2 border-[#7469B6]">
        <h3 className="font-semibold text-2xl">Payment History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller Email</th>
              <th>Quantity</th>
              <th>Expanses</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((p) => (
              <tr key={p._id} className="bg-base-200">
                <td>{p.name}</td>
                <td>{p.seller_email}</td>
                <td>{p.quantity}</td>
                <td>{p.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHis;
