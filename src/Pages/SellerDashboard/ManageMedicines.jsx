import { useState } from "react";
import useMedi from "../../Hooks/useMedi";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ManageMedicines = () => {
  const [category] = useMedi();
  const [isActive, setActive] = useState("2");
  const { user } = useAuth() || {};

  const handleAdd = e => {
    e.preventDefault();

    const form = e.target;

    const medicine_name = form.medicine_name.value;
    const image = form.image.value;
    const category = form.category.value;
    const generic_name = form.generic_name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const company_name = form.company_name.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const email = user.email;

    let no = '1';
    if (category === 'Tablet') {
        no = '1';
    }
    else if (category === 'Syrup') {
        no = '2';
    }
    else if (category === 'Capsule') {
        no = '3';
    }
    else if (category === 'Drop') {
        no = '4';
    }
    else if (category === 'Injection') {
        no = '5';
    }
    else if (category === 'Others') {
        no = '6';
    }

    const item = { no, medicine_name,category, generic_name, image, price, quantity, discount, company_name, description, email };



    fetch('http://localhost:5000/category', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: "Good job!",
                text: "Successfully Added a item!",
                icon: "success"
              });
        })

    

}

  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl mb-6">Medicine Management</h3>
        <div className="flex mb-10">
          <div
            onClick={() => setActive("1")}
            className={
              isActive == "1"
                ? " p-2 border-l-2 border-r-2 border-t-2 "
                : "p-2 border-b-2"
            }
          >
            Add Medicine
          </div>
          <div
            onClick={() => setActive("2")}
            className={
              isActive == "2"
                ? " p-2 border-l-2 border-r-2 border-t-2 "
                : "p-2 border-b-2"
            }
          >
            Show Medicine
          </div>
        </div>
        {isActive == "2" ? (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Generic Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((c) => (
                    <tr key={c._id} className="bg-base-200">
                      <td>
                        <div>
                          <img
                            className="w-[50px] h-[50px] rounded-md"
                            src={c.image}
                            alt=""
                          />
                        </div>
                      </td>
                      <td>{c.medicine_name}</td>
                      <td>{c.generic_name}</td>
                      <td>{c.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div>
              <form
                onSubmit={handleAdd}
                className="container flex flex-col mx-auto space-y-12"
              >
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Medicine Name</label>
                    <input
                      name="medicine_name"
                      type="text"
                      placeholder="Medicine name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Image URL</label>
                    <input
                      name="image"
                      type="text"
                      placeholder="https://"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="username" className="text-sm">
                      category
                    </label>
                    <select
                      name="category"
                      defaultValue="Tablet"
                      className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                    >
                      {/* <option disabled selected>Select</option> */}
                      <option >Tablet</option>
                      <option>Syrup</option>
                      <option>Capsule</option>
                      <option>Drop</option>
                      <option>Injection</option>
                      <option>Others</option>
                    </select>
                  </div>
                  
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Price</label>
                    <input
                      name="price"
                      type="text"
                      placeholder="0"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Quantity</label>
                    <input
                      name="quantity"
                      type="text"
                      placeholder="100"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Discount</label>
                    <input
                      name="discount"
                      type="text"
                      defaultValue="0"
                      
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Company Name</label>
                    <input
                      name="company_name"
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Generic Name</label>
                    <input
                      name="generic_name"
                      type="text"
                      placeholder="Generic name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="text-sm">Description</label>
                    <textarea
                      name="description"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                    ></textarea>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Add"
                  className="btn bg-gray-700 text-white"
                />
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageMedicines;
