import { Link } from "react-router-dom";
import coffeeShopWhite from '../assets/icons/header/coffee_shop_white.svg';
import searchIcon from '../assets/icons/header/Search.svg';
import shoppingCart from '../assets/icons/header/ShoppingCart.svg';
import hamburgerMenu from "../assets/icons/hamburger-menu.svg";


function Header({ bgHeader }: {bgHeader?: string}) {
  return (
    <div>
      <header 
        className={`z-10 fixed bg-black ${bgHeader} text-white grid grid-cols-3 sm:grid-cols-12 h-[50px] sm:h-[60px] lg:h-[76px] w-screen max-w-screen-2xl px-[10px] sm:pl-5 lg:px-5 xl:px-0`}
      >
        <div 
          className="flex justify-start md:justify-center lg:justify-end xl:justify-start items-center col-start-1 lg:col-start-2 col-span-2 sm:col-span-3 lg:col-span-2"
        >
          <Link 
            to="/"
          >
            <img 
              className="mr-[10px] sm:w-[28px] lg:w-[35px] sm:h-[26px] lg:h-[35px] sm:mr-[15px]" 
              src={coffeeShopWhite} 
              alt="coffee-shop-icon" 
            />
          </Link>
          <Link 
            to="/"
          >
            <p 
              className="text-xl lg:text-2xl font-sacramento lg:mr-[10px]"
            >
              Coffee Shop
            </p>
          </Link>
        </div>
        <nav 
          className="hidden sm:text-sm lg:text-base sm:flex sm:justify-start sm:items-center sm:col-start-4 sm:col-span-4 xl:col-span-5"
        >
          <Link 
            to="/" 
            className="flex justify-center items-center h-[40px] w-[80px] xl:mx-3 rounded-[5px] hover:bg-gray-700"
          >
            Home
          </Link>
          <Link 
            to="/product" 
            className="flex justify-center items-center h-[40px] w-[80px] xl:mx-3 rounded-[5px] hover:bg-gray-700"
          >
            Product
          </Link>
        </nav>
        <div 
          className="flex justify-end md:justify-start xl:justify-end items-center col-start-3 sm:col-start-8 xl:col-start-9 col-span-1 sm:col-span-5 xl:col-span-3"
        >
          <button 
            className="flex justify-center items-center h-[40px] w-[40px] rounded-[5px] hover:bg-gray-700 md:mx-[7px] sm:p-[3px]"
          >
            <img 
              src={searchIcon} 
              alt="search-icon" 
            />
          </button>
          <button 
            className="flex justify-center items-center h-[40px] w-[40px] rounded-[5px] hover:bg-gray-700 md:mx-[7px] sm:p-[3px]"
          >
            <img 
              src={shoppingCart} 
              alt="shopping-cart" 
            />
          </button>
          <button 
            id="menu-button" 
            className="w-[35px] h-[30px] flex sm:hidden flex-col justify-evenly items-end hover:bg-gray-700 rounded-[5px]"
          >
            <img src={hamburgerMenu} alt="hamburger Menu" />
          </button>
          <Link 
            to="/login" 
            className="hidden sm:flex items-center text-[10px] md:text-sm lg:text-base mx-[10px] h-[0] py-[13px] md:py-[20px] lg:py-[22px] px-[8px] md:px-[12px] border-white border-solid border-[1px] rounded-[5px] font-medium hover:bg-gray-700"
          >
            Sign In
          </Link>
          <Link 
            to="/register" 
            className="hidden sm:flex items-center text-[10px] md:text-sm lg:text-base mx-[10px] h-[0] py-[13px] md:py-[20px] lg:py-[22px] px-[8px] md:px-[12px] rounded-[5px] font-medium text-[#0B132A] bg-orangecustom hover:bg-[#ff4006]"
          >
            Sign Up
          </Link>
        </div>
        <div 
          id="mobile-menu" 
          className="hidden absolute w-screen h-screen bg-white bg-opacity-10 backdrop-blur-[6px] lg:hidden"
        >
          <div 
            className="flex justify-end mt-3 mr-3"
          >
            <div 
              className="flex flex-col justify-evenly w-[150px] h-auto bg-black rounded-xl pl-3"
            >
              <button 
                id="close-menu" 
                className="absolute top-2 right-5 text-white text-2xl"
              >
                &times;
              </button>
              <Link 
                to="/" 
                className="text-white w-fit hover:text-gray-600 py-2"
              >
                Home
              </Link>
              <Link 
                to="/product" 
                className="text-white w-fit hover:text-gray-600 py-2"
              >
                Product
              </Link>
              <Link 
                to="/login" 
                className="text-white w-fit hover:text-gray-600 py-2"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="text-white w-fit hover:text-gray-600 py-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
