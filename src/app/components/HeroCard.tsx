import React from "react";
import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="z-20 flex flex-row   justify-center lg:mt-16 lg:mb-10 lg:-ml-5">
      <Image
        src="/kohli-removebg-preview.png"
        alt="Picture of the author"
        width={600}
        height={100}
      />
    </div>
  );
};

export default HeroCard;
