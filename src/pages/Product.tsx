import productImg6 from "../assets/images/product/product-img-6.png";
import bgProductPage from "../assets/images/product/bg-product-page.png";
import imgPromo from "../assets/images/product/img-promo.png";

import arrowRightBlack from "../assets/icons/arrow/arrow-right-black.svg";
import arrowLeftBlack from "../assets/icons/arrow/arrow-left-black.svg";
import arrowRight from "../assets/icons/arrow/arrow-right.svg";

import ProductItem from "../components/ProductItem";

function Product() {
  return (
    <>
    <main>
        <section className="bg-white pt-16 pb-10">
            <div
                className="h-[305px] flex pl-28 items-center bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${bgProductPage})` }}
                >
                <p className="max-w-[900px] text-[#FFF] text-[48px] font-medium">
                    We Provide Good Coffee and Healthy Meals
                </p>
            </div>
        </section>
        <section className="bg-white text-[black] flex flex-col gap-[20px] pb-10">
            <div className="flex justify-between items-center px-28">
                <p className="font-bold text-[48px] ">Today <span className="text-[#8E6447]">Promo</span></p>
                <div className="flex gap-3">
                    <div className="bg-[#E8E8E8] size-10 rounded-full flex justify-center items-center">
                        <img
                            src={arrowLeftBlack}
                            alt="arrow-left"
                        />
                    </div>
                    <div className="bg-orangecustom size-10 rounded-full flex justify-center items-center">
                        <img
                            src={arrowRightBlack}
                            alt="arrow-right"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-[20px]">
                <div className="flex-1 flex space-x-4 px-[20px] h-[110px] bg-[#88B788] rounded-[20px]">
                    <img
                        className="pt-3"
                        src={imgPromo}
                        alt="img-promo"
                    />
                    <div className="flex flex-col justify-evenly">
                        <p className="leading-none">
                            <span className="font-bold">HAPPY MOTHER'S DAY!</span> <br />
                            Get one of our favorite menu for free!
                        </p>
                        <p className="text-[white]">
                            <a href="#">Klaim Kupon</a>
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex space-x-4 px-[20px] h-[110px] bg-[#88B788] rounded-[20px]">
                    <img
                        className="pt-3"
                        src={imgPromo}
                        alt="img-promo"
                    />
                    <div className="flex flex-col justify-evenly">
                        <p className="leading-none">
                            <span className="font-bold">HAPPY MOTHER'S DAY!</span> <br />
                            Get one of our favorite menu for free!
                        </p>
                        <p className="text-[white]">
                            <a href="#">Klaim Kupon</a>
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex space-x-4 px-[20px] h-[110px] bg-[#88B788] rounded-[20px]">
                    <img
                        className="pt-3"
                        src={imgPromo}
                        alt="img-promo"
                    />
                    <div className="flex flex-col justify-evenly">
                        <p className="leading-none">
                            <span className="font-bold">HAPPY MOTHER'S DAY!</span> <br />
                            Get one of our favorite menu for free!
                        </p>
                        <p className="text-[white]">
                            <a href="#">Klaim Kupon</a>
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex space-x-4 px-[20px] h-[110px] bg-[#F5C361] rounded-[20px]">
                    <img
                        className="pt-3"
                        src={imgPromo}
                        alt="img-promo"
                    />
                    <div className="flex flex-col justify-evenly">
                        <p className="leading-none">
                            <span className="font-bold">
                            Get a cup of coffee for free on sunday morning
                            </span>{" "}
                            <br />
                            Only at 7 to 9 AM
                        </p>
                        <p className="text-[white]">
                            <a href="#">Klaim Kupon</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] px-28">
                <div className="w-12 h-4 bg-orangecustom rounded-full" />
                <div className="w-5 h-4 bg-[#DDE0E4] rounded-full" />
                <div className="w-5 h-4 bg-[#DDE0E4] rounded-full" />
                <div className="w-5 h-4 bg-[#DDE0E4] rounded-full" />
            </div>
        </section>
        <section className="bg-white px-28">
            <p className="text-[#0B0909] text-[48px]">
                Our <span className="text-[#8E6447]">Product</span>
            </p>
            <div className="flex gap-[20px] justify-between ">
                <div className="flex flex-col w-full max-w-[380px]">
                    <form
                        action=""
                        className="gap-[15px] max-w-[385px] p-[30px] rounded-[16px] text-[white] bg-[black] flex flex-col"
                        >
                        <div className="flex justify-between">
                            <div>Filter</div>
                            <button type="reset" className="hover:text-orange-400">
                                Reset Filter
                            </button>
                        </div>
                        <label className="flex flex-col gap-[5px]" htmlFor="search">
                            <div>Search</div>
                            <input
                                className="p-[15px] text-[black]"
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Search Your Product"
                            />
                        </label>
                        <div>Category</div>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="favorite"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="favorite"
                                name="favorite"
                            />
                            <div>Favorite Product</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="coffee"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="coffee"
                                name="coffee"
                            />
                            <div>Coffee</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="non"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="non"
                                name="non"
                            />
                            <div>Non Coffee</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="food"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="food"
                                name="food"
                            />
                            <div>Foods</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="add"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="add"
                                name="add"
                            />
                            <div>Add-On</div>
                        </label>
                        <div>Sort By</div>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="Buy1get1"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="Buy1get1"
                                name="Buy1get1"
                            />
                            <div>Buy1get1</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="flash"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="flash"
                                name="flash"
                            />
                            <div>Flash Sale</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="birthday"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="birthday"
                                name="birthday"
                            />
                            <div>Birthday Package</div>
                        </label>
                        <label
                            className=" relative flex items-center gap-[40px]"
                            htmlFor="cheap"
                            >
                            <div className="flex items-center">
                                <i className="text-[black] absolute z-10" data-feather="check" />
                            </div>
                            <input
                                className="border-2 checked:border-none rounded-[8px] absolute h-[25px] w-[25px] appearance-none checked:bg-orange-500"
                                type="checkbox"
                                id="cheap"
                                name="cheap"
                            />
                            <div>Cheap</div>
                        </label>
                        <div>Range Price</div>
                        <label htmlFor="">
                            <input
                                className="w-[80%]"
                                type="range"
                                name="price"
                                id="price"
                                min={5.0}
                                max="1.000.000"
                                step=""
                            />
                        </label>
                        <button
                            className="rounded-[8px] bg-[#FF8906] py-[10px]"
                            type="submit"
                            >
                            Apply Filter
                        </button>
                    </form>
                </div>
                <div className="flex flex-col w-full pb-10">
                    <div className="grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-40 pb-40 w-full">
                        <div className="col-start-1 row-start-1">
                            <ProductItem
                                name="Product Name"
                                description="Smooth vanilla-infused espresso with creamy steamed milk, perfect for a delightful pick me up."
                                originalPrice={20000}
                                discountedPrice={10000}
                                productImage={productImg6}
                                rating={4.0}
                                imgStarClassName="w-[10%]"
                                flashSaleAbsoluteHidden="hidden"
                            />
                        </div>
                        <div className="col-start-2 row-start-1">
                            <ProductItem
                                name="Product Name"
                                description="Smooth vanilla-infused espresso with creamy steamed milk, perfect for a delightful pick me up."
                                originalPrice={20000}
                                discountedPrice={10000}
                                productImage={productImg6}
                                rating={4.0}
                                imgStarClassName="w-[10%]"
                                flashSaleAbsoluteHidden="hidden"
                            />
                        </div>
                        <div className="col-start-1 row-start-2">
                            <ProductItem
                                name="Product Name"
                                description="Smooth vanilla-infused espresso with creamy steamed milk, perfect for a delightful pick me up."
                                originalPrice={20000}
                                discountedPrice={10000}
                                productImage={productImg6}
                                rating={4.0}
                                imgStarClassName="w-[10%]"
                                flashSaleAbsoluteHidden="hidden"
                            />
                        </div>
                        <div className="col-start-2 row-start-2">
                            <ProductItem
                                name="Product Name"
                                description="Smooth vanilla-infused espresso with creamy steamed milk, perfect for a delightful pick me up."
                                originalPrice={20000}
                                discountedPrice={10000}
                                productImage={productImg6}
                                rating={4.0}
                                imgStarClassName="w-[10%]"
                                flashSaleAbsoluteHidden="hidden"
                            />
                        </div>
                        <div className="col-start-1 row-start-3">
                            <ProductItem
                                name="Product Name"
                                description="Smooth vanilla-infused espresso with creamy steamed milk, perfect for a delightful pick me up."
                                originalPrice={20000}
                                discountedPrice={10000}
                                productImage={productImg6}
                                rating={4.0}
                                imgStarClassName="w-[10%]"
                                flashSaleAbsoluteHidden="hidden"
                            />
                        </div>
                        <div className="col-start-2 row-start-3">
                            <ProductItem
                                name="Product Name"
                                description="Smooth vanilla-infused espresso with creamy steamed milk, perfect for a delightful pick me up."
                                originalPrice={20000}
                                discountedPrice={10000}
                                productImage={productImg6}
                                rating={4.0}
                                imgStarClassName="w-[10%]"
                                flashSaleAbsoluteHidden="hidden"
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
                            <img
                                src={arrowRight}
                                alt="arrow-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>    
  )
}

export default Product