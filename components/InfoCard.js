import Image from "next/image";
import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          fill
          alt=""
          style={{ objectFit: "cover" }}
          sizes="auto"
        />
      </div>

      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
