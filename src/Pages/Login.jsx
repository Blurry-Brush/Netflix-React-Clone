import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const { user, logIn } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
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
              <h2 className="font-bold text-3xl">Sign In</h2>
              {error ? <p className='ring-2 ring-pink-900 mt-4 rounded-md ring-inset px-2 py-1.5 bg-red-400'>{error}</p>: null}
              <form onSubmit={handleSubmit} className="flex flex-col py-4">
                <input onChange={(e)=> setEmail(e.target.value)} className="p-3 my-2 rounded bg-gray-700"  value={email} type="email" placeholder="Email" />
                <input onChange={(e)=> setPassword(e.target.value)} className="p-3 my-2 rounded bg-gray-700" value={password} type="password" placeholder="Password" />
                <button className="bg-red-600 py-2 my-6 rounded hover:bg-red-400 hover:text-gray-100 transition-all duration-200 " type="submit">
                  Sign In
                </button>
              </form>

              <div className="flex justify-between items-center">
                <p><input className="mr-2" type="checkbox"/>Remember Me</p>
                <p className="text-sm">Need Help?</p>
              </div>
              <p className="py-8"><span className="text-gray-500 mr-2">New to Netflix?</span><Link to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login