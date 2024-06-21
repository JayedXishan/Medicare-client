import React from "react";
import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
const Cart = () => {
  const [cart,refetch] = useCart();
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
  return (
    <div>
      <div className="p-2 mb-[60px] w-[100%] border-b-2 border-[#7469B6]">
        <h3 className="font-semibold text-2xl">My cart : {cart.length}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
        {cart.map((cart) => (
          <div key={cart._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={cart.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cart.name}</h2>
              <p>Price : {cart.price}</p>
              <div>
                <span>Quantity :</span>
                <input className="p-2" defaultValue="1" min="1" type="number" />
              </div>
              <div className="card-actions justify-end flex items-center">
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="bg-red-500 rounded-[8px] p-2 text-white"
                >
                  <RiDeleteBin5Line className="text-[24px]" />
                </button>
                <Link className="btn bg-[#7469B6] text-white">Checkout</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
