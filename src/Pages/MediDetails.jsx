import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MediDetails = () => {
  const medi = useLoaderData();
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
    <div className="lg:w-[1170px] mx-auto">
      <Helmet>
        <title>Medicare | Details</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={medi.image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold mb-6">{medi.medicine_name}</h1>
              <div>
                <p>Generic Name : {medi.generic_name}</p>
                <p>Company Name : {medi.company_name}</p>
                <p>Category : {medi.categoty}</p>
                <p>Quantity : {medi.quantity}</p>
                <p>Discount : {medi.discount}</p>
                <p>Price : {medi.price}</p>
                <p className="py-6">{medi.description}</p>
              </div>
              <div
                onClick={() => handleAddToCart(medi)}
                className="btn bg-[#7469B6] text-white"
              >
                Select
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediDetails;
