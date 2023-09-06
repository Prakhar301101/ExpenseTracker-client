import { useState } from "react";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const loginUser=(e)=>{
    e.preventDefault();
    console.log(username,password);
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Header/>
      <section className=" flex justify-center items-center my-auto py-28 ">
        <div className="w-4/5 max-w-lg px-4 py-6  rounded-2xl  flex flex-col justify-center  border-gray-400 shadow-2xl bg-bgter">
          <h1 className="text-3xl text-center p text-slate-800 ">Log In</h1>
          <form className="flex flex-col  px-3 py-5" onSubmit={loginUser}>
            <input
              className="my-2 rounded-2xl p-2 text-xl "
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              className="my-2 rounded-2xl p-2 text-xl"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="my-2 bg-white text-slate-800 rounded-lg p-1">
              Submit
            </button>
            <div className="flex justify-center items-center gap-2 sm:gap-3 ">
              <span className="">New User?</span>
              <Link to="/Register" className="text-slate-700">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Login