import "./reviews/Reviews.css";

import React, { useState } from "react";
import Data from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  console.log(Data);
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = Data[index];

  const checkNumber = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }

    return number;
  };

  const nextslid = () => {
    setIndex((index) => {
      let newindex = index + 1;
      console.log(newindex);
      return checkNumber(newindex);
    });
  };
  const prevslid = () => {
    setIndex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  };
  const randomseleckt = () => {
    //ease
    //setIndex(Math.floor(Math.random() * Data.length))
    let randomnumber = Math.floor(Math.random() * Data.length);

    if (randomnumber === index) {
      randomnumber = index + 1;
    }
    setIndex(checkNumber(randomnumber));
  };

  return (
    <div className="box ">
      <div>
        <img className="imgs" src={image} />
      </div>
      <h4 className="name">{name}</h4>
      <p className="job">{job}</p>
      <div className="lorem">{text}</div>
      <dev>
        <button className="go to legt" onClick={nextslid}>
          <FaChevronLeft />
        </button>
        <button className="go to right" onClick={prevslid}>
          <FaChevronRight />
        </button>
      </dev>
      <button className="" onClick={randomseleckt}>
        random
      </button>
    </div>
  );
};

export default Reviews;
