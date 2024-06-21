import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

import Swal from 'sweetalert2'


const Category = () => {
  const medis = useLoaderData();
  return (
    <div className="lg:w-[900px] mx-auto">
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
                <td><img className="w-[50px] h-[50px] rounded-xl" src={medi.image} alt="" /></td>
                <td>{medi.medicine_name}</td>
                <td>{medi.price}</td>
                <td>
                  <div className="flex space-x-10 items-center">
                    {" "}
                    <div className="btn bg-[#7469B6] text-white">Select</div>{" "}
                    <FaEye  className="text-[#E1AFD1] text-2xl" />
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
