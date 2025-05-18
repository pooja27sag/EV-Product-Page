/** @format */

import React, { useEffect, useState } from "react";
// import './ProductDetails.css';
import "./ProductSpecs.css";
// import './ProductDetailsPage.css';
import ShowMoreText from "react-show-more-text";

import { imagePath } from "../utils/IpConstantFile";

const ProductDetails = ({ productDetails, refProp }) => {
    const [readMore, setReadMore] = useState(false);
    const [displayImage, setDisplayImage] = useState(productDetails?.variants[0]?.image);
    const [selectedOption, setSelectedOption] = useState("EMI");
    useEffect(() => {
        setDisplayImage(productDetails?.variants[0]?.image);
    }, [productDetails]);
    const getDisplayText = () => {
        if (selectedOption === "EMI") {
            return `EMI starts at ₹3928 per month.`;
        } else {
            return `Subscriptions start at ₹2000 per month.`;
        }
    };

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        console.log("Selected color:", selectedColor);
        productDetails?.variants?.filter((a) => {
            if (a.color == selectedColor) {
                setDisplayImage(a?.image);
            }
        });
        // You can set state or perform other logic here
    };
    console.log(displayImage + "   " + JSON.stringify(productDetails?.variants[0]));
    return (
        <div className="product-details-container" ref={refProp}>
            <div
                className="breadcrumbs"
                style={{
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    gap: "4px",
                }}
            >
                <a href="/">Home</a>{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>{" "}
                <a href="">Shop</a>{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>{" "}
                <a href="">Electric Vehicle</a>{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>{" "}
                {productDetails?.title}
            </div>

            <div className="product-main">
                <div className="product-gallery">
                    <div className="image-gallery-wrapper">
                        <img
                            src={imagePath + "/" + displayImage}
                            alt={productDetails?.title}
                            className="product-image"
                        />
                    </div>

                    <div className="product-features">
                        <div className="feature">
                            <img src="battery.svg" alt="Battery" />
                            <div className="value">{productDetails?.kwhBattery} kwh</div>
                            <div className="label">Battery</div>
                        </div>
                        <div className="feature">
                            <img src="/range.svg" alt="Range" />
                            <div className="value">{productDetails?.kmRange}km</div>
                            <div className="label">Range</div>
                        </div>
                        <div className="feature">
                            <img src="/charge.svg" alt="Charging Time" />
                            <div className="value">{productDetails?.chargingTime}Min</div>
                            <div className="label">Charging Time</div>
                        </div>
                    </div>
                </div>

                <div className="product-summary">
                    <h1 className="product-title">{productDetails?.title}</h1>
                    <p className="price">{productDetails?.price}</p>

                    <div className="emi-section">
                        <p>{getDisplayText()}</p>
                        <select value={selectedOption} onChange={handleChange}>                            <option value="emi">EMI</option>
                            <option value="subscriptions">Subscriptions</option>
                        </select>
                    </div>

                    <div className="product-short-description">
                        <ShowMoreText
                            /* Default options */
                            lines={3}
                            more="Show more"
                            less="Show less"
                            className="content-css"
                            anchorClass="show-more-less-clickable"
                            expanded={false}
                            // width={280}
                            truncatedEndingComponent={"... "}
                        >
                            <span>{productDetails?.description}</span>
                        </ShowMoreText>
                        {/* <button onClick={() => setReadMore(!readMore)} className="read-more-btn">
                            {readMore ? 'Read Less' : 'Read More'}
                        </button> */}
                    </div>

                    <hr className="description-divider" />

                    <div className="product-meta">
                        <span className="meta-item">
                            Brand: <strong>{productDetails?.brand}</strong>{" "}
                        </span>
                        <span className="meta-item">
                            Category:<strong>{productDetails?.category}</strong>{" "}
                        </span>
                    </div>
                    <hr className="description-divider" />

                    <div className="color-selector">
                        <label>Color</label>
                        <select onChange={(e) => handleColorChange(e)}>
                            <option value="">Choose an option</option>
                            {productDetails?.colors?.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>

                    <div className="addons">
                        <label className="addon-section">Addons</label>
                        <label>
                            <input type="checkbox" />
                            Ather Pro
                        </label>
                    </div>
                    <div className="exchange-section">
                        <span className="exchange-text">Save more with exchange</span>
                    </div>
                    <div className="pin-code-wrapper">
                        <label className="pin-code-header">Pin Code</label>
                        <div className="pin-code-section">
                            <div className="pin-code-input-wrapper">
                                <input type="text" placeholder="Enter Pincode" />
                                <button className="check-btn">Check</button>
                            </div>
                            <button className="add-to-cart-btn">Add to cart</button>
                        </div>
                        <p className="pin-code-note">
                            *Please enter your pincode to check availability in your area.
                        </p>
                    </div>

                    {/* <div className="product-meta">
                        <p>Brand: <a href="/shop/brand-ather">Ather Energy</a></p>
                        <p>Category: <a href="/product-category/electric-vehicle">Electric Vehicle</a></p>
                        <p>Tag: <a href="/product-tag/vehicle">Vehicle</a></p>
                    </div>

                    <button className="buy-btn">Buy or Subscribe</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
