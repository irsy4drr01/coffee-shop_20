import bgRegister1 from "../assets/images/register_bg.webp";
import bgRegister2 from "../assets/images/register_bg_small.webp";
import coffeeShopIcon from "../assets/icons/header/coffee_shop.svg";
import fullname from "../assets/icons/register-login/fullname.svg";
import emailIcon from "../assets/icons/register-login/email.svg";
import passwordIcon from "../assets/icons/register-login/password.svg";
import facebookBtn from "../assets/icons/register-login/facebook-btn.svg";
import googleBtn from "../assets/icons/register-login/google-btn.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="bg-gray-500 flex px-custom">
      <img
        src={bgRegister1}
        loading="lazy"
        alt="register-bg"
        className="h-screen max-h-[1080px] min-426-max-1080:hidden screen-max-425:hidden"
      />
      <img
        src={bgRegister2}
        loading="lazy"
        alt="register-bg"
        className="hidden h-screen max-h-[1080px] lg:block screen-1081:hidden"
      />
      <div className="bg-white flex justify-center items-center w-screen h-screen max-h-[1080px]">
        <main className="flex flex-col w-full h-full max-h-[600px] px-10 py-4">
          <header className="flex items-start mb-2">
            <Link to="/" className="mr-4">
              <img
                src={coffeeShopIcon}
                width="28"
                height="26"
                alt="coffee-shop-icon"
              />
            </Link>
            <Link to="/" className="text-2xl font-sacramento text-[#8E6447]">Coffee Shop</Link>
          </header>
          <section className="flex flex-col justify-between flex-grow">
            <p className="text-[#8E6447] font-semibold text-xl mb-2">Register</p>
            <p className="text-[#4F5665] font-normal text-base mb-2">
              Fill out the form correctly
            </p>
            <form>
              <label htmlFor="fullname" className="font-semibold text-base text-[#0B132A]">
                Full Name
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg mb-2">
                <img
                  src={fullname}
                  width="14.34"
                  height="18.41"
                  alt="fullname-icon"
                  className="ml-2.5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  id="fullname"
                  className="flex-1 my-2.5 ml-2.5 border-none focus:outline-none placeholder:text-sm"
                />
              </div>
              <label htmlFor="email" className="font-semibold text-base text-[#0B132A]">
                Email
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg mb-2">
                <img
                  src={emailIcon}
                  width="16"
                  height="12"
                  alt="email-icon"
                  className="ml-2.5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  autoComplete="username"
                  className="flex-1 my-2.5 ml-2.5 border-none focus:outline-none placeholder:text-sm"
                />
              </div>
              <label htmlFor="password" className="font-semibold text-base text-[#0B132A]">
                Password
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg mb-2">
                <img
                  src={passwordIcon}
                  width="12.33"
                  height="12.33"
                  alt="password-icon"
                  className="ml-2.5"
                />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  autoComplete="current-password"
                  className="flex-1 my-2.5 ml-2.5 border-none focus:outline-none placeholder:text-sm"
                />
              </div>
              <label htmlFor="confirm-password" className="font-semibold text-base text-[#0B132A]">
                Confirm Password
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-lg mb-2">
                <img
                  src={passwordIcon}
                  width="12.33"
                  height="12.33"
                  alt="password-icon"
                  className="ml-2.5"
                />
                <input
                  type="password"
                  placeholder="Enter Your Password Again"
                  id="confirm-password"
                  autoComplete="current-password"
                  className="flex-1 my-2.5 ml-2.5 border-none focus:outline-none placeholder:text-sm"
                />
              </div>
              <button
                type="button"
                className="w-full bg-orangecustom rounded-md border-none h-10 text-base font-medium text-[#0B132A] hover:bg-orange-400 hover:font-bold"
              >
                REGISTER
              </button>
            </form>
          </section>
          <section className="flex flex-col justify-between items-center mt-4">
            <p className="text-base font-normal">
              Have An Account?{' '}              
              <Link to="/login" className="font-bold text-blue-700">Login</Link>
            </p>
            <div className="flex justify-between screen-max-425:justify-around w-full">
              <div className="flex justify-center items-center w-[49%] p-2 rounded-md shadow-sm cursor-pointer screen-max-425:w-10 screen-max-425:h-10 screen-max-425:items-center">
                <img
                  src={facebookBtn}
                  width="20"
                  height="19.88"
                  alt="facebook-icon"
                  className="mr-4 screen-max-425:m-0"
                />
                <p className="screen-max-425:hidden">Facebook</p>
              </div>
              <div className="flex justify-center items-center w-[49%] p-2 rounded-md shadow-sm cursor-pointer screen-max-425:w-10 screen-max-425:h-10 screen-max-425:items-center">
                <img
                  src={googleBtn}
                  width="24"
                  height="24"
                  alt="google-icon"
                  className="mr-4 screen-max-425:m-0"
                />
                <p className="screen-max-425:hidden">Google</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Register;