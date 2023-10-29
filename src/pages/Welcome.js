import React from "react";
import FlowerIcons from "../components/icons/FlowerIcons";
import SmileFace from "../components/icons/SmileFace";
import LaptopICon from "../components/icons/LaptopICon";
import StarIcon from "../components/icons/StarIcon";
import EyesIcons from "../components/icons/EyesIcons";
import SmileTag from "../components/icons/SmileTag";
import Circle from "../components/icons/Circle";
import Tag from "../components/icons/Tag";
import RectangleTag from "../components/icons/RectangleTag";
import Star2 from "../components/icons/Star2";
export default function Welcome() {
  return (
    <section class=" bg-white h-screen sm:h-screen">
      <div class="flex  h-full sm:h-screen p-4">
        <div className=" relative flex flex-wrap justify-center items-center MyFont w-full text-8xl object-cover ">
          <svg
            width="1416"
            height="100vh"
            viewBox="0 0 1416 198"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 99C2 104.804 6.22534 110.954 15.5125 117.301C24.7179 123.591 38.4236 129.738 56.2659 135.636C91.9237 147.425 143.628 158.071 207.645 167.023C335.651 184.922 512.554 196 708 196C903.446 196 1080.35 184.922 1208.35 167.023C1272.37 158.071 1324.08 147.425 1359.73 135.636C1377.58 129.738 1391.28 123.591 1400.49 117.301C1409.77 110.954 1414 104.804 1414 99C1414 93.1964 1409.77 87.0455 1400.49 80.6993C1391.28 74.4089 1377.58 68.2623 1359.73 62.3637C1324.08 50.5753 1272.37 39.9288 1208.35 30.9772C1080.35 13.0781 903.446 2 708 2C512.554 2 335.651 13.0781 207.645 30.9772C143.628 39.9288 91.9237 50.5753 56.2659 62.3637C38.4236 68.2623 24.7179 74.4089 15.5125 80.6993C6.22534 87.0455 2 93.1964 2 99Z"
              stroke="black"
              stroke-width="4"
            />
            <RectangleTag x={"20%"} y={"-10%"} />
            <SmileTag x={"80%"} y={"60%"} />
            <Star2 x={"70%"} y={"60%"} />
            <SmileFace x={"5%"} y={"25%"} />
            <StarIcon x={"13%"} y={"-40%"} />
            <StarIcon x={"45%"} y={"-36%"} />
            <StarIcon x={"58%"} y={"-30%"} />
            <StarIcon x={"75%"} y={"-30%"} />
            <Tag x={"80%"} y={"-30%"} />
            <StarIcon x={"95%"} y={"50%"} />
            <LaptopICon x={"40%"} y={"30%"} />
            <FlowerIcons x={"0%"} y={"0%"} />
            <Circle x={"10%"} y={"-10%"} />
            <EyesIcons x={"60%"} y={"-40%"} />
            <text
              x="30%"
              y="-10%"
              text-anchor="middle"
              fill="black"
              font-size="200px"
              dy=".3em"
            >
              Hello
            </text>
            {/* <svg height="600px" x="50%" width="600px">
            <path
              id="myTextPath"
              d="M 94,0 A 94,94 0 0 1 -94,0 A 94,94 0 0 1 94,0"
              transform="translate(200,200)"
              fill="darkblue"
              stroke="darkblue"
              stroke-width="30"
            />

            <text
              x="25%"
              y="35%"
              text-anchor="middle"
              fill="white"
              font-size="20px"
              font-family="Arial"
              dy=".3em"
            >
              BC
            </text>

            <text
              font-size="20px"
              fill="white"
              stroke-width="0"
              dangerouslySetInnerHTML={{ __html: textPath }}
            ></text>
          </svg> */}
          </svg>
        </div>
      </div>
    </section>
  );
}
