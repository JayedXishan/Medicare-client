import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "../Components/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from =location.state?.from?.pathname || "/";
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
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        notifySuccess();
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        notifyFailed();
        console.log(error);
      });
  };
  const notifySuccess = () => toast("Successfully Logged in!");
  const notifyFailed = () => toast("Logged in Failed !");
  return (
    <div className="relative lg:w[1170px] mx-auto my-[50px] flex justify-center items-center">
      <Helmet>
        <title>Medicare | Login</title>
      </Helmet>
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
            <g clip-path='url("#SvgjsClipPath4498")' fill="none">
              <circle
                r="13.96"
                cx="517.03"
                cy="390.65"
                fill='url("#SvgjsLinearGradient4499")'
              ></circle>
              <circle
                r="17.475"
                cx="30.96"
                cy="48.14"
                fill='url("#SvgjsLinearGradient4500")'
              ></circle>
              <circle
                r="17.72"
                cx="988.32"
                cy="67"
                fill='url("#SvgjsLinearGradient4501")'
              ></circle>
              <circle
                r="32.135"
                cx="475.47"
                cy="65.88"
                fill='url("#SvgjsLinearGradient4502")'
              ></circle>
              <circle
                r="18.73"
                cx="1070.03"
                cy="518.43"
                fill='url("#SvgjsLinearGradient4503")'
              ></circle>
              <circle
                r="42.975"
                cx="218.05"
                cy="93.4"
                fill='url("#SvgjsLinearGradient4504")'
              ></circle>
              <circle
                r="29.945"
                cx="576.51"
                cy="304.72"
                fill='url("#SvgjsLinearGradient4505")'
              ></circle>
              <circle
                r="42.14"
                cx="105.75"
                cy="445.71"
                fill='url("#SvgjsLinearGradient4506")'
              ></circle>
              <circle
                r="33.36"
                cx="902.32"
                cy="352.93"
                fill='url("#SvgjsLinearGradient4507")'
              ></circle>
              <circle
                r="29.52"
                cx="121.16"
                cy="339.15"
                fill='url("#SvgjsLinearGradient4508")'
              ></circle>
            </g>
            <defs>
              <clipPath id="SvgjsClipPath4498">
                <rect width="1170" height="550" x="0" y="0"></rect>
              </clipPath>
              <linearGradient
                x1="489.10999999999996"
                y1="390.65"
                x2="544.9499999999999"
                y2="390.65"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4499"
              >
                <stop stop-color="rgba(114, 67, 200, 1)" offset="0.1"></stop>
                <stop stop-color="rgba(79, 68, 132, 0.66)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="-3.990000000000002"
                y1="48.14"
                x2="65.91"
                y2="48.14"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4500"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="952.8800000000001"
                y1="67"
                x2="1023.7600000000001"
                y2="67"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4501"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="411.20000000000005"
                y1="65.88"
                x2="539.74"
                y2="65.88"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4502"
              >
                <stop stop-color="rgba(114, 67, 200, 1)" offset="0.1"></stop>
                <stop stop-color="rgba(79, 68, 132, 0.66)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="1032.57"
                y1="518.43"
                x2="1107.49"
                y2="518.43"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4503"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="132.10000000000002"
                y1="93.4"
                x2="304"
                y2="93.4"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4504"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="516.62"
                y1="304.72"
                x2="636.4"
                y2="304.72"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4505"
              >
                <stop stop-color="#e298de" offset="0.1"></stop>
                <stop stop-color="rgba(72, 70, 135, 0.53)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="21.47"
                y1="445.7099999999999"
                x2="190.03"
                y2="445.7099999999999"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4506"
              >
                <stop stop-color="rgba(114, 67, 200, 1)" offset="0.1"></stop>
                <stop stop-color="rgba(79, 68, 132, 0.66)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="835.6"
                y1="352.93000000000006"
                x2="969.04"
                y2="352.93000000000006"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4507"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
              <linearGradient
                x1="62.12"
                y1="339.15"
                x2="180.2"
                y2="339.15"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient4508"
              >
                <stop stop-color="#84b6e0" offset="0.1"></stop>
                <stop stop-color="rgba(70, 74, 143, 0.47)" offset="0.9"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="bg-white shadow-xl ">
        <div className="">
          <div className="lg:flex lg:justify-between lg:items-center shadow-lg">
            <div className="lg:w-[350px]">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h3 className="text-4xl font-extrabold text-center text-[#7469B6]">
                  Log in
                </h3>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#7469B6]">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="John@gmail.com"
                    className=" p-[5px] border-b-2 border-b-[#7469B6]"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label text-[#7469B6]">
                    <span className="label-text text-[#7469B6]">Password</span>
                  </label>
                  <div className="relative flex space-x-2 justify-center items-center">
                    <input
                      type={isVisible ? "text" : "password"}
                      placeholder="********"
                      className=" p-[3px] flex-grow border-b-2 border-b-[#7469B6]"
                      {...register("password", { required: true })}
                    />
                    <div
                      className="absolute right-4 text-[#7469B6]"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  {errors.password && <span>This field is required</span>}
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#7469B6] text-white">Login</button>
                </div>
              </form>
              <ToastContainer></ToastContainer>

              <div className="flex justify-between items-center text-[14px] px-8 mb-[12px]">
                <p>Don't have account?</p>
                <Link
                  to="/register"
                  className="py-2 px-4 rounded-xl bg-[#E1AFD1] text-white"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="">
              <img
                className="lg:w-[350px] w-[280px]"
                src="https://i.ibb.co/stYtHJN/undraw-Access-account-re-8spm-1.png"
                alt=""
              />
              <div className="text-center font-semibold text-[14px] px-8 mb-[30px]">
                <p className="text-[#7469B6]">Want to Login with ?</p>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
