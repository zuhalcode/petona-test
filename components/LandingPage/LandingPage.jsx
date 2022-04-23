import { Card } from "../Card/Card";
import { Navbar } from "../Navbar/Navbar";
import CoverSlide from "./CoverSlide";
import ProductLine from "../Product/ProductLine";
import Product from "../Product/Product";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CoverSlide />
      <div className="m-10">
        <Card />
        <ProductLine />
        <div className=" flex h-96 w-full flex-wrap space-x-8">
          <Product img="naga" imgW={160} imgH={160} name="Buah Naga" />
          <Product img="delima" imgW={163} imgH={125} name="Buah Delima" />
          <Product img="ceri" imgW={300} imgH={220} name="Buah Cherry" />
          <Product img="bayam" imgW={150} imgH={150} name="Buah Bayam" />
          <Product img="brokoli" imgW={260} imgH={220} name="Buah Brokoli" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
