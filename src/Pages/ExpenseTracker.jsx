import { useEffect, useContext, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { UserContext } from '../UserContext';
import formatISO9075 from 'date-fns/formatISO9075';
import fmt from 'indian-number-format';

const ExpenseTracker = () => {
  const { setUserInfo } = useContext(UserContext);
  const [expense, setExpense] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDesciption] = useState('');
  const [expensedata, setExpenseData] = useState({});
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  //only onmount
  useEffect(() => {
    fetch('https://expensetracker-svi3.onrender.com/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((jsonData) => {
        setUserInfo(jsonData);
      });
    });
    fetchExp(); 
  }, []);
  
  const fetchExp = () => {
    fetch('https://expensetracker-svi3.onrender.com/expense', {
      method: 'GET',
      credentials: 'include',
    }).then((res) => {
      res.json().then((data) => {
        data.reverse();
        setExpenseData(data);
        let finalBalance = 0;
        Object.values(data).forEach((expenseItem) => {
          let exp = parseInt(expenseItem.expense);
          finalBalance += exp;
        });
        setBalance(finalBalance);
        setLoading(false);
      });
    });
  };

  const addExpense = async (e) => {
    e.preventDefault();
    const response = await fetch('https://expensetracker-svi3.onrender.com/expense', {
      method: 'POST',
      body: JSON.stringify({ expense, datetime, description }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.status == 200) {
      const exp=parseInt(expense);
      setExpense('');
      setDatetime('');
      setDesciption('');
      fetchExp().then(setBalance(balance+exp) )
    } else {
      alert('Failed to add Expense');
    }
  };

  const handleDelete= async (id)=>{
    //change alert to MUI modal
    const confirmDel=window.confirm("Are you sure you want to delete this expense?")
    if(confirmDel){
      const response= await fetch('https://expensetracker-svi3.onrender.com/expense/'+id,{
        method:'DELETE',
        credentials:'include'
      });
      if(response.status==200){
        const updatedExpensedata = expensedata.filter((data) => data._id !== id);
        setExpenseData(updatedExpensedata);
        let finalBalance = 0;
        updatedExpensedata.forEach((expenseItem) => {
          let exp = parseInt(expenseItem.expense);
          finalBalance += exp;
        });
        setBalance(finalBalance);
      }
      else{
        alert("Failed to delete expense, try again")
      }
    }
  }
 
  return (
    <div className="min-h-screen flex flex-col font-Roboto bg-blue-950 text-red-50">
      <Header />
      <section className="max-w-md my-8 mx-auto">
        {loading ? (
          <h1 className='"text-center text-3xl font-bold m-0 text-white'>
            Fetching your data please wait...
          </h1>
        ) : (
          <h1
            className={
              'text-center text-3xl font-bold m-0 ' +
              (balance < 0 ? 'text-red-500' : 'text-green-500')
            }
          >
            Rs.{fmt.formatFixed(Math.abs(balance), 2)}
          </h1>
        )}

        <form className="mt-5" onSubmit={addExpense}>
          <div className="basic flex gap-3 mb-3">
            <input
              className="w-full bg-transparent text-red-50 border-2 border-solid border-slate-700 py-1 px-2 rounded-md"
              type="text"
              placeholder="+200/-200"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              required
            />
            <input
              className="w-full  bg-transparent text-slate-400 border-2 border-solid border-slate-700 py-1 px-2 rounded-md"
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
              required
            />
          </div>
          <div className="info">
            <input
              className="w-full  bg-transparent text-red-50 border-2 border-solid border-slate-700 py-1 px-2 rounded-md"
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDesciption(e.target.value)}
              required
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
          {expensedata.length > 0 &&
            expensedata.map((data) => (
              <div
                key={data._id}
                className="transaction flex justify-between py-2 "
              >
                <div className="left text-xl">{data.description}</div>
                <div className="right text-right flex gap-1 md:gap-3">
                  <div className="expense-datetime">
                    <div
                      className={
                        'price ' +
                        (data.expense < 0 ? 'text-red-500' : 'text-green-500')
                      }
                    >
                      Rs.{fmt.formatFixed(Math.abs(data.expense), 2)}
                    </div>
                    <div className="datetime text-sm">
                      {formatISO9075(new Date(data.datetime))}
                    </div>
                  </div>
                  <div onClick={()=>handleDelete(data._id)} className="flex items-center cursor-pointer text-2xl hover:text-blue-300 duration-500">
                    <ion-icon name="trash"></ion-icon>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ExpenseTracker;
