import {  useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { UserContext } from '../UserContext';

const ExpenseTracker = () => {
  const{setUserInfo}=useContext(UserContext);

  useEffect(()=>{
    fetch('http://localhost:3000/profile',{
      credentials:'include'
    }).then(response=>{
      response.json().then(jsonData=>{
        setUserInfo(jsonData)
      })
    })
  },[])


  return (
    <div className="min-h-screen flex flex-col font-Roboto bg-blue-950 text-red-50">
      <Header />
      <section className="max-w-md my-8 mx-auto">
        <h1 className="text-center text-3xl font-bold m-0 text-white">
          Rs400<span>.00</span>
        </h1>
        <form className="mt-5">
          <div className="basic flex gap-3 mb-3">
            <input
              className="w-full bg-transparent text-red-50 border-2 border-solid border-slate-700 py-1 px-2 rounded-md"
              type="text"
              placeholder="+200/-200"
            />
            <input
              className="w-full  bg-transparent text-slate-400 border-2 border-solid border-slate-700 py-1 px-2 rounded-md"
              type="datetime-local"
            />
          </div>
          <div className="info">
            <input
              className="w-full  bg-transparent text-red-50 border-2 border-solid border-slate-700 py-1 px-2 rounded-md"
              type="text"
              placeholder="description"
            />
          </div>
          <button
            className="w-full mt-3 p-1 bg-slate-50 text-slate-700 rounded-md"
            type="submit"
          >
            Add new transaction
          </button>
        </form>
        <div className="transactions mt-3">
          <div className="transaction flex justify-between py-2 ">
            <div className="left text-xl">Grocery expense</div>
            <div className="right text-right ">
              <div className="price text-red-600">-Rs500</div>
              <div className="datetime text-sm">2023-06-09 20:00</div>
            </div>
          </div>
          <div className="transaction flex justify-between py-2 ">
            <div className="left text-xl">Salary</div>
            <div className="right text-right">
              <div className="price text-green-600">+Rs1000</div>
              <div className="datetime text-sm">2023-06-09 20:00</div>
            </div>
          </div>
          <div className="transaction flex justify-between py-2 ">
            <div className="left text-xl">Bills</div>
            <div className="right text-right">
              <div className="price text-red-600">-Rs500</div>
              <div className="datetime text-sm">2023-06-09 20:00</div>
            </div>
          </div>
          <div className="transaction flex justify-between py-2 ">
            <div className="left text-xl">Bills</div>
            <div className="right text-right">
              <div className="price text-red-600">-Rs500</div>
              <div className="datetime text-sm">2023-06-09 20:00</div>
            </div>
          </div>
          
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ExpenseTracker;
