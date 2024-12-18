import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { FiMail, FiLock } from "react-icons/fi";
// import { loginUser } from "../redux/slice/authSlice";

const Login = () => {

  // const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.auth);

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    dispatch(loginUser({ mobile, password })); 
  //  };

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col gap-7 justify-center items-center bg-[#F7FAFF] relative">
      <div className="flex flex-col justify-between items-center gap-5">
        <img src="/assets/logo/medjeex.svg" alt="Logo " className="w-[100px]" />
        <img src="/assets/login/Sign In!.png" alt="Sign In" />
      </div>
      <div className=" w-[100%] flex flex-col items-center justify-center space-y-4">
        <fieldset className="border border-gray-300 rounded-md p-2">
          <legend className="text-gray-600 font-semibold px-2">
            Mobile Number
          </legend>
          <div className="relative">
            <FiMail className="absolute left-2 top-3 text-gray-400" />
            <input
              type="mobile"
              id="mobile"
              placeholder="Enter mobile"
              className=" md:w-[30vw]  pl-10 py-2 text-sm focus:outline-none focus:border-blue-500 bg-[#F7FAFF]"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-md p-2">
          <legend className="text-gray-600 font-semibold px-2">Password</legend>
          <div className="relative">
            <FiLock className="absolute left-2 top-3 text-gray-400" />
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className=" md:w-[30vw] pl-10 py-2 text-sm focus:outline-none focus:border-blue-500 bg-[#F7FAFF]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </fieldset>

        <div className=" text-right md:w-[30%] w-[55%] ">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <div>
          <button
            type="submit"
            // onClick={handleSubmit}
            // disabled={loading}
            className="md:w-[30vw] bg-blue-500 hover:bg-blue-600 text-white font py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {/* {loading ? "Logging in..." : "Login"} */}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;