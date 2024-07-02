import { Link } from "react-router-dom";

import ShoppingCartOrange from '../assets/icons/product/ShoppingCartOrange.svg';
import StarsRating from "./StarsRating";

interface ProductItemProps {
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  productImage: string;
  rating: number;
  imgClassName: string;
}

function ProductItem(props: ProductItemProps) {
    const { name, description, originalPrice, discountedPrice, productImage, rating, imgClassName } = props;

    return (
        <>
        <div className="relative w-fit">
            <div className="absolute bg-white w-[90%] mt-[70%] ml-[5%] z-[5] py-1 px-3">
                <p className="text-xs md:text-xl font-semibold mb-1 md:mb-3">
                    {name}
                </p>
                <p className="text-[10px] md:text-xl text-justify mb-1 md:mb-3">
                    {description}
                </p>
                <div className="flex justify-between w-[100px] md:w-40 mb-1">
                   <StarsRating
                        rating={rating}
                        imgClassName={imgClassName}
                        ratingClassName="text-[10px] md:text-base leading-none"
                    />
                </div>
                <p className="text-orangecustom text-[10px] md:text-xl mb-1">
                    <span className="line-through text-redcustom text-[8px] md:text-base">
                        IDR {originalPrice.toLocaleString('id-ID')}
                    </span>{' '}
                    IDR {discountedPrice.toLocaleString('id-ID')}
                </p>
                <div className="flex justify-between text-xs md:text-xl space-x-1">                    
                    <Link to="/detail-order" className="w-[80%]">
                        <button className="flex justify-center items-center py-0.5 w-full rounded border-2 border-orangecustom bg-orangecustom hover:bg-[#ff4006] cursor-pointer">
                            Buy
                        </button>                    
                    </Link>
                    <button className="flex justify-center items-center py-0.5 md:py-0 w-[20%] rounded border-2 bg-white hover:border-orangecustom cursor-pointer">
                        <img
                            className="w-5 h-auto md:w-7 mx-2 md:mx-0"
                            src={ShoppingCartOrange}
                            alt="shopping-cart" />
                    </button>
                </div>
            </div>
            <div className="relative z-0">
                <p className="absolute mt-1 ml-1 text-[8px] text-white font-semibold bg-redcustom px-2 py-0.5 rounded-full">
                    FLASH SALE!
                </p>
                <img className="w-full h-auto" src={productImage} alt="recommendation-img" />
            </div>
        </div>
        </>        
    );
}

export default ProductItem;
