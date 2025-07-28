import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Items from "@/components/Items";
export default function Home() {
  return (
   <div>
    <Navbar />
    <Items />
    <Footer />
   </div>
  );
}
