import React from "react";
import { data, imageArray } from "../data/homepage";

const HomePage = () => {
  return (
    // Container for centering the div
    <div className="flex flex-col items-center justify-center py-12 gap-8">
      {/* Grid Container */}
      <div className="grid grid-cols-2 gap-20 place-items-center w-4/5">
        <HomePageImage src={imageArray[0]} />

        <HomePageContentItem data={data[0]} />

        <HomePageContentItem
          data={data[1]}
          buttonTitle={"Get Started with Archivio"}
          onClick={() => {}}
        />

        <HomePageImage src={imageArray[1]} />
        <HomePageImage src={imageArray[2]} />

        <HomePageContentItem
          data={data[2]}
          buttonTitle={"Login"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

function HomePageImage({ src }) {
  return (
    <img
      className="h-96 w-full object-cover rounded-xl"
      src={src}
      alt="Library Image"
    />
  );
}

const HomePageContentItem = ({ data, buttonTitle, onClick }) => {
  const { title, description } = data;
  return (
    <div className="flex flex-col gap-6 rounded-3xl p-4">
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
