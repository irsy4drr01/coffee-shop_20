import coffeeShopIcon from '../assets/icons/header/coffee_shop.svg';
import facebookIcon from '../assets/icons/sosial-media/Facebook.svg';
import twitterIcon from '../assets/icons/sosial-media/Twitter.svg';
import instagramIcon from '../assets/icons/sosial-media/Instagram.svg';

function Footer() {
  return (
    <>
    <footer className="bg-grayfooter px-3 lg:px-[120px] py-0 sm:py-14">
      <div className="sm:grid sm:grid-cols-12">
        <div className="pb-6 sm:pb-0 sm:col-span-3 sm:pt-5">
          <div className="flex items-center py-4 sm:py-0">
            <img
              className="w-auto h-5"
              src={coffeeShopIcon}
              alt="coffee-shop-icon"
            />
            <p className="font-sacramento text-[#8E6447] font-semibold px-3">
              Coffee Shop
            </p>
          </div>
          <p className="text-justify text-[#4F5665]">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
        </div>
        <div className="flex justify-evenly sm:col-start-5 sm:col-span-5">
          <div className="text-center sm:text-left pb-6 sm:pb-0 sm:flex-1">
            <h3 className="text-[#0B132A] font-medium pb-4">Product</h3>
            <ul className="text-[#4F5665]">
              <li className="pb-2">Our Product</li>
              <li className="pb-2">Pricing</li>
              <li className="pb-2">Locations</li>
              <li className="pb-2">Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="text-center sm:text-left pb-6 sm:pb-0 sm:flex-1 sm:pl-3">
            <h3 className="text-[#0B132A] font-medium pb-4">Engage</h3>
            <ul className="text-[#4F5665]">
              <li className="pb-2">Partner</li>
              <li className="pb-2">FAQ</li>
              <li className="pb-2">About Us</li>
              <li className="pb-2">Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="sm:col-span-3">
          <h3 className="text-[#0B132A] font-medium pb-4">Social Media</h3>
          <div className="flex justify-around sm:justify-start pb-4">
            <img className="w-10 h-10 sm:pr-2" src={facebookIcon} alt="facebook-icon" />
            <img className="w-10 h-10 sm:pr-2" src={twitterIcon} alt="twitter-icon" />
            <img className="w-10 h-10 sm:pr-2" src={instagramIcon} alt="instagram-icon" />
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start">
        <p className="text-[#AFB5C0]">©2020CoffeeStore</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
