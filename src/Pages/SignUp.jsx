import React, { useContext, useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthContext";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen relative">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/121450d3-2d2f-41a9-acd6-b050ca0e0424/IN-en-20220801-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="top-0 left-0 w-full h-screen bg-black/60 absolute"></div>
        <div className="w-full px-4 py-24 fixed z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="mx-auto max-w-[300px] py-16">
              <h2 className="font-bold text-3xl">Sign Up</h2>

              <form className="flex flex-col py-4" onSubmit={handleSubmit}>
                <input
                  className="p-3 my-2 rounded bg-gray-700"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="p-3 my-2 rounded bg-gray-700"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="bg-red-600 py-2 my-6 rounded hover:bg-red-400 hover:text-gray-100 transition-all duration-200 "
                  type="submit"
                >
                  Sign Up
                </button>
              </form>

              <div className="flex justify-between items-center">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p className="text-sm">Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-500 mr-2">
                  Already subscribed to Netflix?{" "}
                </span>
                <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
