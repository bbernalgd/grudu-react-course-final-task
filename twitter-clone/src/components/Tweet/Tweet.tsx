import React from "react";
import logo from "../../assets/img/twitter-logo.png";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
];

export const Tweet = () => {
  return (
    <>
      {features.map((feature) => (
        <div
          key={feature.name}
          className="relative p-4 border-x border-b border-slate-800"
        >
          <div className="flex gap-x-4 text-base/6 leading-7 text-white">
            <div className="basis-1/8">
              <div className="mx-auto rounded-full h-12 w-12">
                <img src={logo} alt="image description" />
              </div>
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold">
                {feature.name}
              </p>
              <div className="mt-2 text-xs md:text-sm leading-7 text-white">
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
