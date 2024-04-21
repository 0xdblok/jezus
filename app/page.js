import Image from "next/image";
import Hero from "./component/hero";

import Tokenomics from "./component/tokenomics";
import Buy from "./component/buy";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="px-12 bg-[#F4A259]">
      <Hero />
      <Tokenomics />
      <Buy />
      <Footer />
    </div>
  );
}
