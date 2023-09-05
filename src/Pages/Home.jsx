import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
        <div className=" font-Roboto py-8 px-4 flex flex-col justify-around md:items-center lg:flex-row ">
          <div className="w-full lg:w-2/4 p-4">
            <h1 className="text-3xl md:text-4xl py-4 lg:text-5xl font-bold">
              Welcome to Expense Master Your Ultimate Financial Companion
            </h1>
            <p className="text-lg lg:text-xl py-4">
              Take control of your finances with ease using our intuitive
              expense tracker web app. Say goodbye to financial stress and hello
              to financial freedom. With ExpenseMaster, you can effortlessly
              monitor your expenses and gain valuable insights into your
              spending habits.
            </p>
            <h1 className="text-xl lg:text-2xl py-4">
              <Link to="/Register" className="font-bold text-slate-600">
                Create{' '}
              </Link>
              an account to try it or,
              <Link to="/Login" className="font-bold text-slate-600">
                {' '}
                Login{' '}
              </Link>
              if you are an existing user
            </h1>
          </div>
          <img src="hero2.jpg" className="max-w-lg rounded-3xl shadow-xl"></img>
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
