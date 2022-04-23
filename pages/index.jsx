import CoverSlide from "../components/LandingPage/CoverSlide";
import { Navbar } from "../components/Navbar/Navbar";
import { Card } from "../components/Card/Card";
import { ProductLine } from "../components/Product/ProductLine";
import Product from "../components/Product/Product";
import { useSelector } from "react-redux";
// import Footer from "../components/Footer/Footer";

export default function Home() {
  const { status } = useSelector((state) => state.component);

  return (
    <div className="w-full">
      <Navbar />
      <CoverSlide />
      {status && (
        <div className="m-10">
          <Card />
          <ProductLine />
          <div className=" flex h-auto overflow-x-auto sm:mt-3 sm:w-full sm:flex-wrap sm:justify-center sm:space-x-5 sm:overflow-hidden">
            <Product img="naga" imgW={160} imgH={160} name="Buah Naga" />
            <Product img="delima" imgW={163} imgH={125} name="Buah Delima" />
            <Product img="ceri" imgW={300} imgH={220} name="Buah Cherry" />
            <Product img="bayam" imgW={150} imgH={150} name="Buah Bayam" />
            <Product img="brokoli" imgW={260} imgH={220} name="Buah Brokoli" />
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}

