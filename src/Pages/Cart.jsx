import React, { useState } from "react";
import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
const Cart = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const [quantity, setQuantity] = useState("1");
  const handleQuantity = (e) => {
    const q = e.target.value;

    setQuantity(q);
  };

  const handlePay = (price, seller_email, name, company,id) => {
    const q_Int = parseFloat(quantity);
    const p_Int = parseFloat(price);
    const buyer_email = user.email;
    let total = q_Int * p_Int;
    console.log(total);

    Swal.fire({
      title: "Are you sure?",
      text: `Total Price : ${total}`,
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Purchase!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Purchased",
          text: "Payment Completed",
          icon: "success",
        });

        const item = {
          name,
          total,
          price,
          quantity,
          seller_email,
          buyer_email,
          company,
        };

        fetch("https://final-assign-server.vercel.app/payment", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            axiosSecure.delete(`/carts/${id}`).then((res) => {
              console.log(res.data);
              refetch();
            });
          });
      }
    });
  };

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
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Medicare | Cart</title>
      </Helmet>
      <div className="p-2 mb-[60px] w-[100%] border-b-2 border-[#7469B6]">
        <h3 className="font-semibold text-2xl">My cart : {cart.length}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
        {cart.map((cart) => (
          <div key={cart._id} className="card w-[340px] bg-base-100 shadow-xl">
            <figure>
              <img src={cart.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cart.name}</h2>
              <p>Price : {cart.price}</p>
              <div>
                <span>Quantity :</span>
                <input
                  onChange={(event) => handleQuantity(event)}
                  className="p-2"
                  name="quantity"
                  defaultValue="1"
                  min="1"
                  type="number"
                />
              </div>
              <div className="card-actions justify-end flex items-center">
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="bg-red-500 rounded-[8px] p-2 text-white"
                >
                  <RiDeleteBin5Line className="text-[24px]" />
                </button>
                <button
                  onClick={() =>
                    handlePay(cart.price, cart.seller_email, cart.name, cart.company,cart._id)
                  }
                  className="btn bg-[#7469B6] text-white"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
