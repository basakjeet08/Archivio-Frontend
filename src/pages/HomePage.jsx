import React from "react";
import { data, imageArray } from "../data/homepage";
import { Heading2, BodyText } from "../elements/Typegraphy";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../routes/AppRoutes";
import { PrimaryButton } from "../elements/Buttons";

const HomePage = () => {
  // Navigation Code
  const navigate = useNavigate();
  const registerUser = () => navigate(REGISTER_ROUTE);
  const loginUser = () => navigate(LOGIN_ROUTE);

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
            onClick={() => registerUser()}
          />
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-20">
          <HomePageImage src={imageArray[2]} />
          <HomePageContentItem
            data={data[2]}
            buttonTitle={"Login"}
            onClick={() => loginUser()}
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

function HomePageContentItem({ data, buttonTitle, onClick }) {
  const { title, description } = data;
  return (
    <div className="flex-1 flex flex-col gap-6 rounded-3xl">
      <Heading2 text={title} />

      {description.map((text, index) => (
        <BodyText key={index} text={text} />
      ))}

      {buttonTitle && onClick && (
        <PrimaryButton text={buttonTitle} onClick={onClick} />
      )}
    </div>
  );
}

export default HomePage;
