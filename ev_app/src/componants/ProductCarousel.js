import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProductCarousel.css";
import { imagePath } from "../utils/IpConstantFile";

const products = [
    {
        id: 1,
        image: "/vehicleImages/v1.png",
        brand: "Brand A",
        price: "$49.99",
    },
    {
        id: 2,
        image: "/vehicleImages/v2.webp",
        brand: "Brand B",
        price: "$59.99",
    },
    {
        id: 3,
        image: "/vehicleImages/v3.png",
        brand: "Brand C",
        price: "$29.99",
    },
    {
        id: 4,
        image: "/vehicleImages/v4.png",
        brand: "Brand D",
        price: "$39.99",
    },
    {
        id: 5,
        image: "/vehicleImages/v5.webp",
        brand: "Brand E",
        price: "$99.99",
    },
    {
        id: 6,
        image: "/vehicleImages/v6.png",
        brand: "Brand D",
        price: "$39.99",
    },
    {
        id: 7,
        image: "/vehicleImages/v1.png",
        brand: "Brand E",
        price: "$99.99",
    },
    {
        id: 8,
        image: "/vehicleImages/v2.webp",
        brand: "Brand D",
        price: "$39.99",
    },
    {
        id: 9,
        image: "/vehicleImages/v3.png",
        brand: "Brand E",
        price: "$99.99",
    },
];

const ProductCarousel = ({ productData, setproductDetails, handleCardClick }) => {
    console.log("productData" + JSON.stringify(productData));
    const carouselRef = useRef();

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (direction === "left") {
            carouselRef.current.scrollLeft -= scrollAmount;
        } else {
            carouselRef.current.scrollLeft += scrollAmount;
        }
    };
    const handleClick = (product) => {
        setproductDetails(product);
        handleCardClick();
    };
    return (
        <div className="carousel-container">
            <div className="carousel-header">
                <h3>Related Products</h3>
                <div className="carousel-controls">
                    <FaChevronLeft className="arrow" onClick={() => scroll("left")} />
                    <FaChevronRight className="arrow" onClick={() => scroll("right")} />
                </div>
            </div>

            <div className="carousel" ref={carouselRef}>
                {productData?.map((product) => (
                    <div className="carousel-item" key={product._id} onClick={() => handleClick(product)}>
                        <div className="img-container"> <img src={imagePath + product?.variants[0]?.image} alt={product.brand} /></div>

                        <div className="product-content">
                            <h2>{product.brand}</h2>
                            <p className="price">{product.price}</p>
                            <div className="button-group">
                                <button className="btn">Explore More</button>
                                <button className="btn btn-outline">Details</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
