import React from "react";
import Image from "next/image";
import jezus from "../asset/jezus.png";
import logo from "../asset/logo.png";
import nu from "../asset/nu.png";
import nuu from "../asset/nuu.png";
export default function Hero() {
  return (
    <div>
      <div className="md:flex md:justify-center ">
        <div>
          {" "}
          <Image className="" src={logo} alt="hero" width={450} height={450} />
        </div>
        <div className="text-center grid justify-center items-center pt-20 ">
          <h1 className="">
            Hi I'm JEZUS CRIES PEOPLE TELL ME I LOOK LIKE . I TELL THEM I’M A
            PRAYER!
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <a>
          {" "}
          <Image
            className="md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
            src={nuu}
            alt="hero"
            width={450}
            height={450}
          />
        </a>
      </div>
    </div>
  );
}
