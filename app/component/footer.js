import React from "react";
import tele from "../asset/tele.png";
import xx from "../asset/xx.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="flex gap-2 pt-10 justify-end pb-4 ">
        <div className="flex items-center"></div>
        <a href="https://x.com/isaacnewtonsol">
          {" "}
          <Image
            className="lg:w-[120px] lg:h-[120px]"
            src={xx}
            alt=" "
            width={60}
            height={60}
          />
        </a>
        <a href="https://t.me/+a_vRyWuZ-XwyZDNl">
          {" "}
          <Image
            className="lg:w-[120px] lg:h-[120px]"
            src={tele}
            alt=" "
            width={60}
            height={60}
          />
        </a>
      </div>
    </div>
  );
}
