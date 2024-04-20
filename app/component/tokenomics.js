import React from "react";
import supply from "../asset/supply.png";
import tax from "../asset/tax.png";
import Image from "next/image";
export default function Tokenomics() {
  return (
    <div>
      <section className="">
        <div className="container mx-auto flex flex-col p-6">
          <h2 className="py-4 text-3xl font-bold text-center">
            JEZUS TOKENOMICS
          </h2>
          <div className="divide-y divide-gray-300">
            <div className="justify-center md:flex grid  p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <Image
                  className=""
                  src={supply}
                  alt="hero"
                  width={450}
                  height={450}
                />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  TOTAL SUPPLY : 1B
                </span>
              </div>
            </div>

            <div className="justify-center md:flex grid  p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <Image
                  className=""
                  src={tax}
                  alt="hero"
                  width={450}
                  height={450}
                />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">TAX : 0%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
