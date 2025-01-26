import React from "react";
import { data, imageArray } from "../data/homepage";

const HomePage = () => {
  return (
    // Container for centering the div
    <div className="flex flex-col items-center justify-center py-12 gap-8">
      {/* Flex Container */}
      <div className=" flex flex-col gap-28 w-4/5">
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-20">
          <HomePageImage src={imageArray[0]} />
          <HomePageContentItem data={data[0]} />
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row-reverse lg:gap-20">
          <HomePageImage src={imageArray[1]} />
          <HomePageContentItem
            data={data[1]}
            buttonTitle={"Get Started with Archivio"}
            onClick={() => {}}
          />
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-20">
          <HomePageImage src={imageArray[2]} />
          <HomePageContentItem
            data={data[2]}
            buttonTitle={"Login"}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

function HomePageImage({ src }) {
  return (
    <img
      className="h-96 w-full object-cover rounded-xl lg:flex-1 "
      src={src}
      alt="Library Image"
    />
  );
}

const HomePageContentItem = ({ data, buttonTitle, onClick }) => {
  const { title, description } = data;
  return (
    <div className="flex-1 flex flex-col gap-6 rounded-3xl">
      <h2 className="font-bold text-3xl">{title}</h2>

      {description.map((text, index) => (
        <p key={index} className="opacity-80">
          {text}
        </p>
      ))}

      {buttonTitle && onClick && (
        <button
          onClick={onClick}
          className="p-3 px-12 w-fit rounded-xl font-bold bg-cardVariant cursor-pointer hover:bg-primary transition-all duration-300 active:opacity-30"
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

export default HomePage;
