import './App.css';
import ProductDetail from './componants/ProductDetails';
import Header from './componants/Header';
import PetrolPriceCalculator from './componants/PetrolPriceCalculator';
import ProductCarousel from './componants/ProductCarousel';
import Footer from './componants/Footer';
import TabContainer from './componants/TabContainer';
// import { getProducts } from './Services/ProductService';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { serverIpPath } from './utils/IpConstantFile';
import RelatedArticles from './componants/RelatedArticles';
// import ProductDetailsPage from './componants/ProductDetailsPage';

function App() {
  const [productData, setProductData] = useState(null);
  const [productDetails, setproductDetails] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${serverIpPath}/ev/getProducts`);
        console.log(JSON.stringify(res));
        setProductData(res.data);
        setproductDetails(res?.data?.[0]);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, []);

  const topRef = useRef(null);

  const handleCardClick = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <Header />
      {/* <ProductDetailsPage productDetails={productDetails} refProp={topRef} /> */}
      <ProductDetail productDetails={productDetails} refProp={topRef} />
      <PetrolPriceCalculator />
      <TabContainer productDetails={productDetails} />
      <ProductCarousel productData={productData} setproductDetails={setproductDetails} handleCardClick={handleCardClick} />
      <RelatedArticles />
      <Footer />

    </div>
  );
}

export default App;
