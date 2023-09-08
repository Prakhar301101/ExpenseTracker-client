import { useState } from "react";
import { Link, } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  
  const createUser=async (e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:3000/register',{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{"Content-Type":"application/json"},
    });
    if(response.status==200){
      alert("Registration Successful, Login to continue")

    } else {
      alert("Registration Failed, try a different username");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Header />
      <section className=" flex justify-center items-center my-auto py-28">
        <div className="w-4/5 max-w-lg px-4 py-6 rounded-2xl  flex flex-col justify-center  border-gray-400 shadow-2xl bg-bgter">
          <h1 className="text-3xl text-center p text-slate-800 ">Sign Up</h1>
          <form className="flex flex-col  px-3 py-5" onSubmit={createUser}>
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
              <span className="">Account exists?</span>
              <Link to="/Login" className="text-slate-700">
                Login
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
