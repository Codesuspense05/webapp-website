import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Ratings = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <AiFillStar
          key={i}
          
          color="#f6b100"
          className="mr-2 cursor-pointer 800px:text-[17px] max-400px:text-[11px]"
        />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <BsStarHalf
          key={i}
         
          color="#f6ba00"
          className="mr-2 cursor-pointer 800px:text-[17px] max-400px:text-[11px]"
        />
      );
    } else {
      stars.push(
        <AiOutlineStar
          key={i}
          
          color="#f6ba00"
          className="mr-2 cursor-pointer 800px:text-[17px] max-400px:text-[11px]"
        />
      );
    }
  }
  return <div className="flex"> {stars}</div>;
};

export default Ratings;
