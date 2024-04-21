import React from "react";
import Image from "next/image";
import buy from "../asset/buy.png";
import bridge from "../asset/bridge.png";
export default function Buy() {
  return (
    <section className="p-4 lg:p-8 text-gray-800">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <Image src={buy} alt="hero" width={300} height={300} />
          <div className="flex flex-col justify-center flex-1  ">
            <span className="text-xs uppercasetext-gray-600">
              1. BUY SOME ETH IN PEACE
            </span>
            <h3 className="text-3xl font-bold">how to buy ETH</h3>
            <p className="my-6 text-gray-600">
              VISIT CHAINLIST TO ADD THE zkSYNC CHAIN NETWORK TO YOUR WALLET.
            </p>
            <p className="md:w-1/3">
              {" "}
              WITHDRAW ETH TO YOUR zkSYNC WALLET FROM COINBASE, BINANCE, BYIT OR
              OKX, MAKE SURE TO SELECT BASE AS THE WITHDRAWAL NETWORK! BRIDGE
              ETH TO BASE FROM ANOTHER CHAIN USING THESE A BRIDGE WE RECOMMEND
              CHANGENOW.
            </p>
          </div>
        </div>
        <div className=" flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <Image src={bridge} alt="hero" width={300} height={300} />
          <div className="flex flex-col justify-center flex-1 p-6  md:text-end">
            <span className="text-xs uppercasetext-gray-600">
              2. Get ETH on ZKSYNC
            </span>
            <h3 className="text-3xl font-bold">BRIDGE TO ZKSYNC</h3>
            <p className="my-6 text-gray-600">
              BRIDGE ETH TO ZKSYNC FROM ANOTHER CHAIN USING ORBITER BRIDGE WE
              RECOMMEND.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <Image src={buy} alt="hero" width={300} height={300} />
          <div className="flex flex-col justify-center flex-1 px-6 ">
            <span className="text-xs uppercase text-gray-600">
              3. BUY JEZUS CRIES
            </span>
            <h3 className="text-3xl font-bold">BUY JEZUS CRIES ON SYNCSWAP</h3>
            <p className="my-6 text-gray-600">
              go to sync swap paste the contract addreess echange vs eth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
