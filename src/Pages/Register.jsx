import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [error, setError] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const run = "/";

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(null);

    //console.log(data.photoUrl);
    //console.log(data.name);
    if (data.password.length < 6) {
      setError("Password length must be 6");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(data.password)) {
      setError("Password must have uppercase letter");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(data.password)) {
      setError("Password must have Lower letter");
      return;
    }

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        updateUserProfile(data.name, data.photoUrl).then(() => {
          const userinfo = {
            email: data.email,
            name: data.name,
            photo: data.photoUrl,
            role: data.role,
          };
          axiosPublic.post("/users", userinfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up Successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(run);
            }
          });
        });
      })
      .catch((error) => {
        notifyFailed();
        console.log(error);
      });
  };
  const notify = () => toast("Registration Successful!");
  const notifyFailed = () => toast("Registration Failed !");

  return (
    <div className="relative lg:w[1170px] mx-auto my-[50px] flex justify-center items-center">
      <div className="absolute flex justify-center items-center  w-full z-[-10]">
        <div className="hidden  lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            width="1170"
            height="550"
            preserveAspectRatio="none"
            viewBox="0 0 1170 550"
          >
            <g clip-path='url("#SvgjsClipPath4124")' fill="none">
              <circle
                r="17.135"
                cx="672.95"
                cy="266.58"
                fill='url("#SvgjsLinearGradient4125")'
              ></circle>
              <circle
                r="21.3"
                cx="465.25"
                cy="267.15"
                fill='url("#SvgjsLinearGradient4126")'
              ></circle>
              <circle
                r="24"
                cx="273.41"
                cy="547.65"
                fill='url("#SvgjsLinearGradient4127")'
              ></circle>
              <circle
                r="50.75"
                cx="219.51"
                cy="40.92"
                fill='url("#SvgjsLinearGradient4128")'
              ></circle>
              <circle
                r="51.04"
                cx="816.76"
                cy="195.52"
                fill='url("#SvgjsLinearGradient4129")'
              ></circle>
              <circle
                r="23.655"
                cx="427.04"
                cy="134.57"
                fill='url("#SvgjsLinearGradient4130")'
              ></circle>
              <circle
                r="50.915"
                cx="148.05"
                cy="166.84"
                fill='url("#SvgjsLinearGradient4131")'
              ></circle>
              <circle
                r="15.655"
                cx="1142.17"
                cy="293.79"
                fill='url("#SvgjsLinearGradient4132")'
              ></circle>
              <circle
                r="22.67"
                cx="990.75"
                cy="324.16"
                fill='url("#SvgjsLinearGradient4133")'
              ></circle>
            </g>
            <defs>
              <clipPath id="SvgjsClipPath4124">
                <rect width="1170" height="550" x="0" y="0"></rect>
              </clipPath>
              <linearGradient
                x1="638.6800000000001"
                y1="266.58"
                x2="707.22"
                y2="266.58"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4125"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="422.65"
                y1="267.15"
                x2="507.84999999999997"
                y2="267.15"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4126"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="225.41000000000003"
                y1="547.65"
                x2="321.41"
                y2="547.65"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4127"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="118.00999999999999"
                y1="40.92"
                x2="321.01"
                y2="40.92"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4128"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="714.68"
                y1="195.52"
                x2="918.8399999999999"
                y2="195.52"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4129"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="379.73"
                y1="134.57"
                x2="474.35"
                y2="134.57"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4130"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="46.22000000000001"
                y1="166.84"
                x2="249.88"
                y2="166.84"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4131"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="1110.8600000000001"
                y1="293.79"
                x2="1173.48"
                y2="293.79"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4132"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="945.41"
                y1="324.1600000000001"
                x2="1036.09"
                y2="324.1600000000001"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4133"
              >
                <stop stop-color="rgba(114, 67, 200, 1)" offset="0.1"></stop>
                <stop stop-color="rgba(79, 68, 132, 0.66)" offset="0.9"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="lg:flex lg:justify-between lg:items-center w-full shadow-lg bg-base-100">
            <div className="lg:w-[400px]">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h3 className="text-4xl text-center font-extrabold text-[#AD88C6]">
                  Register
                </h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#AD88C6]">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="John Wick"
                    className="border-b-2 border-b-[#AD88C6] p-[3px]"
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#AD88C6]">Role</span>
                  </label>
                  <select
                    {...register("role", { required: true })}
                    type="text"
                    defaultValue="user"
                    className="border-b-2 border-b-[#AD88C6] p-[3px]"
                  >
                    <option value="user">user</option>
                    <option value="seller">seller</option>
                  </select>
                  {errors.role && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#AD88C6]">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="John@gmail.com"
                    className="border-b-2 border-b-[#AD88C6] p-[3px]"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#AD88C6]">Photo Url</span>
                  </label>
                  <input
                    {...register("photoUrl", { required: true })}
                    type="text"
                    placeholder="https://"
                    className="border-b-2 border-b-[#AD88C6] p-[3px]"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#AD88C6]">Password</span>
                  </label>

                  <div className="relative flex space-x-2 items-center">
                    <input
                      {...register("password", { required: true })}
                      type={isVisible ? "text" : "password"}
                      placeholder="********"
                      className="border-b-2 border-b-[#AD88C6] p-[3px] flex-grow"
                    />
                    <div
                      className="absolute right-4 text-[#AD88C6]"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>

                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                {error && <small className="text-red-500">{error}</small>}
                <div className="form-control mt-6">
                  <button className="btn bg-[#AD88C6] text-white">
                    Register
                  </button>
                </div>
              </form>
              <ToastContainer></ToastContainer>
            </div>
            <div>
              <img
                className="lg:w-[400px] w-[280px]"
                src="https://i.ibb.co/TYzmCGV/undraw-Team-up-re-84ok.png"
                alt=""
              />
              <div className="flex justify-between items-center text-[14px] px-8 mb-[24px]">
                <p className="text-[#7469B6]">Already have an account?</p>
                <Link
                  to="/login"
                  className="py-2 px-5 rounded-[8px] bg-[#7469B6] text-white"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
