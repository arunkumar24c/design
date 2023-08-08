import React, { useState } from "react";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
const Hero = () => {
  const [count, setCount] = useState(2);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className=" flex justify-around p-[11rem] gap-5">
      {/* left container */}
      <div className="">
        {/* text */}
        <div>
          <h1 className="text-black font-bold text-5xl">
            Order Your <br />
            <span className="font-normal">favourite Foods</span>{" "}
          </h1>
          <p className="text-xl font-semibold text-[#696969] mt-7">
            Fresh and tasty seafood curry sit amet, consectetur
            <br /> Curabitur accumsan auctor pulvinar proin{" "}
            <span className="text-xl font-bold text-[black]">sit amet</span>,
          </p>
          <p className="text-4xl mt-7">
            Total Order:<span className="font-bold">$24.30</span>
          </p>
          <div className=" flex gap-10 mb-10 mt-10">
            <p className="flex gap-3 flex-row w-[8rem] h-[3.8rem] rounded-full p-3 border-2 border-[#dc4040]">
              <MdKeyboardArrowDown
                onClick={handleDecrement}
                className="cursor-pointer text-blue-600"
                size={25}
              />
              |<span>{count}</span>|
              <MdKeyboardArrowUp
                onClick={handleIncrement}
                size={25}
                className="cursor-pointer text-blue-600"
              />
            </p>
            <p className="bg-black font-bold gap-7 w-[12rem] h-[3.8rem] rounded-full flex p-3.5">
              <span>
                <FaShoppingBag
                  size={30}
                  className="bg-[#d7b242e7]   rounded-full p-2 text-black"
                />
              </span>
              <span className="text-white text-xl">Buy Now</span>
            </p>
          </div>
        </div>
        {/* card section */}
        <div className="flex flex-row gap-4 ">
          {/* 1st card */}
          <div className="bg-[#6fe26f] w-[7rem] h-[13rem] rounded-full p-4 text-center  ">
            <div className="w-[5rem] h-[5rem] ">
              <img
                src="https://thumbs.dreamstime.com/b/background-burger-237900385.jpg"
                alt="#"
                className="rounded-full "
              />
            </div>
            <div className="flex flex-col justify-center pt-6">
              <p className="text-xl text-[black]">Burger</p>
              <p className="text-black text-xl font-bold ">
                <span className="font-bold text-[red]">$</span>3.25
              </p>
            </div>
          </div>
          {/* 2nd card */}
          <div className="bg-[#e7b7e0] w-[7rem] h-[13rem] rounded-full p-4 text-center  ">
            <div className="w-[5rem] h-[5rem] ">
              <img
                src="https://thumbs.dreamstime.com/b/background-burger-237900385.jpg"
                alt="#"
                className="rounded-full "
              />
            </div>
            <div className="flex flex-col justify-center pt-6">
              <p className="text-xl text-[black]">Cake</p>
              <p className="text-black text-xl font-bold ">
                <span className="font-bold text-[red]">$</span>2.25
              </p>
            </div>
          </div>
          {/* 3rd card */}
          <div className="bg-[#ebc588c5] w-[7rem] h-[13rem] rounded-full p-4 text-center  ">
            <div className="w-[5rem] h-[5rem] ">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQIOF26xYC840GZBgLFm4-wU_r7F_wSdoJC6mNk130GA8iOYOx"
                alt="#"
                className="rounded-full "
              />
            </div>
            <div className="flex flex-col justify-center pt-6">
              <p className="text-xl text-[black]">Salad</p>
              <p className="text-black text-xl font-bold ">
                <span className="font-bold text-[red]">$</span>5.25
              </p>
            </div>
          </div>
          {/* arrow */}
          <div className="flex relative ">
            <div className="absolute right-[29rem] top-[5rem]">
              <MdOutlineArrowBackIosNew size={20} />
            </div>
            <div className="absolute left-[4rem] top-[5rem]">
              <MdOutlineArrowForwardIos size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* right container */}
      <div className="relative">
        {/* img container */}
        <div className="">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlQSbjAq17s9_E9h2CvnO240TbWyXF1_0YMTIrzw9TEZ7qBU1K"
            className="rounded-full w-[23rem] h-[24rem]"
          />
        </div>
        {/* card */}
        <div className="bg-[orange] w-[14rem] h-[14rem] ml-9 mt-5 absolute top-[23rem] right-[75px] rounded-xl">
          <div className="">
            <div className="flex p-10 gap-8">
              <p className="text-2xl text-[white] font-bold ">Salad</p>
              <p className="flex gap-2">
                <AiOutlineStar className="text-white pt-1" size={25} />{" "}
                <span className="text-white text-2xl">4.7</span>
              </p>
            </div>
            <div className="pl-5">
              <button className="bg-black text-white border-white border-2 flex w-[12rem] h-[3.5rem] p-3 rounded-full gap-4">
                <AiOutlineClockCircle size={25} className="pt-1" />
                <span className="text-xl">10-18 mins</span>
              </button>
            </div>
          </div>
        </div>
        {/* card section end */}
      </div>
    </div>
  );
};

export default Hero;
