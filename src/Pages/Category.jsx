import React from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import { Helmet } from "react-helmet-async";

const Category = () => {
  const medis = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location =useLocation();
  const axiosSecure =useAxiosSecure();
    const [,refetch]=useCart();

  const handleAddToCart = (medi) => {
    if (user && user.email) {
        const cartItem = {
            mediId: medi._id,
            email: user.email,
            seller_email:medi.email,
            name: medi.medicine_name,
            image: medi.image,
            price: medi.price, 
            company: medi.company_name
        }
        axiosSecure.post('/carts',cartItem)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    } else {
      Swal.fire({
        title: "Need to Login",
        text: "Can't add to cart without login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:location.pathname})
        }
      });
    }
  };
  return (
    <div className="lg:w-[900px] mx-auto">
      <Helmet>
        <title>Medicare | Category</title>
      </Helmet>
      <div className="text-center mb-4 text-2xl font-extrabold">
        {medis[0]?.category ? <p>{medis[0].category}</p> : <p>No Medicine</p>}
      </div>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medis.map((medi) => (
              <tr key={medi._id}>
                <td>
                  <img
                    className="w-[50px] h-[50px] rounded-xl"
                    src={medi.image}
                    alt=""
                  />
                </td>
                <td>{medi.medicine_name}</td>
                <td>{medi.price}</td>
                <td>
                  <div className="flex space-x-10 items-center">
                    {" "}
                    <div
                      onClick={() => handleAddToCart(medi)}
                      className="btn bg-[#7469B6] text-white"
                    >
                      Select
                    </div>{" "}
                    <Link to={`/medidetails/${medi._id}`}><FaEye className="text-[#E1AFD1] text-2xl" /></Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
