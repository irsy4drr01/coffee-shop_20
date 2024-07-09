// import { Link } from "react-router-dom";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// img
import bgHome1 from "../assets/images/home/bg-home1.png";
import bgHome2 from "../assets/images/home/bg-home2.png";
import profilePicture from "../assets/images/home/profile-picture.png";
import globalMap from "../assets/images/home/global-map.svg";
import productImg6 from "../assets/images/product/product-img-6.png";

// icon
import checkIcon from "../assets/icons/home/check-icon.svg";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Outlet } from "react-router-dom";

function CheckMark({text}: {text: string}): JSX.Element {
  return(
    <>
    <p className="flex text-[#4F5665]">
      <img
        className="mr-3"
        src={checkIcon}
        alt="check icon" />{text}
    </p>
    </>
  );
}

interface IProduct {
  'product name': string;
  price: number;
  description: string;
}

interface IProductResponse {
  msg: string;
  data: IProduct[];
}

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getHomeProducts = async () => {
      try {
        const response = await axios.get<IProductResponse>('http://localhost:8000/product', {
          params: {
            sort: 'newest',
            limit: 4,
          }
        });
        console.log('Response data:', response.data);
        console.log('Message:', response.data.msg);
        setProducts(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error message:', error.response?.data.msg || 'Unknown error');
          console.error('Error details:', error.response?.data.err || 'No additional error details');
          return;
        }
        console.error('Unexpected error:', error);
      }
    };
  
    getHomeProducts();
  }, []);
  return (
    <>
    {/* <body className="bg-gray-400"> */}
      {/* <Header bgHeader="bg-opacity-30" /> */}
        <main>
          <section className="grid grid-cols-2 grid-[repeat(2, minmax(1fr, 1fr))]">
            <div className="bg-gradient-to-t from-[#0B0909] to-[#39393a] w-[50vw] h-auto px-[15%] pt-[35%] pb-[30%] col-start-1 row-start-1">
              <div className="flex flex-col justify-between py-[10%] h-full ">
                <p className="text-white text-5xl font-medium">Start Your Day with Coffee and Good Meals</p>
                <p className="text-white text-base font-medium">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                <div className="w-36 h-12">
                  <button className="bg-orangecustom rounded-lg justify-center items-center h-full w-full">
                    <p className="text-black text-base font-medium">Get Started</p>
                  </button>
                </div>                
                <div className="grid grid-cols-3">
                  <div className="col-start-1 flex flex-col text-white">
                    <span className="text-orangecustom text-5xl font-medium mb-3">90+</span>
                    <span className="text-base font-medium">Staff</span>
                  </div>
                  <div className="col-start-2 flex flex-col text-white pl-6 border-solid border-x-2 border-white">
                    <span className="text-orangecustom text-5xl font-medium mb-3">100+</span>
                    <span className="text-base font-medium">Stores</span>
                  </div>
                  <div className="col-start-3 flex flex-col text-white pl-6">
                    <span className="text-orangecustom text-5xl font-medium mb-3">800+</span>
                    <span className="text-base font-medium">Customer</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className="bg-white col-start-1 row-start-2 px-[120px] py-[10%]">
              <div className="flex flex-col h-full justify-between">
                <div className="flex space-x-5 items-center">
                  <div
                    className="bg-orangecustom w-[7px] h-[68px]"
                    >
                  </div>
                  <p className="text-[#0B132A] text-5xl font-medium">
                    We Provide{' '}
                    <span className="text-[#8E6447]">Good Coffee</span>
                    {' '}and{' '}
                    <span className="text-[#8E6447]">Healthy Meals</span>
                  </p>
                </div>              
                <p className="text-[#4F5665]">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <CheckMark text={"High quality beans"} />
                <CheckMark text={"Healthy meals, you can request the ingredients"} />
                <CheckMark text={"Chat with our staff to get better experience for ordering"} />
                <CheckMark text={"Free member card with a minimum purchase of IDR 200.000."} />
              </div>              
            </div>
            <img
              className="col-start-2 row-start-1"
              src={bgHome1}
              alt="bg Home 1"
            />
            <img
              className="col-start-2 row-start-2"
              src={bgHome2}
              alt="bg Home 2"
            />
          </section>
          <section>
            <div className="bg-white flex flex-col items-center py-20">
              <p className="text-5xl font-medium pb-7">Here is People’s <span className="text-[#8E6447]">Favorite</span></p>
              <div className="w-24 h-2 bg-orangecustom"></div>
              <p className="text-base font-medium text-[#4F5665] pt-7">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            </div>
            <div className="bg-white grid grid-cols-4 gap-7 px-[120px]">
              {products.map((product: IProduct, index: number) => (
                <div key={index} className={`col-start-${index + 1}`}>
                  <ProductItem
                    name={product['product name']}
                    description={product.description}
                    originalPrice={product.price}
                    discountedPrice={product.price}
                    productImage={productImg6}
                    rating={4.0}
                    imgStarClassName="w-[10%]"
                    flashSaleAbsoluteHidden="hidden"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="bg-white pt-60">
            <div className="bg-white flex flex-col items-center py-20">
              <p className="text-5xl font-medium pb-7 text-[#8E6447]">Visit Our Store <span className="text-[#0B132A]">in the Spot on the Map Below</span></p>
              <div className="w-24 h-2 bg-orangecustom"></div>
              <p className="text-base text-center font-medium text-[#4F5665] pt-7">
                You can explore the menu that we provide with fun and have their own<br />
                taste and make your day better.
              </p>
            </div>
            <img
              className="px-[120px] pb-20"
              src={globalMap}
              alt="global Map" />            
          </section>
          <section className="bg-gradient-to-t from-[#0B0909] to-[#39393a] py-20 px-40">
            <div>
              <img src={profilePicture} alt="profile Picture" />
              <div>
                <p>TESTIMONIAL</p>
                
              </div>
            </div>            
          </section>
        </main>        
      {/* <Footer /> */}
    {/* </body>     */}
    </>
  );
}

export default Home;
