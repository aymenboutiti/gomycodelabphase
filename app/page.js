import Image from "next/image";
import Herosection from "./herosection/page";
import Navbar from "./components/navbar/page";
import Blogs from "./blogs/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Herosection />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
