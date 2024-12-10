// import { ToastContainer, toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import backendlink from "../../../src/backendapilink";
// import { Helmet } from "react-helmet";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [showPass, setshowPass] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    const password = e.target.password.value;

    const response = await axios.post(backendlink + "/api/registration", {
      email: email,
      role: role,
      password: password,
    });

    if (response.data == "successful") {
      alert("Registration successful");
      navigate("/login");
    }

    // check password
    // if (password.length < 6) {
    //     toast.warning('Password must be 6 character long !')
    //     return
    // }
    // else if (!/[A-Z]/.test(password)) {
    //     toast.warning('Password should have at least one uppercase !')
    //     return
    // }
    // else if (!/[^a-zA-Z0-9]/.test(password)) {
    //     toast.warning('Password should have at least one special character!');
    //     return;
    // }

    // const newUserInfo = {
    //     email: email,
    //     role: role,
    // }
    // axiosPublic.post('/users', newUserInfo)
    //     .then((res) => {
    //         // console.log(res)
    //         if (res.data.insertedId) {
    //             // reset()
    //             navigate(location?.state ? location.state : '/')
    //         }
    //     })
    //     .catch((error) => {
    //         setLoading(false)
    //         toast.error(error.code)
    //     })
  };

  return (
    <div className="md:flex justify-center items-center">
      {/* <Helmet>
                <title>Register</title>
            </Helmet> */}

      <div className="md:w-2/3">
        <div className="flex justify-center">
          <div className="card w-full max-w-md shadow-md shadow-blue-400 bg-base-100 my-16">
            <form className="card-body" onSubmit={handleRegister}>
              {/* Name Field */}
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                /> */}
              </div>
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select name="role" className="select select-bordered w-full">
                  <option>faculty</option>
                  <option>student</option>
                </select>
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute top-3 right-3 cursor-pointer"
                    onClick={() => setshowPass(!showPass)}
                  >
                    {showPass ? <IoEye /> : <IoEyeOff />}
                  </span>
                </div>
              </div>

              {/* Register Button */}
              <div className="form-control mt-6">
                <button className="btn bg-black text-white hover:bg-blue-300">
                  Register
                </button>
              </div>

              {/* Login Redirect */}
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link className="text-blue-300 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
