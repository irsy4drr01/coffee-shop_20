import { Link } from "react-router-dom";

// img
import productImg1 from '../assets/images/product/product-img-1.webp';
import productImg2 from '../assets/images/product/product-img-2.webp';
import productImg3 from '../assets/images/product/product-img-3.webp';
import productImg4 from '../assets/images/product/product-img-4.webp';
import recomendationImg from "../assets/images/product/recomendation_img.webp";

// icon
import thumbsUpIcon from '../assets/icons/product/ThumbsUp.svg';
import ShoppingCartOrange from '../assets/icons/product/ShoppingCartOrange.svg';
import arrowRight from "../assets/icons/arrow/arrow-right.svg";

// component
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import StarsRating from "../components/StarsRating";

function DetailProduct() {
  return (
    <>
    <body className="2xl:pl-custom 2xl:pr-custom bg-[#cecece]">
        <Header />
        <main className="bg-white">
            <section className="pt-[60px] sm:pt-[70px] lg:pt-[160px] pb-12 s:pb-0 px-3 lg:px-[120px] grid grid-cols-2 s:grid-rows-8-custom gap-y-3">
                <div className="col-start-1 pr-3 s:col-start-1 s:row-span-4">
                    <img
                        className="w-full h-auto"
                        src={productImg1}
                        alt="product-img-1"
                    />
                    <div className="w-full overflow-x-auto mt-[6px] screen-428:overflow-x-hidden">
                        <div className="flex space-x-2 screen-428:grid screen-428:grid-cols-3 lg:mt-3 screen-428:space-x-0 1.5xl:flex 1.5xl:justify-between">                    
                            <img
                                className="w-[60px] justify-self-start screen-428:w-[95%] h-auto"
                                src={productImg2}
                                alt="product-img-2"
                            />
                            <img
                                className="w-[60px] justify-self-center screen-428:w-[95%] h-auto"
                                src={productImg3}
                                alt="product-img-3"
                            />
                            <img
                                className="w-[60px] justify-self-end screen-428:w-[95%] h-auto"
                                src={productImg4}
                                alt="product-img-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-start-2 s:col-start-2 s:row-start-1 s:row-span-2">
                    <div className="bg-[#D00000] rounded-[10px] md:rounded-2xl w-fit md:mb-5">
                        <p className="text-[10px] md:text-base font-semibold text-white py-1 px-2">
                            FLASH SALE!
                        </p>
                    </div>
                    <p className="font-semibold md:text-4xl md:mb-5">Hazelnut Latte</p>
                    <p className="text-orangecustom text-[15px] md:text-2xl md:mb-5">
                        <span className="line-through text-redcustom text-[10px] md:text-lg">
                            IDR 20.000
                        </span>{' '}
                        IDR 10.000
                    </p>
                    <div className="flex justify-between w-[120px] md:w-40 md:mb-5">
                        <StarsRating
                            imgClassName="md:size-5"
                            rating={4.5}
                            ratingClassName="md:text-base"
                        />                        
                    </div>
                    <div className="flex items-center md:mb-5">
                        <p className="text-[12px] md:text-xl w-[100px] screen-450:w-fit mr-1">
                            200+ Review | Recomendation
                        </p>
                        <img src={thumbsUpIcon} alt="thumb" />
                    </div>
                    <p className="hidden ss:flex text-xs md:text-xl text-justify pt-1 md:mb-5">
                        Cold brewing is a method of brewing that combines ground coffee and cool
                        water and uses time instead of heat to extract the flavor. It is brewed
                        in small batches and steeped for as long as 48 hours.
                    </p>
                </div>
                <div className="flex ss:hidden flex-col col-span-2 s:col-start-2 s:row-start-3 s:row-span-2">
                    <p className="text-xs text-justify">
                        Cold brewing is a method of brewing that combines ground coffee and cool
                        water and uses time instead of heat to extract the flavor. It is brewed
                        in small batches and steeped for as long as 48 hours.
                    </p>
                </div>
                <div className="flex flex-col col-span-2 2ss:col-start-2 s:row-start-5 2ss:row-start-3 s:row-span-4 2ss:row-span-6">
                    <div className="flex justify-start items-center mb-2.5 w-fit h-fit md:mb-5">
                        <button
                            id="decrement"
                            className="flex justify-center items-center bg-white w-5 h-5 md:size-10 md:text-xl pb-1 rounded border-2 border-orangecustom"
                        >
                            -
                        </button>
                        <input
                            id="number"
                            type="number"
                            defaultValue="{1}"
                            min="{1}"
                            className="w-7 md:w-12 h-5 md:h-10 text-center text-xs md:text-xl rounded border-2 border-solid border-[#E8E8E8] outline-none"
                        />
                        <button
                            id="increment"
                            className="flex justify-center items-center bg-orangecustom w-5 h-5 md:size-10 md:text-xl pb-1 rounded border-2 border-orangecustom"
                        >
                            +
                        </button>
                    </div>
                    <p className="text-sm md:text-xl font-semibold mb-2.5 md:mb-5">
                        Choose Size
                    </p>
                    <div className="flex justify-between text-xs md:text-xl space-x-1 2ss:space-x-0 mb-2.5 md:mb-5">
                        <label className="flex items-center justify-center cursor-pointer w-[30vw] 2ss:w-[15vw] lg:w-[10vw] lg:max-w-[210px]">
                            <input
                                type="radio"
                                name="size"
                                defaultValue="reguler"
                                className="hidden peer"
                            />
                            <span className="text-center w-full py-1 border-2 peer-checked:border-orangecustom peer-checked:text-orangecustom">
                                REGULER
                            </span>
                        </label>
                        <label className="flex items-center justify-center cursor-pointer w-[30vw] 2ss:w-[15vw] lg:w-[10vw] lg:max-w-[210px]">
                            <input
                                type="radio"
                                name="size"
                                defaultValue="medium"
                                className="hidden peer"
                            />
                            <span className="text-center w-full py-1 border-2 peer-checked:border-orangecustom peer-checked:text-orangecustom">
                                MEDIUM
                            </span>
                        </label>
                        <label className="flex items-center justify-center cursor-pointer w-[30vw] 2ss:w-[15vw] lg:w-[10vw] lg:max-w-[210px]">
                            <input
                                type="radio"
                                name="size"
                                defaultValue="large"
                                className="hidden peer"
                            />
                            <span className="text-center w-full py-1 border-2 peer-checked:border-orangecustom peer-checked:text-orangecustom">
                                LARGE
                            </span>
                        </label>
                    </div>
                    <p className="text-sm md:text-xl font-semibold mb-2.5 md:mb-5">
                        Hot/Ice?
                    </p>
                    <div className="flex justify-between text-xs md:text-xl space-x-1 mb-10">
                        <label className="flex items-center justify-center cursor-pointer w-[45vw] 2ss:w-[23vw] lg:w-[18vw] lg:max-w-[315px]">
                            <input
                                type="radio"
                                name="temperature"
                                defaultValue="ice"
                                className="hidden peer"
                            />
                            <span className="text-center w-full py-1 border-2 peer-checked:border-orangecustom peer-checked:text-orangecustom">
                                Ice
                            </span>
                        </label>
                        <label className="flex items-center justify-center cursor-pointer w-[45vw] 2ss:w-[23vw] lg:w-[18vw] lg:max-w-[315px]">
                            <input
                                type="radio"
                                name="temperature"
                                defaultValue="hot"
                                className="hidden peer"
                            />
                            <span className="text-center w-full py-1 border-2 peer-checked:border-orangecustom peer-checked:text-orangecustom">
                                Hot
                            </span>
                        </label>
                    </div>
                    <div className="flex justify-between text-xs md:text-xl space-x-1">                        
                        <Link to={"/detail-order"} className="flex justify-center items-center py-1 w-[45vw] 2ss:w-[23vw] lg:w-[18vw] lg:max-w-[315px] rounded border-2 border-orangecustom bg-orangecustom hover:bg-white hover:text-orangecustom hover:border-orangecustom transition duration-300 ease-in-out">
                            <button>
                                Buy
                            </button>
                        </Link>
                        <button className="flex justify-center items-center py-1 w-[45vw] 2ss:w-[23vw] lg:w-[18vw] lg:max-w-[315px] rounded border-2 bg-white hover:border-orangecustom transition duration-300 ease-in-out">
                        <img
                            className="w-4 h-4 mx-2"
                            src={ShoppingCartOrange}
                            alt="shopping-cart"
                        />
                            <p className="text-orangecustom">add to cart</p>
                        </button>
                    </div>
                </div>
            </section>
            <section className="flex flex-col px-3 lg:px-[120px] s:pt-10 sm:pt-0 pb-10">
                <p className="font-bold text-black mb-2.5 sm:text-4xl">
                    Recommendation <span className="text-[#8E6447]">For You</span>
                </p>
                <div className="flex justify-between w-full h-[280px] space-x-2 mb-[5%] md:mb-[28%] xl:mb-[25%] 2s:grid 2s:grid-cols-3 2s:gap-10 lg:gap-3 lg:mt-3 2s:space-x-0 1.5xl:flex 1.5xl:justify-between">
                    <div className="min-w-[135px]">
                        <ProductItem 
                            name={"Hazelnut Latte"}
                            description={"You can explore the menu that we provide with fun and have your own taste to make your day better."}
                            originalPrice={20000}
                            discountedPrice={10000}
                            productImage={recomendationImg}
                            rating={4.0}
                            imgClassName="w-[10%]"
                        />
                    </div>
                    <div className="min-w-[135px]">
                        <ProductItem 
                            name={"Hazelnut Latte"}
                            description={"You can explore the menu that we provide with fun and have your own taste to make your day better."}
                            originalPrice={20000}
                            discountedPrice={10000}
                            productImage={recomendationImg}
                            rating={4.5}
                            imgClassName="w-[10%]"
                        />
                    </div>
                    <div className="hidden 2s:min-w-[135px] 2s:flex">
                        <ProductItem 
                            name={"Hazelnut Latte"}
                            description={"You can explore the menu that we provide with fun and have your own taste to make your day better."}
                            originalPrice={20000}
                            discountedPrice={10000}
                            productImage={recomendationImg}
                            rating={5.0}
                            imgClassName="w-[10%]"
                        />
                    </div>
                </div>
                <div className="flex justify-center space-x-3">
                    <div className="bg-orangecustom w-[30px] h-[30px] rounded-full flex justify-center items-center">
                        1
                    </div>
                    <div className="bg-[#E8E8E8] text-[#A0A3BD] w-[30px] h-[30px] rounded-full flex justify-center items-center">
                        2
                    </div>
                    <div className="bg-[#E8E8E8] text-[#A0A3BD] w-[30px] h-[30px] rounded-full flex justify-center items-center">
                        3
                    </div>
                    <div className="bg-orangecustom w-[30px] h-[30px] rounded-full flex justify-center items-center">
                        <img src={arrowRight} alt="arrow-right" />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </body>    
    </>
  );
}

export default DetailProduct;
