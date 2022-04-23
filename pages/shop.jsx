import { Navbar } from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
// import Selector from "../components/Shop/Selector";
import ProductList from "../components/Shop/ProductList";

const Shop = () => {
  const { status } = useSelector((state) => state.component);

  return (
    <div className={`${status ? "bg-[white]" : "bg-[white]"} pb-5`}>
      <Navbar />
      <div className="my-4 w-full px-3 text-2xl font-bold">
        Melon & Semangka <div className="font-semibold">Tampilkan semua produk</div>
      </div>
      <div className="sm:flex">
        {/* <div className=" mx-4 hidden max-h-96 gap-y-3 rounded-lg bg-gradient-to-br from-[#06BF75] to-[rgba(0,0,0,.4)] pb-7 sm:flex sm:h-96 sm:w-1/4 sm:flex-col md:h-80 lg:h-72">
          <Selector selector={`Pilih Kategori`}>Filter Produk</Selector>
          <Selector selector={`Pilih Kategori`}>Urutkan Produk</Selector>
          <Selector selector={`Pilih Provinsi`}>Provinsi</Selector>
        </div> */}
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
