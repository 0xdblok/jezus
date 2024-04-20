import Image from "next/image";
import Hero from "./component/hero";

import Tokenomics from "./component/tokenomics";
import Buy from "./component/buy";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="px-10 bg-gray-300">
      <Hero />
      <Tokenomics />
      <Buy />
      <Footer />
    </div>
  );
}
