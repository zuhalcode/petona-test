import { Logo } from "../Navbar/Logo";
import Content from "./Content";
import Title from "./Title";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="py-3">
        <Logo bg={"bg-[green]"} color={"text-white"} textColor={"text-[white]"} />
      </div>
      <div className="grid grid-cols-4">
        <Title>
          Hubungi Kami
          <Content>Petona.com adalah marketplace dan komunitas agribisnis terbesar di Indonesia.</Content>
          <Content>JL. Ketintang No 79, Wonokromo,Kec. Wonokromo Kota surabaya, Jawa Timur. 60235</Content>
          <Content>Jam Layanan : 07:00 - 22:00</Content>
        </Title>
        <Title>
          Panduan Kami
          <Content>Tentang Petona</Content>
          <Content>Panduan Petona</Content>
          <Content>FAQ</Content>
          <Content>Blog</Content>
        </Title>
        <Title>
          Pembeli
          <div className="  ">
            <Content>Cara Beli di Petona</Content>
            <Content>Pengambilan Barang (Pembeli)</Content>
          </div>
        </Title>
        <Title>
          Penjual
          <div className=" ">
            <Content>Cara Jualan di Petona</Content>
            <Content>Pengembalian Barang (Penjual)</Content>
          </div>
        </Title>
      </div>
    </div>
  );
};

export default Footer;
