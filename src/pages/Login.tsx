import loginBg1 from "../assets/images/login_bg.webp";
import loginBg2 from "../assets/images/login_bg_small.webp";
import coffeeShopIcon from "../assets/icons/header/coffee_shop.svg";
import emailIcon from "../assets/icons/register-login/email.svg";
import passwordIcon from "../assets/icons/register-login/password.svg";
import facebookBtn from "../assets/icons/register-login/facebook-btn.svg";
import googleBtn from "../assets/icons/register-login/google-btn.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const loginUser = () => {
    const url = "http://localhost:8000/users/account"
    axios.post(url)
  }
  return (
    <div className="bg-white flex px-[calc((100vw-1440px)/2)]">
      <img
        src={loginBg1}
        loading="lazy"
        alt="register-bg"
        id="bg1"
        className="h-screen max-h-[1080px] min-426-max-1080:hidden screen-max-425:hidden"
      />
      <img
        src={loginBg2}
        loading="lazy"
        alt="register-bg"
        id="bg2"
        className="hidden lg:block screen-1081:hidden"
      />
      <div
        className="flex justify-center items-center w-screen h-screen screen-max-425:max-h-[500px] max-h-[1080px] screen-h-1081:py-[200px] screen-h-1081:px-[0] screen-max-425:h-548 screen-max-425:w-320 screen-max-425:mx-10 screen-max-425:flex-1 screen-max-425:my-[calc((100vh-528px)/2)]"
        id="container-main-login"
      >
        <main className="flex flex-col w-full h-full p-[80px_60px] screen-max-425:p-0 screen-h-1081:py-0">
          <header className="flex items-start flex-[0.5] screen-max-425:flex-[0.25]">
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
          <section
            className="flex flex-col justify-between flex-2"
            id="login-form"
          >
            <p className="text-[#8E6447] font-semibold text-xl my-2">Login</p>
            <p
              id="p2-login"
              className="text-[#4F5665] font-normal text-lg mb-5 screen-max-425:mb-[15px] min-426-max-768:mb-[10px] screen-max-425:mb[5px]"
            >
              Fill out the form correctly
            </p>
            <form action="">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-[#0B132A]"
              >
                Email
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-md mb-5 p-2">
                <img
                  src={emailIcon}
                  width="16"
                  height="12"
                  alt="email-icon"
                  className="ml-2"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  className="flex-1 border-none focus:outline-none ml-2 min-426-max-768:mb-[10px] screen-max-425:mb-[15px]"
                />
              </div>
              <label
                htmlFor="password"
                className="text-lg font-semibold text-[#0B132A]"
              >
                Password
              </label>
              <div className="flex items-center border border-[#DEDEDE] rounded-md mb-5 p-2">
                <img
                  src={passwordIcon}
                  width="12.33"
                  height="12.33"
                  alt="password-icon"
                  className="ml-2 w-[16px] h-[16px]"
                />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  className="flex-1 border-none focus:outline-none ml-2 min-426-max-768:mb-[10px] screen-max-425:mb-[15px]"
                />
              </div>
              <button onClick={loginUser} className="w-full bg-[#FF8906] rounded-md border-none h-10 text-lg font-medium text-[#0B132A] hover:bg-[#fca23c] hover:font-bold cursor-pointer">
                LOGIN
              </button>
            </form>
          </section>
          <section className="flex flex-col justify-between items-center mt-4">
            <p className="text-lg font-normal">
              Have An Account?{' '}              
              <Link to="/register" className="text-[#1100FF] font-extrabold">Register</Link>
            </p>
            <div className="flex justify-between w-full mt-4 screen-max-425:justify-evenly">
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

export default Login;
