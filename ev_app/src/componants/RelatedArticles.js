// import React, { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./RelatedArticles.css";
// import { imagePath } from "../utils/IpConstantFile";

// const products = [
//     {
//         id: 1,
//         image: "/images/im401.png",
//         brand: "Honda Adventure & Touring Bikes in India 2025: The Complete Rider’s Guide",
//         price: "15/05/2025",

//     },
//     {
//         id: 2,
//         image: "/images/im404.png",
//         brand: "How to Get or Renew Your Driving Licence & IDP in Bengaluru (2025 Guide)",
//         price: "15/05/2025",
//     },

//     {
//         id: 3,
//         image: "/images/im402.png",
//         brand: "How to Get or Renew Your Driving Licence & IDP in Bengaluru (2025 Guide)",
//         price: "15/05/2025",
//     },
//     {
//         id: 4,
//         image: "/images/im403.png",
//         brand: "Honda Adventure & Touring Bikes in India 2025: The Complete Rider’s Guide",
//         price: "15/05/2025",
//     },

//     {
//         id: 5,
//         image: "/images/licence.jpg",
//         brand: "Duplicate Driving Licence Guide: Fees, Documents & How to Apply Online/ Offline",
//         price: "15/05/2025",
//     },
//     {
//         id: 6,
//         image: "/images/laptop.jpg",

//         brand: "All Driving License Categories &amp; Classes in India: A Primer",
//         price: "15/05/2025",

//     },

//     {
//         id: 7,
//         image: "/images/car.jpg",
//         brand: `How to Transfer Vehicle Ownership Online &amp; Offline in India (2025 Guide)`,
//         price: "15/05/2025",
//     },

// ];

// const RelatedArticles = () => {

//     const carouselRef = useRef();

//     const scroll = (direction) => {
//         const scrollAmount = 300;
//         if (direction === "left") {
//             carouselRef.current.scrollLeft -= scrollAmount;
//         } else {
//             carouselRef.current.scrollLeft += scrollAmount;
//         }
//     };

//     return (
//         <div className="carousel-container">
//             <div className="carousel-header">
//                 <h3>Related Articles
//                 </h3>
//                 <div className="carousel-controls">
//                     <FaChevronLeft className="arrow" onClick={() => scroll("left")} />
//                     <FaChevronRight className="arrow" onClick={() => scroll("right")} />
//                 </div>
//             </div>

//             <div className="carousel" ref={carouselRef}>
//                 {products?.map((product) => (
//                     <div className="carousel-item" key={product._id} >
//                         <img src={product?.image} alt={product.brand} />
//                         <h4>{product.brand}</h4>
//                         <p>{product.price}</p>
//                         {/* <div className="button-group">
//                             <button className="btn">Explore More</button>
//                             <button className="btn btn-outline">Details</button>
//                         </div> */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RelatedArticles;



import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./RelatedArticles.css"; // Styles included below

const products = [
    {
        id: 1,
        image: "/images/im401.png",
        brand: "Honda Adventure & Touring Bikes in India 2025: The Complete Rider’s Guide",
        price: "15/05/2025",

    },
    {
        id: 2,
        image: "/images/im404.png",
        brand: "How to Get or Renew Your Driving Licence & IDP in Bengaluru (2025 Guide)",
        price: "15/05/2025",
    },

    {
        id: 3,
        image: "/images/im402.png",
        brand: "How to Get or Renew Your Driving Licence & IDP in Bengaluru (2025 Guide)",
        price: "15/05/2025",
    },
    {
        id: 4,
        image: "/images/im403.png",
        brand: "Honda Adventure & Touring Bikes in India 2025: The Complete Rider’s Guide",
        price: "15/05/2025",
    },

    {
        id: 5,
        image: "/images/licence.jpg",
        brand: "Duplicate Driving Licence Guide: Fees, Documents & How to Apply Online/ Offline",
        price: "15/05/2025",
    },
    {
        id: 6,
        image: "/images/laptop.jpg",

        brand: "All Driving License Categories &amp; Classes in India: A Primer",
        price: "15/05/2025",

    },

    {
        id: 7,
        image: "/images/car.jpg",
        brand: `How to Transfer Vehicle Ownership Online &amp; Offline in India (2025 Guide)`,
        price: "15/05/2025",
    },

];

const RelatedArticles = () => {
    const carouselRef = useRef();

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (direction === "left") {
            carouselRef.current.scrollLeft -= scrollAmount;
        } else {
            carouselRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="ra-carousel-container">
            <div className="ra-carousel-header">
                <h3>Related Articles</h3>
                <div className="ra-carousel-controls">
                    <FaChevronLeft className="ra-arrow" onClick={() => scroll("left")} />
                    <FaChevronRight className="ra-arrow" onClick={() => scroll("right")} />
                </div>
            </div>
            <div className="ra-carousel" ref={carouselRef}>
                {products.map((product) => (
                    <div className="ra-carousel-item" key={product.id}>
                        <img src={product.image} alt={product.brand} />
                        <div className="c-content">
                            <h2>{product.brand}</h2>
                            <p>{product.price}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticles;
