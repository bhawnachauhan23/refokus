import React from "react";
import Card from "./Card";
import { FaSkype } from "react-icons/fa";

function Cards() {
  var data = [
    {
      heading1: "Up Next: News",
      heading2: "Insights and behind the scenes",
      width: "basis-1/3",
      start: false,
      para: true,
      hover: "#29292E",
    },
    {
      heading1: "Get in touch",
      heading2: "Let's get to it, together ",
      width: "basis-2/3",
      start: true,
      para: false,
      hover: "#7443FF",
    },
  ];
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1 ">
        {data.map((elem, index) => (
          <Card key={index} val={elem} hover={index===0?"false":"true"} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
