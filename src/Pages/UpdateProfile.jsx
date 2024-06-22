import React from "react";
import useAuth from "../Hooks/useAuth";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile(name, photo);
  };

  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="max-w-md p-8 sm:flex sm:space-x-6 text-white bg-[#7469B6] mb-[30px]">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={user.photoURL}
                alt=""
                className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="dark:text-gray-600">{user.email}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mb-[50px]">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-white bg-[#7469B6]">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
                <p className="text-sm dark:text-gray-600">
                  Update your account
                </p>
              </div>
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered text-gray-900"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered text-gray-900"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
