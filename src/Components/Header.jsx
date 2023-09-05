import { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { id: 0, name: 'Home', link: '/' },
  { id: 1, name: 'Login', link: '/Login' },
  { id: 2, name: 'Signup', link: '/Register' },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navMenuToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div className="bg-bgpri shadow-md w-full fix top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-bgpri py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-Roboto text-slate-200">
          <span className="text-4xl text-bgquart pt-2 mr-1 ">
            <ion-icon name="wallet-outline"></ion-icon>
          </span>
          <Link to="/">ExpenseMaster</Link>
        </div>

        <div
          onClick={navMenuToggle}
          className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={toggle ? 'close-outline' : 'menu-outline'}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center pb-10 md:pb-0 absolute md:static bg-bgpri z-1 md:z-0 left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-600 ease-in-out ${
            toggle ? 'top-20' : 'top-[-490px]'
          } `}
        >
          {links.map((it) => (
            <li key={it.id} className="md:ml-8 my-7 md:my-0 text-xl">
              <Link
                className="text-slate-200 hover:text-gray-400 duration-500"
                to={it.link}
              >
                {it.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

//  {toggle?<ion-icon name="close" size="large" style={{color: "white"}}></ion-icon>:<ion-icon size="large" name="menu-outline" style={{color: "white"}}></ion-icon>}
