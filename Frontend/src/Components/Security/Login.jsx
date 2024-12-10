import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import backendlink from "../../../src/backendapilink";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  console.log(backendlink);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    async function submit() {
      const response = await axios.post(backendlink + "/api/login", {
        email: email,
        password: password,
      });
      if (response.data != "failed") {
        const stringtoken = JSON.stringify(response.data);
        sessionStorage.setItem("token", stringtoken);
        const user = jwtDecode(response.data);
        console.log(user);
        if (user.role == "student") {
          navigate("/admin/studentdashboard");
        } else if (user.role == "faculty") {
          navigate("/facultydashboard");
        }
      } else {
        alert("Could not login");
        navigate("/");
      }
    }
    submit();
  };

  return (
    <div>
      {/* <Helmet>
                <title>Login</title>
            </Helmet> */}
      <div className="flex justify-center items-center">
        <div className="card  w-full max-w-md shadow-md shadow-roaming  shadow-blue-300 shadow-t-2 my-4 md:my-12">
          <form className="card-body" onSubmit={handleLogin}>
            {/* email field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered "
                required
              />
            </div>
            {/* password field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-3 right-3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <IoEye /> : <IoEyeOff />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* login button */}
            <div className="form-control mt-6">
              <button className="btn bg-black text-white hover:bg-blue-300 ">
                Login
              </button>
            </div>
            <p className="text-center mt-4">
              Do not have an account ?{" "}
              <Link className="text-blue-300 font-bold" to="/register">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
